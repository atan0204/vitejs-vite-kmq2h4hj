export default function LoadingState({ message = 'Plating up some recipes…' }) {
  return (
    <div className="state" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <p className="state__title">{message}</p>
    </div>
  )
}
