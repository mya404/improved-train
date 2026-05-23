# AI-Powered Inspiration Board

An open-source web app that delivers daily, AI-generated inspiration—quotes, images, and creative prompts. Save your favorites to personalized boards and remix ideas for fresh creativity every day!

---

## Features
- **Daily AI-generated quotes, images, and prompts**
- **Save favorites to boards**
- **Remix inspirations for unique results**
- **Simple social sharing**
- **Fast, modern web app: React (Vite, TypeScript) frontend, Node.js (Express) backend**
- **Easy, local and cloud deployment**

## Project Structure

```
/
├── frontend/      # React app (Vite, TypeScript)
│   ├── src/
├── backend/       # Node.js Express API
│   ├── src/
├── backend/.env.example # Example backend environment variables
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

The frontend app will be running on http://localhost:5173 by default.

### 3. Setup Backend
```sh
cd backend
cp .env.example .env
npm install
npm run dev
```

The backend API will be running on http://localhost:3001 by default.

> Configure the backend API URL in the frontend if needed (e.g., in a .env file or directly in API calls).

## API Endpoints

- `GET /api/inspiration` — Get a daily AI or mock quote, author, and image (stub, ready for AI integration)

## To Do / Contribute
- Replace API stubs with real AI or free quote/image APIs
- Add boards/favorites persistence (localStorage, then backend)
- Enhance the frontend UI/UX
- Add login/auth for personalized boards
- Deploy to Vercel/Netlify/Heroku
- See [CONTRIBUTING.md](CONTRIBUTING.md) for help (coming soon)

## Roadmap
- [x] Basic backend & frontend scaffold
- [x] .gitignore/.env.example
- [ ] Improved backend structure, error handling, routing
- [ ] Polished frontend, Material UI or equivalent
- [ ] AI or external content integration
- [ ] Open-source docs, contribution guides

---
Licensed under MIT. Let’s inspire together!
