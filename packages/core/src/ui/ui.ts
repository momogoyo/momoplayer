import { provider } from '@/context'

export const createUI = () => provider(({
  element,
  instance
}) => {
  console.log('createUI', element)

  return () => {
    instance
  }
})