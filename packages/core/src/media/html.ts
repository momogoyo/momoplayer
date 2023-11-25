import { provider } from '@/context'

export const load = () => provider(({
  config,
  element
}) => {
  const mediaElement = element.querySelector(config.mediaType) as HTMLMediaElement
  
  mediaElement.src = config.source
  mediaElement.load()
  
  if (config.mediaType === 'audio') {
    mediaElement.controls = true
  }

  return mediaElement
})

export const play = () => {

}

export const pause = () => {

}

export default {
  load,
  play,
  pause
}