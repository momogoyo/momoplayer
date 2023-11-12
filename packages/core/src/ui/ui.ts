import { provider } from '@/context'
import { style } from '@vanilla-extract/css'

export const createUI = () => provider(({
  element,
  instance
}) => {
  const container = document.createElement('div')
  // const ContainerStyle = style({
  //   display: 'flex'
  // })

  // container.classList.add(ContainerStyle)

  // console.log(ContainerStyle)

  return () => {
    instance
  }
})