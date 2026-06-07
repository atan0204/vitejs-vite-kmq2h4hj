import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'

export default function DataCard({ meal, index = 0 }) {
  const id = meal.idMeal
  const title = meal.strMeal
  const image = meal.strMealThumb
  const category = meal.strCategory
  const area = meal.strArea

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
    >
      <Card interactive className="meal-card">
        <Link to={`/recipes/${id}`} aria-label={`View recipe for ${title}`} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="meal-card__media">
            <img src={`${image}/preview`} alt="" loading="lazy" />
            {(category || area) && (
              <div className="meal-card__badges">
                {category && <Badge tone="accent">{category}</Badge>}
                {area && area !== 'Unknown' && <Badge>{area}</Badge>}
              </div>
            )}
          </div>
          <div className="meal-card__body">
            <h3 className="meal-card__title">{title}</h3>
            {(category || area) && (
              <div className="meal-card__meta">
                {area && area !== 'Unknown' && <span>{area} cuisine</span>}
              </div>
            )}
            <span className="meal-card__cta">
              View recipe
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </Card>
    </motion.div>
  )
}
