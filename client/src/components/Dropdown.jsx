/**
 * Custom dropdown selector component
 * @param {string} value - Current selected value
 * @param {function} onChange - Change handler
 * @param {Array} options - Array of { value, label } objects
 * @param {string} variant - 'dark' or 'gray'
 */
function Dropdown({ value, onChange, options, variant = 'dark' }) {
  const baseStyles = "px-4 py-2 rounded-lg text-sm font-medium cursor-pointer appearance-none pr-8 bg-no-repeat transition-all";
  
  const variants = {
    dark: "bg-notecode-dark text-white hover:bg-gray-800",
    gray: "bg-notecode-gray text-white hover:bg-gray-500",
  };

  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${baseStyles} ${variants[variant]}`}
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='white'%3E%3Cpath d='M2 4L6 8L10 4'/%3E%3C/svg%3E")`,
          backgroundPosition: 'right 12px center'
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
