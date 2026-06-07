export default function Card({ as: Component = 'article', interactive = false, className = '', children, ...rest }) {
  const classes = ['card', interactive ? 'card--interactive' : '', className].filter(Boolean).join(' ')
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  )
}
