# Deploying TruthGuardAI

This guide explains how to deploy the TruthGuardAI application to Render.

## Prerequisites

- A GitHub account.
- A [Render](https://render.com/) account.
- The project pushed to a GitHub repository.

## Deployment Steps

1.  **Push to GitHub**: Ensure your latest code is pushed to your GitHub repository.
2.  **Create a New Web Service on Render**:
    - Go to the Render Dashboard.
    - Click **New +** and select **Web Service**.
    - Connect your GitHub repository.
3.  **Configure the Service**:
    - **Name**: `truthguardai` (or your preferred name)
    - **Region**: Choose the one closest to you.
    - **Branch**: `main` (or your default branch)
    - **Root Directory**: Leave empty (defaults to root).
    - **Runtime**: `Node`
    - **Build Command**: `npm install && npm run build`
    - **Start Command**: `node server/server.js`
4.  **Environment Variables**:
    - Scroll down to the **Environment Variables** section.
    - Add `GOOGLE_API_KEY`: Your Gemini API Key.
    - Add `NODE_VERSION`: `20` (Optional, but good practice).
5.  **Deploy**:
    - Click **Create Web Service**.

Render will now build your application (install dependencies, build the React frontend) and start the Node.js server.

## Local Development

To run the app locally:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    This starts the Vite dev server (frontend) and the Node.js server (backend) concurrently (if configured) or you can run them in separate terminals:
    - Terminal 1: `npm run dev`
    - Terminal 2: `node server/server.js`

The app will be available at `http://localhost:5173`. API requests are proxied to `http://localhost:5000`.
