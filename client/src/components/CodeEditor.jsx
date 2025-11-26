import Editor from '@monaco-editor/react';

/**
 * Code Editor component using Monaco Editor
 * @param {string} code - The code content
 * @param {string} language - Programming language for syntax highlighting
 * @param {string} theme - Editor theme ('light' or 'vs-dark')
 * @param {function} onChange - Callback when code changes
 * @param {boolean} readOnly - Whether editor is read-only
 */
function CodeEditor({ 
  code, 
  language = 'html', 
  theme = 'light', 
  onChange,
  readOnly = false 
}) {
  // Monaco theme mapping
  const monacoTheme = theme === 'vs-dark' ? 'vs-dark' : 'light';

  // Editor options
  const editorOptions = {
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: 'on',
    roundedSelection: true,
    scrollBeyondLastLine: false,
    readOnly,
    automaticLayout: true,
    padding: { top: 16, bottom: 16 },
    wordWrap: 'on',
    tabSize: 2,
    insertSpaces: true,
    folding: true,
    lineDecorationsWidth: 10,
    lineNumbersMinChars: 3,
    renderLineHighlight: 'line',
    cursorBlinking: 'smooth',
    cursorSmoothCaretAnimation: 'on',
    smoothScrolling: true,
    fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
    fontLigatures: true,
  };

  const handleEditorChange = (value) => {
    if (onChange) {
      onChange(value || '');
    }
  };

  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
      <Editor
        height="100%"
        language={language}
        theme={monacoTheme}
        value={code}
        onChange={handleEditorChange}
        options={editorOptions}
        loading={
          <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-4 border-notecode-blue border-t-transparent rounded-full animate-spin" />
              <span className="text-notecode-gray text-sm">Loading editor...</span>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default CodeEditor;
