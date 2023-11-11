import { extend } from '@momoplayer/shared'

export interface Config {
  // 미디어 리소스 URL를 설정합니다.
  source: string,
  // 미디어의 자동 재생 여부를 설정합니다.
  autoplay?: boolean
  // 미디어의 음소거 여부를 설정합니다.
  muted?: boolean
  // 미디어의 반복 재생 여부를 설정합니다
  loop?: boolean
  // 미디어의 초기 볼륨 값을 설정합니다. 
  volume?: number
  // 공간 음향 활성화 여부를 설정합니다.
  spatial?: boolean
  // momoplayer의 ui를 사용할지의 여부를 설정합니다.
  ui?: boolean
}

const defaultConfig = {
  source: '',
  autoplay: false,
  muted: false,
  loop: false,
  volume: 0.5,
  spatial: false,
  ui: false
}

export const defineConfig = (
  config: Config
) => {
  return extend(
    defaultConfig,
    config
  )
}
