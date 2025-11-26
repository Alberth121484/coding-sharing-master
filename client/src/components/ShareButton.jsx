/**
 * Share button component with loading state
 * @param {function} onClick - Click handler
 * @param {boolean} disabled - Disabled state
 * @param {boolean} isLoading - Loading state
 */
function ShareButton({ onClick, disabled = false, isLoading = false }) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        px-6 py-2.5 rounded-lg text-white font-semibold 
        flex items-center gap-2 transition-all duration-200
        ${isDisabled
          ? 'bg-gray-400 cursor-not-allowed opacity-70'
          : 'bg-notecode-blue hover:bg-blue-600 hover:shadow-lg active:scale-95'
        }
      `}
    >
      {isLoading ? (
        <>
          <svg 
            className="w-5 h-5 animate-spin" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <span>Sharing...</span>
        </>
      ) : (
        <>
          <img 
            src="/assets/Share.svg" 
            alt="" 
            className="w-5 h-5"
          />
          <span>Share</span>
        </>
      )}
    </button>
  );
}

export default ShareButton;
