import { provider } from '@/context'

export const createSpatial = () => provider(({
  element,
  instance
}) => {
  return () => {
    instance
  }
})