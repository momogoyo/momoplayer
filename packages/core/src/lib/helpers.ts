export const createObject = <T extends object, P extends object>(
  proto: T,
  props: P
) => (
  Object.assign(Object.create(proto), props)
)

export const checkMediaType = (
  source: string
) => {
  const audioExtensions = [ '.mp3', '.wav', '.ogg', '.aac']
  const extension = source.substring(source.lastIndexOf('.'))

  return audioExtensions.includes(extension) ? 'audio' : 'video'
}

export const isHlsExtension = (source: string) => (
  source.endsWith('.m3u8')
)

export const isDashExtension = (source: string) => (
  source.endsWith('.mpd')
)