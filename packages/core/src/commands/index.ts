export const createCommands = () => {
  const play = () => {
    console.log('play')
  }

  const pause = () => {
    console.log('pause')
  }

  return {
    play,
    pause
  }
}