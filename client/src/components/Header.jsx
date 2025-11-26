/**
 * Header component with NoteCode logo
 */
function Header() {
  return (
    <header className="py-4 md:py-6">
      <div className="flex items-center justify-center gap-2">
        <img 
          src="/assets/NoteCodeLogo.svg" 
          alt="NoteCode Logo" 
          className="h-6 md:h-8 w-auto"
        />
        <span className="text-lg md:text-xl font-semibold text-notecode-dark">
          NoteCode
        </span>
      </div>
    </header>
  );
}

export default Header;
