# React Post CRUD

This project is a simple React-based CRUD (Create, Read, Update, Delete) application deployed using Vite and hosted on GitHub Pages. It allows users to add, view, edit, and delete posts. This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and includes some linting rules.

## Project Overview

The goal of this project is to provide a basic demonstration of CRUD functionality in a React app, leveraging Vite for fast development and hot module reloading. The app includes a form for adding posts, a list of posts, and options to edit or delete posts. Bootstrap is used for styling the UI components.

## Demo

You can view the live project [here](https://madhanv22.github.io/react-post-crud/).

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast development environment for modern web projects.
- **Bootstrap**: Used for responsive design and styling.
- **GitHub Pages**: Used for deploying the application.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/madhanv22/react-post-crud.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-post-crud
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:5173` to see the application running.

## Usage

- **Create Post**: Fill out the form fields and click the "Add Post" button to add a new post to the list.
- **View Posts**: All posts will be displayed in a list on the main page.
- **Edit Post**: Click the "Edit" button next to a post to modify its content.
- **Delete Post**: Click the "Delete" button next to a post to remove it from the list.

## Available Scripts

In the project directory, you can run the following commands:

- `npm run dev`: Runs the app in development mode with hot module replacement using Vite.
- `npm run build`: Builds the app for production.
- `npm run preview`: Serves the production build locally to test the production output.

## Deployment

This project is deployed on GitHub Pages using Vite's build tools. To deploy your own version:

1. Update the `vite.config.js` file to include the `base` option:

    ```javascript
    export default defineConfig({
      base: '/react-post-crud/',
      plugins: [react()],
    });
    ```

2. Build the project:

    ```bash
    npm run build
    ```

3. Push the `dist` folder to the `gh-pages` branch of your repository:

    ```bash
    npm run deploy
    ```

## Learn More

- **Vite Plugins**:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

For more details, check the [project guide](#) (add the link to the guide if you have one).
