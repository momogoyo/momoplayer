import { provider } from '../context'

export const createCommands = provider((
  context
) => {
  return () => {
    const play = () => {
      context.element.play()
    }

    const pause = () => {
      context.element.pause()
    }

    return {
      play,
      pause
    }
  }
})