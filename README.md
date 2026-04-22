# Round 2 Assignment - Fullstack Auth Website

A complete full-stack website with:
- User signup/login authentication
- Backend API using Express.js
- Database integration using NeDB (file database)
- Ready-to-deploy setup

## Tech Stack
- Backend: Node.js, Express.js
- Database: NeDB (persistent file-based database)
- Auth: JWT + HttpOnly cookies + bcrypt password hashing
- Frontend: HTML, CSS, JavaScript (served by Express)

## Features
- Signup with name, email, password
- Login with email and password
- Protected route to fetch current logged-in user
- Logout endpoint
- Password hashing before storage
- User data persisted in a local database file

## Project Structure
- `src/server.js` - API server and auth routes
- `src/db.js` - Database setup and indexes
- `public/index.html` - Frontend UI
- `public/app.js` - Frontend API integration
- `public/styles.css` - Styling

## Local Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env` from `.env.example` and set your secret:
   ```env
   PORT=3000
   JWT_SECRET=your_very_strong_secret
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open:
   - [http://localhost:3000](http://localhost:3000)

## API Endpoints
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me` (protected)

## Deployment (Render)
1. Push this repo to GitHub.
2. Create a new **Web Service** on Render.
3. Configure:
   - Build command: `npm install`
   - Start command: `npm start`
4. Add environment variable:
   - `JWT_SECRET=<your-strong-random-secret>`
5. Deploy.

Your live site URL will look like:
- `https://your-app-name.onrender.com`

## Submission Requirements
Submit:
1. GitHub Repository Link
2. Deployed Website Link

Example format:
- GitHub: `https://github.com/<your-username>/round2-fullstack-assignment`
- Live Website: `https://<your-app>.onrender.com`
