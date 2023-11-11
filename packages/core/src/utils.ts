export const createObject = <T extends object, P extends object>(
  proto: T,
  props: P
) => {
  return Object.assign(Object.create(proto), props)
}