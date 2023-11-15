export const createObject = <T extends object, P extends object>(
  proto: T,
  props: P
) => (
  Object.assign(Object.create(proto), props)
)

export function isObject (value) {
  return typeof value === 'object' && value !== null
}

export const assign = Object.assign || function extend (obj, ...args) {
  if (isObject(obj) && args.length > 0) {
    args.forEach((arg) => {
      if (isObject(arg)) {
        Object.keys(arg).forEach((key) => {
          obj[key] = arg[key]
        })
      }
    })
  }

  return obj
}

export const extend = (target, ...sources) => {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) assign(target, { [key]: {} })
        extend(target[key], source[key])
      } else {
        assign(target, { [key]: source[key] })
      }
    }
  }

  return extend(target, ...sources)
}

export const checkMediaType = (
  source: string
) => {
  const audioExtensions = [ '.mp3', '.wav', '.ogg', '.aac']
  const extension = source.substring(source.lastIndexOf('.'))

  return audioExtensions.includes(extension) ? 'audio' : 'video'
}