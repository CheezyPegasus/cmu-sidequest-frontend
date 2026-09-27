# CMU Sidequest Randomizer Frontend

This repository contains the frontend for my HW4 CMU Sidequest Randomizer.

The site is designed to run on GitHub Pages. Users choose their available time, maximum travel distance, budget, and group size. JavaScript sends those preferences as JSON to a Flask backend hosted on Render using `fetch()`.

The backend returns a matching Pittsburgh sidequest as JSON, and the frontend displays the recommendation in a card with its title, category, description, address, difficulty, estimated time/distance, cost, and ratings.

## Backend communication

The frontend sends a `POST` request to:

```text
/recommend
```

Example request body:

```json
{
  "time": 3,
  "distance": 10,
  "budget": "free",
  "group": "friends"
}
```

The returned JSON contains a `sidequest` object and information about how many entries matched the user's filters.

If the backend returns an error or cannot be reached, the frontend displays an error message instead of crashing.

## Connecting the deployed backend

The backend URL is configured near the top of `script.js`:

```js
const BACKEND_URL = "https://YOUR-RENDER-SERVICE.onrender.com";
```

After deploying the Flask backend to Render, replace the placeholder with the actual Render service URL.

## Running locally

You can open `index.html` directly in a browser, but the recommendation button will only work once `BACKEND_URL` points to a running backend.

For local backend testing, you can temporarily use:

```js
const BACKEND_URL = "http://127.0.0.1:5000";
```

## Technologies

- HTML
- CSS
- JavaScript
- Fetch API
- GitHub Pages
- Flask backend hosted on Render
