const VARIANT_CLASS = {
  primary: 'btn btn--primary',
  secondary: 'btn btn--secondary',
  ghost: 'btn btn--ghost',
}

export default function Button({
  variant = 'primary',
  size,
  as: Component = 'button',
  withArrow = false,
  children,
  className = '',
  ...rest
}) {
  const classes = [
    VARIANT_CLASS[variant] ?? VARIANT_CLASS.primary,
    size === 'small' ? 'btn--small' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...rest}>
      {children}
      {withArrow && <span className="btn__arrow" aria-hidden="true">→</span>}
    </Component>
  )
}
