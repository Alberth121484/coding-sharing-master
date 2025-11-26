# NoteCode - Code Sharing Application

A fullstack code-sharing application that allows users to create, save, and share coding snippets with unique URLs.

![NoteCode Preview](./client/public/assets/Hero-Background-notecode.svg)

## Features

- 📝 **Code Editor**: Monaco Editor with syntax highlighting
- 🔗 **Share Code**: Generate unique URLs for your code snippets
- 🎨 **Themes**: Choose between Light and Dark themes
- 🌐 **Multi-language**: Support for HTML, CSS, JavaScript, and more
- 📱 **Responsive**: Works on all devices

## Tech Stack

### Frontend
- React (Vite)
- Monaco Editor
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- SQLite (Development) / PostgreSQL (Production)
- UUID for unique ID generation

## Project Structure

```
coding-sharing-master/
├── client/                 # React frontend
│   ├── public/
│   │   └── assets/        # Images, icons, logos
│   └── src/
│       ├── components/    # React components
│       ├── pages/         # Page components
│       └── styles/        # CSS files
├── server/                 # Express backend
│   ├── config/            # Database config
│   ├── controllers/       # Route handlers
│   ├── models/            # Database models
│   └── routes/            # API routes
└── README.md
```

## Getting Started

### Prerequisites
- Node.js >= 18.x
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd coding-sharing-master
```

2. Install dependencies
```bash
# Install all dependencies (root, client, server)
npm install
```

3. Set up environment variables
```bash
# Server
cp server/.env.example server/.env
```

4. Run the development servers
```bash
# Run both client and server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run both client and server in development |
| `npm run client` | Run only the frontend |
| `npm run server` | Run only the backend |
| `npm run build` | Build for production |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/snippets` | Save a new code snippet |
| GET | `/api/snippets/:id` | Get a code snippet by ID |

## Environment Variables

### Server (.env)
```
PORT=3001
DATABASE_URL=./database.sqlite
NODE_ENV=development
```

## Deployment

- **Frontend**: Deploy to Netlify or Vercel
- **Backend**: Deploy to Heroku, Railway, or Vercel

## License

MIT

## Author

Built as part of [devChallenges.io](https://devchallenges.io) Full-Stack challenge.
