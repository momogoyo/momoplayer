import { play } from './play'
import { pause } from './pause'
import { toggle } from './toggle'

export const createCommands = () => {
  return {
    play,
    pause,
    toggle
  }
}