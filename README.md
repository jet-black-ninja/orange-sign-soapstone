# Mini Message Board App

A simple message board application built with TypeScript, React, TailwindCSS, and ShadCN/UI for the frontend, with Express and Node.js handling the backend. Users can post messages, view a list of messages, and interact with the app in real-time.

## Features

- **Post Messages**: Users can submit and view messages in real-time.
- **Responsive Design**: Fully responsive, ensuring a seamless experience on mobile, tablet, and desktop devices.
- **Modern UI**: Styled using TailwindCSS and ShadCN/UI components for an elegant and minimalistic interface.
- **TypeScript**: Strongly typed frontend and backend codebase for better developer experience and maintainability.
- **REST API**: Backend built using Node.js and Express, providing RESTful endpoints for managing messages.

## Tech Stack

### Frontend

- **React**: For building the user interface.
- **TypeScript**: For type-safe development.
- **TailwindCSS**: For utility-first CSS styling.
- **ShadCN/UI**: For pre-built and customizable UI components.

### Backend

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework to create a robust API for handling messages.
  
## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/jet-black-ninja/orange-sign-soapstone
    cd orange-sign-soapstone
    ```

2. Install dependencies for both the frontend and backend:

    ```bash
    # Frontend
    cd frontend
    npm install

    # Backend
    cd ../backend
    npm install
    ```

3. Set up environment variables:

    - Create a `.env` file in the backend directory with the following:

    ```env
    PORT=5000
    MONGO_URI=your_database_url
    ```

4. Run the application:

    ```bash
    # Backend
    cd backend
    npm start

    # Frontend
    cd frontend
    npm build
    ```

5. Open your browser and navigate to `http://localhost:5137` to view the app.

## API Endpoints

- **GET /api/messages**: Fetches all posted messages.
- **POST /api/messages**: Submits a new message.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
