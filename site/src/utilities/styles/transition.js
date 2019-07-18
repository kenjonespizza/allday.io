export const transition = ({
  property = 'all',
  duration = '.2s',
  easing = 'ease'
}) => `
  transition: ${property} ${duration} ${easing}
`
