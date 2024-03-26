import { openai } from './openai.js'

// Method to send a new message to the chat completion API
const newAssistant = async () => {
    // Create a new chat completion using the OpenAI API, passing the current chat history and the new message
    const createAssistant = await openai.beta.assistants.create({
        instructions:
            'You are an HR bot, and you have to help our HR experts finding the perfect candidate for a job. You can ask questions to the candidate and provide feedback based on their answers.',
        name: 'HR Assistant', // Specify the name of the assistant
        tools: [{ type: 'retrieval' }], // Specify the tools to use
        model: 'gpt-4-turbo-preview', // Specify the model to use
    })
    console.log(createAssistant)
}
newAssistant()
