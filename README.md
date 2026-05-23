# AI-Powered Inspiration Board

An open-source web app that delivers daily, AI-generated inspiration—quotes, images, and creative prompts. Save your favorites to personalized boards and remix ideas for fresh creativity every day!

---

## Features
- **Daily AI-generated quotes, images, and prompts**
- **Save favorites to boards** (coming to frontend via local storage)
- **Remix inspirations for unique results** ("Remix" reload coming soon)
- **Simple social sharing** (planned)
- **Fast, modern web app:**
  - Frontend: React (Vite, TypeScript)
  - Backend: Node.js (Express, modular routing, dotenv, proper error handling)
- **Easy, local and cloud deployment**

## Project Structure

```
/
├── frontend/      # React app (Vite, TypeScript)
│   └── src/
├── backend/       # Node.js Express API
│   ├── src/
│   │   ├── server.js      # Express server w/ dotenv, error handler, modular routes
│   │   └── routes/
│   │       └── inspiration.js   # /api/inspiration route
├── backend/.env.example  # Example backend environment variables
├── .gitignore
└── README.md
```

## Setup

### Prerequisites
- Node.js >= 18
- npm or yarn

### 1. Clone the repo
```sh
git clone https://github.com/mya404/improved-train.git
cd improved-train
```

### 2. Setup Frontend
```sh
cd frontend
npm install
npm run dev
```
- The frontend app will run on http://localhost:5173

### 3. Setup Backend
```sh
cd backend
cp .env.example .env
npm install
npm run dev
```
- The backend API will run on http://localhost:3001

> You may need to configure the backend API URL for the frontend (e.g., proxy, environment variable, or directly in API calls).

## API Endpoints
- `GET /api/inspiration` — Get a daily AI or mock quote, author, and image (now powered by modular Express route & error handler)

## To Do / Contribute
- [x] Modularize backend with routes, dotenv, error handling
- [ ] Frontend: inspiration card fetches API, save/remix/favorites
- [ ] UI/UX improvements (polish, Material UI or equivalent)
- [ ] Add login/auth for personalized boards
- [ ] Replace API stubs with real AI or external APIs
- [ ] Deploy to Vercel/Netlify/Heroku
- [ ] See [CONTRIBUTING.md](CONTRIBUTING.md) for help (coming soon)

## Roadmap
- [x] Backend scaffold & architecture upgrade
- [x] .gitignore/.env.example
- [x] Improved backend modular routing, error handling
- [ ] Interactive frontend features (Remix, Favorites)
- [ ] Fancier UI/UX
- [ ] AI or external content integration
- [ ] Open-source docs, contribution guides

---

**Current Status:**
- Backend is modularized, robust, and production-friendly.
- Frontend is scaffolded and ready for dynamic inspiration fetching (upgrade in progress!).
- Each major step is designed for maintainability and extensibility.

Licensed under MIT. Let’s inspire together!
