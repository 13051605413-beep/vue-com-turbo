import { currentEnv } from './env'

// 返回当前环境下的baseUrl
function getCurrentUrl(yapiProjectId: number, path: string) {
    const envs: Record<string, any> = {
        mock: `https://yapi.yza.cn/mock/${yapiProjectId}`,
        dev: `https://gateway-dev.yza.cn`,
        sit: `https://gateway-sit.yza.cn`,
        uat: `https://gateway-uat.yza.cn`,
        prd: `https://gateway.yza.cn`,
        demo: `https://gateway-demo.yza.cn`,
    }

    if (/^http/.test(path)) {
        return path
    }

    const envUrl = envs[currentEnv]
    return envUrl + path
}

// 返回当前环境下的baseUrl
function getFlowUrl(port: number, path: string, queryString?: string) {
    const envs: Record<string, any> = {
        mock: ``,
        dev: `https://wflow-web-dev.yza.cn`,
        sit: `https://wflow-web-sit.yza.cn`,
        uat: `https://wflow-web-uat.yza.cn`,
        prd: `https://wflow-web.yza.cn`,
        demo: `https://wflow-web-demo.yza.cn`,
    }
    let envUrl = envs[currentEnv]
    if (port) {
        envUrl = 'http://local.yza.cn:1024'
    }

    return envUrl + path + (queryString ? `?${queryString}` : '')
}

// 返回当前环境下的登录地址
const loginByEnvs: Record<string, any> = {
    dev: `https://login-dev.yzartigence.cn`,
    sit: `https://login-sit.yzartigence.cn`,
    uat: `https://login-uat.yzartigence.cn`,
    prd: `https://login.yzartigence.cn`,
    demo: `https://login-demo.yzartigence.cn`,
}

// 返回当前环境下的baseUrl
export function getAiScreenCurrentUrl() {
    const envs: Record<string, any> = {
        mock: 'https://ai-screen-dev.yza.cn',
        dev: 'https://ai-screen-dev.yza.cn',
        sit: 'https://ai-screen-sit.yza.cn',
        uat: 'https://ai-screen-uat.yza.cn',
        prd: 'https://ai-screen.yza.cn',
        demo: 'https://ai-screen-demo.yza.cn',
    }

    return envs[currentEnv]
}

// 返回当前环境下org的baseUrl
export function getOrgScreenCurrentUrl() {
    const envs: Record<string, any> = {
        mock: 'https://org-dev.yza.cn',
        dev: 'https://org-dev.yza.cn',
        sit: 'https://org-sit.yza.cn',
        uat: 'https://org-uat.yza.cn',
        prd: 'https://org.yza.cn',
        demo: 'https://org-demo.yza.cn',
    }

    return envs[currentEnv]
}

export function getMobileCurrentUrl() {
    const envs: Record<string, any> = {
        mock: 'https://mobile-dev.yza.cn',
        dev: 'https://mobile-dev.yza.cn',
        sit: 'https://mobile-sit.yza.cn',
        uat: 'https://mobile-uat.yza.cn',
        prd: 'https://mobile.yza.cn',
        demo: 'https://mobile-demo.yza.cn',
    }

    return envs[currentEnv]
}

export const currentLoginUrl = loginByEnvs[currentEnv]
export const wflowUrl = getFlowUrl
export const callbackCurrentLoginUrl = `${currentLoginUrl}/login`
export const callbackCurrentLoginUrlNoRedirect = `${currentLoginUrl}/login`
export const callbackCurrentLoginWaitUrl = `${currentLoginUrl}/login/loginWait`
export default getCurrentUrl
