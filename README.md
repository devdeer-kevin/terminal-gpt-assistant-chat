# Node.js Terminal Application for OpenAI's Assistants API

This repository contains a Node.js terminal application designed to facilitate interactive conversations using OpenAI's GPT-4-turbo. It leverages the OpenAI API to create dynamic and intelligent responses based on user documents.

## Features

-   **[beta] The Complete Startup Set**: All methods to create an assistant, upload a file, connecting it to an assistant, creating a thread and creating a run.
-   **[alpha] Ask your Data**: The chatbot can answer questions regarding the document you've uploaded and linked to the connected assistant and thread. (It's still hit and miss.)

## Getting Started

### Prerequisites

-   Node.js installed on your machine.
-   An OpenAI API key.

### Installation (This is gonna be tough 🫠)

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Create a `.env` file at the root of your project and add your OpenAI API key as `OPENAI_API_KEY=<Your-API-Key>`.
4. Execute `node create-assistant` to get you assistant ID.
5. Execute `node create-file` to get your file ID.
6. Execute `node add-file-to-assistant` to connect your file to a specific assistant.
7. Execute `node create-thread` to get your thread ID.
8. Execute `node create-run` to get your run ID.
9. Add the the assistant ID of the assistant you want to speak to and the related thread ID to the `.env` file at the root of your project

### Running the Chatbot

Execute `node chat.js` to start the chatbot. Engage in a conversation by typing your messages into the console.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or enhancements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
