import { motion } from 'motion/react'

export default function PageWrapper({ children, label }) {
  return (
    <motion.main
      id="main"
      aria-label={label}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}
