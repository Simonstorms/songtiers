# Songtiers

This is a music-themed web application built with TypeScript, Next.js, Express.js, Typeorm, Postgres and Tailwindcss. The application allows users to rank their top songs and their details.

![Linkal LinkedIn Chats (20)](https://github.com/Simonstorms/songtiers/assets/93795566/06276db9-09ab-41d1-bc1b-952b27bf119a)


## Description

Songtiers employs Next.js for server-side and client-side rendering, which speeds up content delivery and optimizes the application for search engines. The backend is powered by an Express server, allowing for efficient request handling and API management. The application uses PostgreSQL for data management, ensuring that all user data, including song rankings and user profiles, are securely managed and stored.

The application has the following features:

- Display of top songs: The application fetches song data and displays it to the user. Each song is displayed with its image, name, and artist.

- Responsive design: The application is designed to be responsive and works well on both desktop and mobile devices.



# Project Setup Guide

This guide outlines the necessary steps to set up a development environment for a project using Next.js, Express, and PostgreSQL with Docker Compose. Follow these instructions to clone the repository, configure all components, and set up the necessary environment variables.

## Cloning the Repository

1. Open your terminal.
2. Clone the project repository by running the following commands:

   ```bash
   git clone https://github.com/Simonstorms/songtiers
   cd songtiers
   ```


## Setting Up the Next.js Client

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Obtaining Spotify API Keys:
   - Visit the [Spotify for Developers](https://developer.spotify.com/) portal and log in or create an account.
   - Once logged in, create a new project in the Dashboard.
   - After creating your project, you will be able to access your `Client ID` and `Client Secret`.
   - Set the `Redirect URI` in your project settings to `http://localhost:3000` to match the local development environment.

3. Create a `.env.local` file in the client directory and add the following environment variables:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000
   NEXT_PUBLIC_SPOTIFY_CLIENT_ID=<your-spotify-client-id>
   NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=<your-spotify-client-secret>
   NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000
   ```

   - `NEXT_PUBLIC_API_URL`: URL to your Express server.
   - `NEXT_PUBLIC_SPOTIFY_CLIENT_ID`: Your Spotify application's client ID.
   - `NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET`: Your Spotify application's client secret.
   - `NEXT_PUBLIC_SPOTIFY_REDIRECT_URI`: Redirect URI for your Spotify application, set in your Spotify developer dashboard.

4. Install the required dependencies:

   ```bash
   npm install
   ```

5. Start the Next.js development server:

   ```bash
   npm run dev
   ```

6. Access the client application at [http://localhost:3000](http://localhost:3000) in your web browser.

## Setting Up the Express Server

1. From the root of the project, navigate to the server directory:

   ```bash
   cd server
   ```

2. Create a `.env` file in the server directory and add the following environment variables:

   ```
   PORT=8000
   CLIENT_URL=http://localhost:3000
   POSTGRES_HOST=localhost
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=admin
   POSTGRES_DB=postgres
   POSTGRES_PORT=5432
   JWT_SECRET=<your-jwt-secret>
   ```

   - `PORT`: The port your Express server will run on.
   - `CLIENT_URL`: URL to your Next.js client.
   - `POSTGRES_*`: Credentials and host information for your PostgreSQL database.
   - `JWT_SECRET`: A secret key for encoding JWT tokens.

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Build the files for the Express server:

   ```bash
   npm run build
   ```
5. Start the Express development server:

   ```bash
   npm run dev
   ```

6. The server will be running at [http://localhost:8000](http://localhost:8000).

## Setting Up the PostgreSQL Database with Docker Compose

1. Ensure Docker is installed and running on your machine.
2. Navigate to the project's server directory where the `docker-compose.yml` file is located.
3. Start the PostgreSQL service using Docker Compose:

   ```bash
   docker-compose up -d postgres
   ```

4. The PostgreSQL database will now be running in a Docker container and accessible on the default port 5432.

## Verifying the Setup

Once all services are started, verify that the setup is correct:

- The Next.js client should be accessible and functioning at `http://localhost:3000`.
- The Express server should be operational and reachable at `http://localhost:8000`.
- The PostgreSQL database should be up and running, ready for connections on port 5432.

Ensure all components are interacting correctly for full functionality.


## Contact

If you have any questions, feel free to reach out to us. You can contact me at `info@simongneuss.com`.
