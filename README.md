# NoteCode - Code Sharing Application

A fullstack code-sharing application that allows users to create, save, and share coding snippets with unique URLs. Built with React, Node.js, and Monaco Editor.

![Preview Ligth Mode](https://github.com/user-attachments/assets/2ae21592-ebc4-4476-aac0-67e30b699dd1)
![Preview Ligth Mode Shared](https://github.com/user-attachments/assets/8da9a881-db84-4005-b6e7-d3b0509bc4e1)
![Preview Dark Mode](https://github.com/user-attachments/assets/ed7fc990-4967-49c4-984a-9b7ce333cd1a)

[DEMO](https://notecode.alchemycode.dev)

## Features

- 📝 **Monaco Editor**: Professional code editor with syntax highlighting
- 🔗 **Instant Sharing**: Generate unique URLs for your code snippets
- 🎨 **Theme Support**: Light and Dark editor themes
- 🌐 **15+ Languages**: HTML, CSS, JavaScript, Python, and more
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Real-time Editing**: Edit detection enables re-sharing
- 📋 **Copy Link**: One-click URL copying with visual feedback
- 🔔 **Toast Notifications**: Success/error feedback
- 🛡️ **Error Boundary**: Graceful error handling

## Demo

Live Demo: [Your Demo URL]

## Tech Stack

### Frontend
- **React 18** with Vite
- **Monaco Editor** (@monaco-editor/react)
- **Tailwind CSS** for styling
- **React Router v6** for navigation

### Backend
- **Node.js** with Express.js
- **Sequelize ORM** with SQLite
- **UUID** for unique ID generation
- **CORS** enabled for cross-origin requests

## Project Structure

```
notecode/
├── client/                     # React frontend
│   ├── public/assets/          # Images, icons, logos
│   └── src/
│       ├── components/         # Reusable UI components
│       │   ├── CodeEditor.jsx  # Monaco Editor wrapper
│       │   ├── ControlsBar.jsx # Language/theme selectors + buttons
│       │   ├── Layout.jsx      # Main layout with gradient
│       │   ├── Toast.jsx       # Toast notification system
│       │   └── ...
│       ├── pages/              # Page components
│       │   ├── Home.jsx        # Main editor page
│       │   └── NotFound.jsx    # 404 page
│       ├── services/           # API service layer
│       ├── constants/          # App constants
│       └── styles/             # CSS files
├── server/                     # Express backend
│   ├── config/                 # Database configuration
│   ├── controllers/            # Request handlers
│   ├── models/                 # Sequelize models
│   └── routes/                 # API route definitions
├── package.json                # Root package (monorepo scripts)
└── README.md
```

## Quick Start

### Prerequisites
- Node.js >= 18.x
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd notecode

# Install root dependencies
npm install

# Install client and server dependencies
npm run install:all

# Set up environment variables
cp server/.env.example server/.env
```

### Development

```bash
# Run both client and server concurrently
npm run dev

# Or run separately
npm run client    # Frontend at http://localhost:5173
npm run server    # Backend at http://localhost:3001
```

### Production Build

```bash
npm run build     # Build client for production
npm run start     # Start production server
```

## API Reference

### Create Snippet
```http
POST /api/snippets
Content-Type: application/json

{
  "code": "<html>...</html>",
  "language": "html",
  "theme": "light"
}
```

**Response:** `201 Created`
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "code": "<html>...</html>",
  "language": "html",
  "theme": "light",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### Get Snippet
```http
GET /api/snippets/:id
```

**Response:** `200 OK`
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "code": "<html>...</html>",
  "language": "html",
  "theme": "light",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### Health Check
```http
GET /api/health
```

## Environment Variables

### Server (.env)
```env
PORT=3001
DATABASE_URL=./database.sqlite
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Client (.env) - Optional
```env
VITE_API_URL=/api
```

## Supported Languages

| Language | Syntax |
|----------|--------|
| HTML | html |
| CSS | css |
| JavaScript | javascript |
| TypeScript | typescript |
| JSON | json |
| Markdown | markdown |
| Python | python |
| Java | java |
| C# | csharp |
| C++ | cpp |
| PHP | php |
| Ruby | ruby |
| Go | go |
| Rust | rust |
| SQL | sql |

## Deployment

### Frontend (Netlify/Vercel)
1. Build: `npm run build --prefix client`
2. Publish directory: `client/dist`
3. Set `VITE_API_URL` to your backend URL

### Backend (Railway/Heroku/Vercel)
1. Set environment variables
2. For production, consider PostgreSQL instead of SQLite
3. Update `DATABASE_URL` accordingly

## User Flow

1. **Visit homepage** → See default HTML snippet
2. **Edit code** → Choose language/theme
3. **Click Share** → Code saved, redirected to unique URL
4. **Share URL** → Others can view your code
5. **Edit shared code** → Share button re-enables
6. **Click Share again** → New unique URL generated

## Design Credits

- Font: [Outfit](https://fonts.google.com/specimen/Outfit) by Rodrigo Fuenzalida
- Colors: `#FFFFFE`, `#121826`, `#364153`, `#CED6E1`, `#406AFF`
- Gradient: `linear-gradient(to bottom right, #B787F5, #743EE4)`

## License

MIT

## Author

Built as part of [devChallenges.io](https://devchallenges.io) Full-Stack Developer challenge.
