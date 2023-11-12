import { createStore } from 'zustand/vanilla'
import { subscribeWithSelector } from 'zustand/middleware'
import { provider } from '@/context'

export const createCommands = () => provider(({
  instance,
  element
}) => {
  const defaultCommands = {
    play: false,
    pause: false
  }

  const store = createStore(subscribeWithSelector(() => ({
    ...defaultCommands
  })))

  store.subscribe(
    (state) => state.play,
    (value) => {
      if (value) {
        if (element instanceof HTMLMediaElement) {
          element.play()
        }
        // context.events.emit(Events.PLAY)
      }
      
    }
  )

  return (command) => {
    if (command) {
      store.setState({ ...command })
    } else {
      return store.getState()
    }
  }
})