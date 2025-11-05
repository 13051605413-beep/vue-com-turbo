// 本地开发serve, 这里决定调接口的环境
type DevEnv = 'mock' | 'dev' | 'sit' | 'uat' | 'prd' | 'demo'
export const devEnv: DevEnv = 'dev'

// build mode
// @ts-ignore
type ModeEnv = 'development' | 'mock' | 'dev' | 'sit' | 'uat' | 'prd' | 'demo'
// export const envByMode = import.meta.env.MODE as ModeEnv
export const envByMode = 'development'

export const isDev: boolean = envByMode === 'development'

// 当前env，如果是开发状态，从devEnv获取，如果是build，取envByMode
export const currentEnv = isDev ? devEnv : envByMode
