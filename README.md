# AI-Powered Inspiration Board

An open-source web app that delivers daily, AI-generated inspiration—quotes, images, and creative prompts. Save your favorites, remix unique ideas, and enjoy a beautiful interactive experience!

---

## Features
- **Live inspiration board**: AI-generated quotes, images, and prompts every visit
- **Remix** button fetches fresh inspiration instantly
- **Save to Favorites**: Persist inspiring content (localStorage)
- **Favorites** section: View and manage what you’ve saved
- **Modern web app:**
  - Frontend: React (Vite, TypeScript), modular components (`InspirationCard`, `Favorites`)
  - Backend: Node.js (Express, modular routing, dotenv, proper error handling)
- **Cloud-ready & easy local setup**

## Project Structure

```
/
├── frontend/      # React app (Vite, TypeScript)
│   └── src/
│       ├── App.tsx               # Main app, handles API and UI
│       ├── api/
│       │   └── inspiration.ts    # API helper
│       └── components/
│           ├── InspirationCard.tsx
│           ├── Favorites.tsx
│           └── index.ts
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

> If needed, set the backend API URL in the frontend (proxy or .env or direct API calls).

## API Endpoints
- `GET /api/inspiration` — Returns a daily AI or sample quote, author, and image.

## To Do / Contribute
- [x] Modularize backend with routes, dotenv, error handling
- [x] Frontend: inspiration card fetches API, save/remix/favorites
- [ ] UI/UX improvements (polish, Material UI or equivalent)
- [ ] Add login/auth for personalized boards
- [ ] Replace API stubs with real AI or external APIs
- [ ] Deploy to Vercel/Netlify/Heroku
- [ ] See [CONTRIBUTING.md](CONTRIBUTING.md) for help (coming soon)

## Roadmap
- [x] Backend scaffold & architecture upgrade
- [x] .gitignore/.env.example
- [x] Improved backend modular routing, error handling
- [x] Interactive frontend features (Remix, Favorites)
- [ ] Fancier UI/UX
- [ ] AI or external content integration
- [ ] Open-source docs, contribution guides

---

**Current Status:**
- 🌟 Fully interactive: users can fetch, remix, and save inspiration; all features are live!
- Modular, robust, and ready for cloud deployment or community contributions.
- Next up: UI/UX polish, real AI integration, open-source docs, and more.

Licensed under MIT. Let’s inspire together!
