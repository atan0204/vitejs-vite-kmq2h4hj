import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import PageWrapper from '../components/layout/PageWrapper.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import LoadingState from '../components/ui/LoadingState.jsx'
import ErrorState from '../components/ui/ErrorState.jsx'
import { useFetchData } from '../hooks/useFetchData.js'

function extractIngredients(meal) {
  const items = []
  for (let i = 1; i <= 20; i += 1) {
    const name = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (name && name.trim()) {
      items.push({ name: name.trim(), measure: (measure || '').trim() })
    }
  }
  return items
}

function extractParagraphs(text) {
  if (!text) return []
  return text
    .split(/\r?\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
}

export default function Details() {
  const { id } = useParams()
  const url = id ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}` : null
  const { data, loading, error } = useFetchData(url)

  const meal = data?.meals?.[0]

  const ingredients = useMemo(() => (meal ? extractIngredients(meal) : []), [meal])
  const paragraphs = useMemo(() => (meal ? extractParagraphs(meal.strInstructions) : []), [meal])
  const tags = useMemo(() => (meal?.strTags ? meal.strTags.split(',').map((t) => t.trim()).filter(Boolean) : []), [meal])

  return (
    <PageWrapper label="Recipe details">
      <section className="section" aria-labelledby="details-title">
        <div className="container">
          <Link to="/explore" className="details__back">
            <span aria-hidden="true">←</span> Back to explore
          </Link>

          {loading && <LoadingState message="Fetching the recipe…" />}
          {error && <ErrorState message={error} />}
          {!loading && !error && !meal && (
            <ErrorState title="Recipe not found" message="We couldn't find a recipe with that ID. It may have been removed." />
          )}

          {meal && (
            <>
              <motion.div
                className="details__hero"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="details__media">
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
                <div>
                  <div className="details__meta">
                    {meal.strCategory && <Badge tone="accent">{meal.strCategory}</Badge>}
                    {meal.strArea && meal.strArea !== 'Unknown' && <Badge>{meal.strArea}</Badge>}
                    {tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} tone="primary">{tag}</Badge>
                    ))}
                  </div>
                  <h1 id="details-title" className="details__title">{meal.strMeal}</h1>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
                    A {meal.strArea && meal.strArea !== 'Unknown' ? `${meal.strArea.toLowerCase()} ` : ''}
                    {meal.strCategory?.toLowerCase() || 'recipe'} with{' '}
                    {ingredients.length} ingredients and {paragraphs.length} steps.
                  </p>

                  <dl className="details__stats">
                    <div>
                      <dt className="details__stat-label">Cuisine</dt>
                      <dd className="details__stat-value">{meal.strArea || '-'}</dd>
                    </div>
                    <div>
                      <dt className="details__stat-label">Category</dt>
                      <dd className="details__stat-value">{meal.strCategory || '-'}</dd>
                    </div>
                    <div>
                      <dt className="details__stat-label">Ingredients</dt>
                      <dd className="details__stat-value">{ingredients.length}</dd>
                    </div>
                    <div>
                      <dt className="details__stat-label">Watch</dt>
                      <dd className="details__stat-value">
                        {meal.strYoutube ? (
                          <a href={meal.strYoutube} target="_blank" rel="noreferrer noopener">YouTube ↗</a>
                        ) : (
                          '-'
                        )}
                      </dd>
                    </div>
                  </dl>

                  {meal.strSource && (
                    <div style={{ marginTop: '1.5rem' }}>
                      <Button as="a" href={meal.strSource} target="_blank" rel="noreferrer noopener" variant="ghost" size="small">
                        View original source ↗
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>

              <div className="details__sections">
                <motion.section
                  className="details__ingredients"
                  aria-labelledby="ingredients-heading"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                >
                  <h2 id="ingredients-heading" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Ingredients</h2>
                  <ol className="details__ingredient-list">
                    {ingredients.map((item, i) => (
                      <motion.li
                        key={`${item.name}-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.35, delay: Math.min(i * 0.02, 0.3) }}
                      >
                        <strong>{item.name}</strong>
                        {item.measure && <span>{item.measure}</span>}
                      </motion.li>
                    ))}
                  </ol>
                </motion.section>

                <motion.section
                  className="details__instructions"
                  aria-labelledby="instructions-heading"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                >
                  <h2 id="instructions-heading">Instructions</h2>
                  {paragraphs.length > 0 ? (
                    paragraphs.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <p>{meal.strInstructions || 'No instructions provided.'}</p>
                  )}
                </motion.section>
              </div>
            </>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}
