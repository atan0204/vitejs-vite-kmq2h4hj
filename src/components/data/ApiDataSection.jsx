import DataCard from './DataCard.jsx'
import LoadingState from '../ui/LoadingState.jsx'
import ErrorState from '../ui/ErrorState.jsx'

export default function ApiDataSection({ meals, loading, error, onRetry, emptyMessage = 'No recipes found. Try a different search or category.' }) {
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={onRetry} />
  if (!meals || meals.length === 0) {
    return (
      <div className="state">
        <p className="state__title">Nothing on the menu</p>
        <p className="state__message">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <ul className="meal-grid" style={{ listStyle: 'none', padding: 0 }}>
      {meals.map((meal, index) => (
        <li key={meal.idMeal}>
          <DataCard meal={meal} index={index} />
        </li>
      ))}
    </ul>
  )
}
