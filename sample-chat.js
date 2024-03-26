import { openai } from './openai.js'

const thread_id = process.env.THREAD_ID
const assistant_id = process.env.ASSISTANT_ID

const sampleChat = async () => {
    let run = await openai.beta.threads.runs.create(thread_id, {
        assistant_id: assistant_id,
        instructions: 'How do I have to clean the coffee machine?',
    })
    while (['queued', 'in_progress', 'cancelling'].includes(run.status)) {
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait for 1 second
        run = await openai.beta.threads.runs.retrieve(run.thread_id, run.id)
    }
    if (run.status === 'completed') {
        const messages = await openai.beta.threads.messages.list(run.thread_id)
        for (const message of messages.data.reverse()) {
            console.log(`${message.role} > ${message.content[0].text.value}`)
        }
    } else {
        console.log(run.status)
    }
}
sampleChat()
