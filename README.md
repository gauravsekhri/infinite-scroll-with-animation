# Infinite Scroll with Animation

This repository demonstrates the implementation of infinite scrolling in a React.js application. It loads data dynamically from a MongoDB database containing 10,000 records. As the user scrolls to the bottom of the page, the next 10 records are automatically fetched and displayed, ensuring a seamless browsing experience.

## Tech stack

#### Frontend

`ReactJs` `React-Query` `Redux` `Tailwind CSS` `Shadcn UI` `Magic UI` `Javascript` `HTML` `CSS` `Vite`

#### Backend

`NodeJS` `NestJs` `ExpressJS` `MongoDb` `Vercel`

## Project Setup

#### Frontend

1. Switch to respective folder
   ```
   cd frontend
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Create `.env` and add below code
   ```
   VITE_BACKEND_BASE_URL=http://localhost:5000
   ```
4. Run the application
   ```
   npm run dev
   ```

#### Backend

1. Switch to respective folder
   ```
   cd backend
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Create `.env` and add below code
   ```
   MONGODB_URL=mongodb://localhost:27017/infinite-scroll
   ```
4. Run the application
   ```
   npm run start:dev
   ```

## Demo

This application has been deployed over github pages. Here is the [link](https://gauravsekhri.github.io/infinite-scroll-with-animation/)
