import { openai } from './openai.js'

// Create a new run in the thread using the OpenAI API
const newRun = async () => {
    // Create a new run in the thread using the OpenAI API, passing the assistant_id and the thread messages
    const run = await openai.beta.threads.runs.create('thread_Q25HcsrtdLK9ffHlpiXKyl59', {
        assistant_id: 'asst_L1Lci8gfHRjbkNNF6ik1eRln',
    })

    console.log(run)
}
newRun()
