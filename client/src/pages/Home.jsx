import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, CodeEditor, ControlsBar, useToast } from '../components';
import { DEFAULT_HTML_SNIPPET } from '../constants';
import api from '../services/api';

/**
 * Home page component - Main editor view
 * Handles both new snippets (/) and existing snippets (/:id)
 */
function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToast } = useToast();

  // Editor state
  const [code, setCode] = useState(DEFAULT_HTML_SNIPPET);
  const [language, setLanguage] = useState('html');
  const [theme, setTheme] = useState('light');
  
  // UI state
  const [isShared, setIsShared] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [originalCode, setOriginalCode] = useState(DEFAULT_HTML_SNIPPET);
  const [notFound, setNotFound] = useState(false);

  // Determine if Share button should be enabled
  const hasChanges = code !== originalCode;
  const canShare = !isShared || hasChanges;

  // Load snippet if ID is present
  useEffect(() => {
    if (id) {
      loadSnippet(id);
    } else {
      // Reset to default state when navigating to home
      resetToDefault();
    }
  }, [id]);

  const resetToDefault = useCallback(() => {
    setCode(DEFAULT_HTML_SNIPPET);
    setLanguage('html');
    setTheme('light');
    setOriginalCode(DEFAULT_HTML_SNIPPET);
    setIsShared(false);
    setError(null);
    setNotFound(false);
  }, []);

  const loadSnippet = async (snippetId) => {
    setIsFetching(true);
    setError(null);
    setNotFound(false);
    try {
      const snippet = await api.getSnippet(snippetId);
      
      // Populate editor with fetched data
      setCode(snippet.code);
      setLanguage(snippet.language);
      setTheme(snippet.theme);
      setOriginalCode(snippet.code);
      setIsShared(true);
    } catch (err) {
      if (err.message === 'Snippet not found') {
        setNotFound(true);
      } else {
        setError(err.message);
      }
    } finally {
      setIsFetching(false);
    }
  };

  const handleShare = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Create new snippet via API
      const snippet = await api.createSnippet({
        code,
        language,
        theme,
      });

      // Update state
      setIsShared(true);
      setOriginalCode(code);

      // Show success toast
      addToast('Code shared successfully!', 'success');

      // Navigate to the new snippet URL
      navigate(`/${snippet.id}`);
    } catch (err) {
      setError(err.message);
      addToast('Failed to share code', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeChange = (value) => {
    setCode(value);
    // Clear error when user starts typing
    if (error) setError(null);
  };

  // Show not found state
  if (notFound) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-2xl font-semibold text-notecode-dark mb-4">
            Snippet Not Found
          </h2>
          <p className="text-notecode-gray mb-6">
            The snippet you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-notecode-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Create New Snippet
          </button>
        </div>
      </Layout>
    );
  }

  // Show loading state while fetching snippet
  if (isFetching) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="h-[500px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-notecode-blue border-t-transparent rounded-full animate-spin" />
                <span className="text-notecode-gray">Loading snippet...</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Error message */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 sm:p-4 rounded-lg mb-4 max-w-4xl mx-auto text-sm sm:text-base">
          {error}
        </div>
      )}

      {/* Editor Card */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl overflow-hidden max-w-4xl mx-auto">
        {/* Monaco Editor - responsive height */}
        <div className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <CodeEditor
            code={code}
            language={language}
            theme={theme}
            onChange={handleCodeChange}
          />
        </div>

        {/* Controls bar */}
        <ControlsBar
          language={language}
          theme={theme}
          onLanguageChange={setLanguage}
          onThemeChange={setTheme}
          onShare={handleShare}
          canShare={canShare}
          isLoading={isLoading}
          showCopyLink={isShared && !!id}
        />
      </div>
    </Layout>
  );
}

export default Home;
