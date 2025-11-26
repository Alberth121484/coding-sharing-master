import { Link } from 'react-router-dom';

/**
 * 404 Not Found page
 */
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-8">
        <img 
          src="/assets/NoteCodeLogo.svg" 
          alt="NoteCode" 
          className="h-8"
        />
        <span className="text-xl font-semibold text-notecode-dark">NoteCode</span>
      </div>
      
      <h1 className="text-heading-lg text-notecode-dark mb-4">404</h1>
      <p className="text-notecode-gray mb-8">Snippet not found</p>
      
      <Link 
        to="/"
        className="px-6 py-3 bg-notecode-blue text-white rounded-lg font-semibold hover:bg-blue-600"
      >
        Create New Snippet
      </Link>
    </div>
  );
}

export default NotFound;
