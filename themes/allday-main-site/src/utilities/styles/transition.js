export const transition = ({
  property = 'all',
  duration = '.2s',
  delay = '0s',
  easing = 'ease'
}) => `
  transition: ${property} ${duration} ${delay} ${easing}
`
