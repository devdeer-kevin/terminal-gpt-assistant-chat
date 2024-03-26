// Upload a file with an "assistants" purpose
import { openai } from './openai.js'
import fs from 'node:fs'

const uploadFile = async () => {
    const file = await openai.files.create({
        file: fs.createReadStream('coffee.pdf'),
        purpose: 'assistants',
    })
    console.log(file)
}
uploadFile()
