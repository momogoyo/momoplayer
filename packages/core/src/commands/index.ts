import { createStore } from 'zustand/vanilla'
import { subscribeWithSelector } from 'zustand/middleware'
import { provider } from '@/context'

export const createCommands = () => provider(({
  config
}) => {
  const defaultCommands = {
    ...config
  }

  const store = createStore(subscribeWithSelector(() => ({
    ...defaultCommands
  })))

  const subscribeKeys = (state, prevState) => {
    const diff = Object.keys(state).filter(key => state[key] !== prevState[key])
  
    return diff
  }

  let prevState = store.getState()
  
  store.subscribe(
    (state) => state,
    (value) => {
      const diff = subscribeKeys(value, prevState)
      diff.forEach((key) => {
        console.log(`${key}에 대한 이벤트 처리`)
      })
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