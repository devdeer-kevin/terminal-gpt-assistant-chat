import { openai } from './openai.js'

// Method to send a new message to the chat completion API
const newAssistantFile = async () => {
    // Create a new chat completion using the OpenAI API, passing the current chat history and the new message
    const createAssistantFile = await openai.beta.assistants.files.create('asst_L1Lci8gfHRjbkNNF6ik1eRln', {
        file_id: 'file-fGUwGobEyAFkarVJLIQTr4CM',
    })
    console.log(createAssistantFile)
}
newAssistantFile()
