import { createStore } from 'zustand/vanilla'
import { subscribeWithSelector } from 'zustand/middleware'
import { provider } from '@/context'

export const createStyles = () => provider(({
  instance,
  element
}) => {
  const defaultCommands = {
    gradient: false,
    shadow: false
  }

  const store = createStore(subscribeWithSelector(() => ({
    ...defaultCommands
  })))

  store.subscribe(
    (state) => state.gradient,
    (value) => {
      if (value) {
        // gradient 적용
      }
      
    }
  )

  store.subscribe(
    (state) => state.shadow,
    (value) => {
      if (value) {
        // shadow 적용
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