import { useState } from 'react'
import Button from './Button.jsx'

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search recipes…',
  label = 'Search recipes',
  buttonLabel = 'Search',
}) {
  const isControlled = value !== undefined
  const [internal, setInternal] = useState('')
  const current = isControlled ? value : internal

  function handleChange(event) {
    if (isControlled) {
      onChange?.(event.target.value)
    } else {
      setInternal(event.target.value)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit?.(current.trim())
  }

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <svg className="search-bar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>
      <label className="sr-only" htmlFor="search-input" style={{ position: 'absolute', width: 1, height: 1, padding: 0, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
        {label}
      </label>
      <input
        id="search-input"
        type="search"
        className="search-bar__input"
        placeholder={placeholder}
        value={current}
        onChange={handleChange}
        autoComplete="off"
      />
      <Button type="submit" variant="primary" className="search-bar__button">
        {buttonLabel}
      </Button>
    </form>
  )
}
