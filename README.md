# AI Chat Backend API

This project is the backend service for an AI chat application, built with Express.js. It provides a simple REST API to handle user messages and return AI-generated responses.

## Features

-   **RESTful API:** A clean and well-defined API endpoint for chat interactions.

-   **CORS Enabled:** Allows for cross-origin requests from web clients.

-   **JSON Body Parser:** Automatically parses incoming request bodies as JSON.

-   **Environment Variables:** Manages sensitive information and configuration using `.env` files.

-   **Secure API Key Handling:** Includes a placeholder for API key validation.

## Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/en/ "null") (v14.x or higher)

-   [npm](https://www.npmjs.com/ "null") (Node Package Manager)

## Installation

Follow these steps to get the project up and running on your local machine.

1.  **Clone the repository:**

    ```
    git clone https://github.com/your-username/your-project-name.git
    cd your-project-name

    ```

2.  **Install dependencies:**

    ```
    npm install

    ```

3.  **Create a `.env` file:** Create a new file named `.env` in the root directory of your project and add the required environment variables.

    ```
    PORT=3000

    ```

4.  **Start the server:**

    ```
    npm start

    ```

The server will start on the port specified in your `.env` file (e.g., `http://localhost:3000`).

## API Endpoints

The following are the primary endpoints available in this API.


| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/`      | Checks if the API is running and returns a welcome message. |
| `POST` | `/chat`  | Sends a message to the AI service and returns a response. Expects a JSON body with a `message` string. |


### `/chat` Endpoint Request Body

The `POST` request to the `/chat` endpoint should include a JSON body with a single `message` field.

**Example Request:**

```
{
  "message": "Hello, what's the weather like today?"
}

```

⚙️ Environment Variables
------------------------

This project uses the `dotenv` library to manage environment variables. All variables listed below should be defined in your `.env` file.

| Variable | Description                     | Default Value |
|----------|---------------------------------|---------------|
| `PORT`   | The port the server will run on. | `3000`        |

