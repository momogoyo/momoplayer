export interface Config {
  // 미디어 리소스 URL를 설정합니다.
  source: string,
  // 미디어의 자동 재생 여부를 설정합니다.
  autoplay?: boolean
  // 미디어의 음소거 여부를 설정합니다.
  muted?: boolean
  // 미디어의 기본 컨트롤바 표시 여부를 설정합니다.
  controls?: boolean
  // 미디어의 반복 재생 여부를 설정합니다
  loop?: boolean
  // 미디어의 초기 볼륨 값을 설정합니다. 
  volume?: number
  // 공간 음향 활성화 여부를 설정합니다.
  spatial?: boolean
  // 미디어 타입을 설정합니다.
  mediaType?: 'hls' | 'dash' | 'video' | 'audio'
}

export const defaultConfig = {
  source: '',
  autoplay: false,
  muted: false,
  controls: false,
  loop: false,
  volume: 0.5,
  spatial: false,
  mediaType: ''
}