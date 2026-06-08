import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SimpleParallax from 'simple-parallax-js'
import PageWrapper from '../components/layout/PageWrapper.jsx'
import Button from '../components/ui/Button.jsx'

const STEPS = [
  {
    title: 'Browse the library',
    body: 'Pick a cuisine category (Italian, Malaysian, Vegan, Seafood) and scan the cards.',
  },
  {
    title: 'Open a recipe',
    body: 'Every card opens to a clean details page with ingredients, measures, and steps.',
  },
  {
    title: 'Cook with confidence',
    body: 'Read once, cook well. Save the source link or YouTube video for later if you want.',
  },
]

export default function About() {
  return (
    <PageWrapper label="About">
      <section className="section" aria-labelledby="about-title">
        <div className="container">
          <motion.header
            className="section__header"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section__eyebrow">About</span>
            <h1 id="about-title" className="section__title">A quiet place for recipes.</h1>
          </motion.header>

          <div className="about__intro">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <p className="about__lead">
              Saveur is a recipe browser made for cooking, not scrolling. Pick a cuisine, open a card, and go straight to a clean ingredient list and a step-by-step method. That's it.

Designed with simplicity in mind, Saveur removes unnecessary distractions so users can focus on preparing great meals. Browse recipes by category, discover new dishes from around the world, and save your favourites for later. Whether you're a beginner or an experienced home cook, Saveur makes finding and following recipes quick, easy, and enjoyable.
              </p>

              <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Button as={Link} to="/explore" variant="primary" withArrow>
                  Start exploring
                </Button>

              </div>
            </motion.div>

            <motion.div
              className="about__image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <SimpleParallax scale={1.2} delay={0.4} transition="cubic-bezier(0,0,0,1)">
                <img
                  src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80&auto=format&fit=crop"
                  alt="A close-up of colourful spices in small wooden bowls."
                />
              </SimpleParallax>
            </motion.div>
          </div>

          <motion.div
            className="about__quote"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <blockquote>
              “Cooking is at once child's play and adult joy. And cooking done with care is an act of love.”
            </blockquote>
            <cite>Craig Claiborne</cite>
          </motion.div>

          <motion.section
            aria-labelledby="how-it-works"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={{ marginTop: '4rem' }}
          >
            <header className="section__header" style={{ marginBottom: '2rem' }}>
              <span className="section__eyebrow">How it works</span>
              <h2 id="how-it-works" className="section__title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}>
                Three steps from craving to cooking.
              </h2>
            </header>
            <div className="about__steps">
              {STEPS.map((step, i) => (
                <motion.article
                  key={step.title}
                  className="about__step"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </motion.article>
              ))}
            </div>
          </motion.section>


        </div>
      </section>
    </PageWrapper>
  )
}
