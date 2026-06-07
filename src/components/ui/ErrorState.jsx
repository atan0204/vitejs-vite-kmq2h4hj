import Button from './Button.jsx'

export default function ErrorState({
  title = 'Something burned in the oven',
  message = 'We couldn\'t fetch the recipes. Please check your connection and try again.',
  onRetry,
}) {
  return (
    <div className="state" role="alert">
      <p className="state__title">{title}</p>
      <p className="state__message">{message}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  )
}
