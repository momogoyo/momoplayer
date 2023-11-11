import { provider } from '../context'

export const createCommands = provider((
  context
) => {
  return () => {
    const play = () => {
      console.log('context play', context)
      // context.element.play()
    }

    const pause = () => {
      console.log('context pause', context)
      // context.element.pause()
    }

    return {
      play,
      pause
    }
  }
})