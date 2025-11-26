import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-notecode-white font-outfit">
      <Routes>
        <Route path="/" element={<div>NoteCode - Coming Soon</div>} />
        <Route path="/:id" element={<div>Shared Snippet</div>} />
      </Routes>
    </div>
  )
}

export default App
