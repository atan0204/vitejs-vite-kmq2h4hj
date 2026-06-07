import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SimpleParallax from 'simple-parallax-js'
import PageWrapper from '../components/layout/PageWrapper.jsx'
import Button from '../components/ui/Button.jsx'
import { useFetchData } from '../hooks/useFetchData.js'

const RANDOM_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const FEATURES = [
  {
    icon: 'i',
    title: 'Hand-picked ingredients',
    body: 'Every recipe lists exactly what you need — no scavenger hunts through the pantry.',
  },
  {
    icon: 'ii',
    title: 'Cuisines from anywhere',
    body: 'Italian classics, Malaysian street food, Mexican comfort — explore over twenty regional cuisines.',
  },
  {
    icon: 'iii',
    title: 'Step-by-step clarity',
    body: 'Clean instructions that respect your time. Read once, cook with confidence.',
  },
]

export default function Home() {
  const { data: randomData } = useFetchData(RANDOM_MEAL_URL)
  const featuredMeal = randomData?.meals?.[0] ?? null

  return (
    <PageWrapper label="Home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div>
            <motion.span
              className="hero__eyebrow"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              A recipe explorer
            </motion.span>
            <motion.h1
              id="hero-title"
              className="hero__title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Recipes worth <em>savouring</em>.
            </motion.h1>
            <motion.p
              className="hero__lead"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Saveur is a quiet place to find your next favourite dish. Search by name,
              filter by cuisine, and rediscover the joy of cooking — one well-written
              recipe at a time.
            </motion.p>
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button as={Link} to="/explore" variant="primary" withArrow>
                Start exploring
              </Button>
              <Button as={Link} to="/about" variant="secondary">
                Learn more
              </Button>
            </motion.div>

            <motion.dl
              className="hero__stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div>
                <dt className="hero__stat-label">Recipes</dt>
                <dd className="hero__stat-value">300+</dd>
              </div>
              <div>
                <dt className="hero__stat-label">Cuisines</dt>
                <dd className="hero__stat-value">25+</dd>
              </div>
              <div>
                <dt className="hero__stat-label">Categories</dt>
                <dd className="hero__stat-value">14</dd>
              </div>
            </motion.dl>
          </div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SimpleParallax scale={1.25} delay={0.4} transition="cubic-bezier(0,0,0,1)">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80&auto=format&fit=crop"
                alt="A warmly lit bowl of hand-pulled noodles topped with herbs and chilli oil."
              />
            </SimpleParallax>
            {featuredMeal && (
              <Link
                to={`/recipes/${featuredMeal.idMeal}`}
                className="hero__visual-tag"
                aria-label={`Today's pick: ${featuredMeal.strMeal}`}
              >
                <span className="hero__visual-tag-dot" aria-hidden="true" />
                <span>
                  <strong style={{ display: 'block', fontWeight: 600 }}>Today's pick</strong>
                  <span style={{ color: 'var(--color-text-muted)' }}>{featuredMeal.strMeal}</span>
                </span>
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="features-title">
        <div className="container">
          <motion.header
            className="section__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section__eyebrow">Why Saveur</span>
            <h2 id="features-title" className="section__title">Built for the way you actually cook.</h2>
            <p className="section__lead">No paywalls, no life stories before the recipe — just clean information so you can get into the kitchen sooner.</p>
          </motion.header>

          <div className="feature-grid">
            {FEATURES.map((feature, i) => (
              <motion.article
                key={feature.title}
                className="feature"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="feature__icon" aria-hidden="true">{feature.icon}</div>
                <h3 className="feature__title">{feature.title}</h3>
                <p className="feature__body">{feature.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="parallax-band" aria-labelledby="parallax-title">
        <SimpleParallax scale={1.4} delay={0.4} transition="cubic-bezier(0,0,0,1)">
          <img
            className="parallax-band__bg"
            src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=1600&q=80&auto=format&fit=crop"
            alt=""
          />
        </SimpleParallax>
        <motion.div
          className="parallax-band__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h2 id="parallax-title" className="parallax-band__title">
            From street stalls to weeknight dinners.
          </h2>
          <p className="parallax-band__lead">
            Every recipe in Saveur comes from TheMealDB — a community-driven library
            of dishes from cooks around the world.
          </p>
          <Button as={Link} to="/explore" variant="primary" withArrow>
            Browse the library
          </Button>
        </motion.div>
      </section>
    </PageWrapper>
  )
}
