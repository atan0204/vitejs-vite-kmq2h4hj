export default function Badge({ tone = 'default', children, className = '', ...rest }) {
  const toneClass = tone === 'accent' ? 'badge--accent' : tone === 'primary' ? 'badge--primary' : ''
  const classes = ['badge', toneClass, className].filter(Boolean).join(' ')
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  )
}
