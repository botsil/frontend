# BOTSIL Website

Frontend for the BOTSIL website. BOTSIL is a binational robotics team formed by Brazilian and Uruguayan students through the partnership between IFSul and UTEC.

The website presents the team, its members, robotics competitions, photos, and future projects. It also introduces BLIP, the team's robot mascot, and highlights BOTSIL's participation in BRABOTS at IFSul Campus Santana do Livramento.

## Technologies

- React
- Vite
- React Router
- Axios
- Tailwind CSS
- Heroicons
- ESLint

## Pages

- Home: introduces BOTSIL, BLIP, and the team's first BRABOTS appearance.
- About us: explains the team's binational identity and goals in robotics and machine learning.
- Members: lists the team members from the backend API.
- Competitions: shows robotics competitions and their main photos.
- Competition details: shows information and photos for a selected competition.
- Projects: presents planned projects, including Bluetooth vehicle control and computer vision ideas.

## Local Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file with the API URL:

```bash
VITE_API_URL=http://localhost:3333
```

Run the development server:

```bash
npm run dev
```

The frontend expects the backend API to be running and available at the URL configured in `VITE_API_URL`.

## Scripts

- `npm run dev`: starts the Vite development server.
- `npm run build`: builds the app for production.
- `npm run preview`: previews the production build locally.
- `npm run lint`: runs ESLint.
