import Dropdown from './Dropdown';
import ShareButton from './ShareButton';
import CopyLinkButton from './CopyLinkButton';
import { LANGUAGES, THEMES } from '../constants';

/**
 * Controls bar with language/theme selectors and action buttons
 * Responsive: Stacks on mobile, inline on tablet+
 */
function ControlsBar({
  language,
  theme,
  onLanguageChange,
  onThemeChange,
  onShare,
  canShare,
  isLoading,
  showCopyLink,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-3 sm:p-4 border-t border-gray-100 gap-3 sm:gap-4">
      {/* Language & Theme selectors */}
      <div className="flex gap-2 justify-center sm:justify-start">
        <Dropdown
          value={language}
          onChange={onLanguageChange}
          options={LANGUAGES}
          variant="dark"
        />
        <Dropdown
          value={theme}
          onChange={onThemeChange}
          options={THEMES}
          variant="gray"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 sm:gap-3 justify-center sm:justify-end">
        {showCopyLink && <CopyLinkButton />}
        <ShareButton
          onClick={onShare}
          disabled={!canShare}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default ControlsBar;
