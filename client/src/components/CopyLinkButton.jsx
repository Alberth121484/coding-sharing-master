import { useState } from 'react';

/**
 * Copy link button with feedback
 * @param {string} url - URL to copy (defaults to current page)
 */
function CopyLinkButton({ url }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const textToCopy = url || window.location.href;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      
      // Reset after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        px-4 py-2.5 rounded-lg text-sm font-medium 
        flex items-center gap-2 transition-all duration-200
        ${copied 
          ? 'bg-green-100 text-green-700' 
          : 'bg-gray-100 hover:bg-gray-200 text-notecode-dark'
        }
      `}
    >
      {copied ? (
        <>
          <svg 
            className="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Copied!</span>
        </>
      ) : (
        <>
          <img 
            src="/assets/link.svg" 
            alt="" 
            className="w-4 h-4"
          />
          <span>Copy Link</span>
        </>
      )}
    </button>
  );
}

export default CopyLinkButton;
