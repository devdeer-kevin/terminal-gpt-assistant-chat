import { openai } from './openai.js'
import readline from 'node:readline'

import formatMessage from './utils/formatMessage.mjs'

// Create a readline interface to read user input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const newMessage = async (message) => {
    const threadId = process.env.THREAD_ID
    const assistantId = process.env.ASSISTANT_ID

    let run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
        instructions: message.content,
    })
    while (['queued', 'in_progress', 'cancelling'].includes(run.status)) {
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait for 1 second
        run = await openai.beta.threads.runs.retrieve(run.thread_id, run.id)
    }
    if (run.status === 'completed') {
        const messages = await openai.beta.threads.messages.list(run.thread_id)
        for (const message of messages.data.reverse()) {
            console.log(`\n${message.role} > ${message.content[0].text.value}`)
        }
    } else {
        console.log(run.status)
    }
}

const chat = async () => {
    // Log a welcome message to the console
    console.log('The conversation has started. Write "reset" to start fresh or "exit" to end it.')
    // Method to process the user input and take appropriate actions
    const processUserInput = async (userInput) => {
        switch (userInput.toLowerCase()) {
            case 'exit':
                rl.close()
                break
            default:
                // Otherwise, send the user input to the chat completion API
                const userMessage = formatMessage(userInput)
                const response = await newMessage(userMessage)
                if (response) {
                    console.log(`\n`)
                }
                start()
        }
    }
    // Method to start the chat interface
    const start = () => {
        rl.question('You: ', (userInput) => processUserInput(userInput))
    }
    // Call the 'start' method to begin the chat interface
    start()
}
// Call the 'chat' method to start the conversation
chat()
