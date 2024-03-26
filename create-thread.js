import { openai } from './openai.js'

// Method to create a new thread using the OpenAI API
const newThread = async () => {
    const emptyThread = await openai.beta.threads.create()
    console.log(emptyThread)
}
newThread()
