# Prompt Log

## AI tool used

- ChatGPT (GPT-5.6 Sol)

## Key prompts and requests

### 1. Understanding the assignment

> "Goal: Build a simple backend service on Render.com and integrate it with your portfolio website or a GitHub Pages site."

I asked ChatGPT to help determine a small, realistic backend/frontend architecture that would satisfy the HW4 requirements without over-scoping the project.

### 2. Building the MVP

> "can you build a MVP so I can launch in GitHub before deadline and modify a bit more tonight?"

ChatGPT helped create a minimal Flask backend and a small Sidequest dataset so the frontend/backend integration could work without depending on a third-party API.

### 3. Creating the frontend

> "I don't have the frontend"

ChatGPT created a standalone HTML/CSS/JavaScript frontend that collects time, distance, budget, and group preferences and sends them to the Flask `/recommend` endpoint using `fetch()`.

### 4. Publishing workflow

I asked ChatGPT for help preparing the frontend and backend as separate GitHub repositories and for the order in which to publish them to GitHub Pages and Render.

## What I reviewed

Before submission, I reviewed how:

- the form values are converted into a JSON request
- `fetch()` sends the request to the backend
- the frontend reads the JSON response
- returned sidequest fields are inserted into the page
- errors are displayed to the user
- the Render backend URL is configured in `script.js`
