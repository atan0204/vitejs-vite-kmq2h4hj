export default function DataFilter({ options, active, onChange, label = 'Filter by category' }) {
  return (
    <div role="radiogroup" aria-label={label} className="data-filter">
      {options.map((option) => {
        const isActive = option.value === active
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            className={`filter-chip ${isActive ? 'filter-chip--active' : ''}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
