import { provider } from '@/context'

export const createSpatial = () => provider(({
  element,
  instance
}) => {
  console.log('createSpatial', element)

  return () => {
    instance
  }
})