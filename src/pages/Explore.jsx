import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import PageWrapper from '../components/layout/PageWrapper.jsx'
import SearchBar from '../components/ui/SearchBar.jsx'
import DataFilter from '../components/data/DataFilter.jsx'
import ApiDataSection from '../components/data/ApiDataSection.jsx'
import { useFetchData } from '../hooks/useFetchData.js'

const CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'

const DEFAULT_CATEGORY = 'Beef'

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState(DEFAULT_CATEGORY)
  const [query, setQuery] = useState('')

  const { data: categoriesData, error: categoriesError } = useFetchData(CATEGORIES_URL)
  const mealsUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(activeCategory)}`
  const { data: mealsData, loading, error } = useFetchData(mealsUrl)

  const categoryOptions = useMemo(() => {
    const categories = categoriesData?.categories ?? []
    return categories.map((c) => ({ value: c.strCategory, label: c.strCategory }))
  }, [categoriesData])

  const visibleMeals = useMemo(() => {
    const meals = mealsData?.meals ?? []
    const enriched = meals.map((meal) => ({ ...meal, strCategory: activeCategory }))
    const q = query.trim().toLowerCase()
    if (!q) return enriched
    return enriched.filter((m) => m.strMeal.toLowerCase().includes(q))
  }, [mealsData, query, activeCategory])

  function handleSearchSubmit(value) {
    setQuery(value)
  }

  return (
    <PageWrapper label="Explore recipes">
      <section className="section" aria-labelledby="explore-title">
        <div className="container">
          <motion.header
            className="section__header explore__intro"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section__eyebrow">Explore</span>
            <h1 id="explore-title" className="section__title">Find your next favourite recipe.</h1>
            <p className="section__lead">
              Browse by cuisine category or search by name. Tap any card to see the full recipe.
            </p>
          </motion.header>

          <motion.div
            className="explore__controls"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <SearchBar
              value={query}
              onChange={setQuery}
              onSubmit={handleSearchSubmit}
              placeholder={`Search within ${activeCategory}…`}
              label="Search recipes by name"
            />

            {categoriesError && (
              <p className="explore__results-info" role="alert">
                Couldn't load categories. Showing {activeCategory} only.
              </p>
            )}

            {categoryOptions.length > 0 && (
              <DataFilter
                options={categoryOptions}
                active={activeCategory}
                onChange={(value) => {
                  setActiveCategory(value)
                  setQuery('')
                }}
              />
            )}
          </motion.div>

          <p className="explore__results-info" aria-live="polite">
            {loading
              ? 'Loading recipes…'
              : `Showing ${visibleMeals.length} ${visibleMeals.length === 1 ? 'recipe' : 'recipes'} in ${activeCategory}${query ? ` matching “${query}”` : ''}.`}
          </p>

          <ApiDataSection
            meals={visibleMeals}
            loading={loading}
            error={error}
            onRetry={() => window.location.reload()}
            emptyMessage={
              query
                ? `No recipes in ${activeCategory} match “${query}”. Try clearing the search.`
                : `No recipes in ${activeCategory} right now.`
            }
          />
        </div>
      </section>
    </PageWrapper>
  )
}
