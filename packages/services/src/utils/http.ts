// @ts-nocheck
import axios, { AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import Cookies from 'js-cookie'
import noLoginJump from '@/utils/noLoginJump'
import { currentEnv } from '@/utils/env'
import { reqChannel, SYSTEMCODE } from '@/utils/config'
import { useUserStore } from '@/store'
import _ from 'lodash'

// const userStore = useUserStore()
type ExtendResponse = {
    config: {
        extendConfig: {
            needShowMessage: boolean
            needFullResponse: boolean
        }
    }
} & AxiosResponse

// 异常请求的时间
let errorStartTime = 0

type MessageType = 'error' | 'warning'

// 限定delay(默认1秒)时间内只抛一个错误
const callbackMessageHandle = (type: MessageType) => {
    return (msg: string, delay = <number>1000) => {
        const nowTime = new Date().getTime()
        // 如果没有初始化时间，或者超过delay, 抛出错误
        if (!errorStartTime || nowTime - errorStartTime > delay) {
            errorStartTime = nowTime
            ElMessage[type](msg)
        }

        return Promise.reject(msg)
    }
}
const rejectHandle = callbackMessageHandle('error')
const tipHandle = callbackMessageHandle('warning')

const getBaseHeader = () => {
    const orgId = Cookies.get('orgId')
    const Authorization = Cookies.get('yilifeToken')
    return {
        orgId,
        Authorization,
        reqChannel: reqChannel,
        systemCode: SYSTEMCODE,
    }
}

// 创建axios实例
const instance = axios.create({
    responseType: 'json',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        // TODO 上线后删除
        reqChannel: reqChannel,
        systemCode: SYSTEMCODE,
    },
    timeout: 30 * 1000, // 请求超时时间
})

// request拦截器
instance.interceptors.request.use(
    (config: any) => {
        // 每次请求时获取最新的 token
        config.headers.Authorization = Cookies.get('yilifeToken')
        return config
    },
    (error) => {
        Promise.reject(error)
    },
)

// response 拦截器
instance.interceptors.response.use(
    (response) => {
        // 2xx 状态会走这里
        // console.log(response)
        const result = response?.data || {}
        const { config } = response as ExtendResponse
        const { needFullResponse = false, needShowMessage = true } = config.extendConfig || {}
        // 如果是yapi mock，不报错就返回
        if (currentEnv === 'mock') {
            if (response?.status === 200 && !result.errcode) {
                return Promise.resolve(needFullResponse ? result : result.data)
            }
        }

        // 只有http的status为200时,且服务端返回status为200时，业务正常
        if (
            (response?.status === 200 && result.status === 200) ||
            (response?.config?.url?.includes('/crm-server') && result.code === 0)
        ) {
            return Promise.resolve(needFullResponse ? result : result.data)
        }

        // 业务异常，正常警告提示
        needShowMessage && result.message && tipHandle(result.message)
        // 返回整个对象
        return Promise.reject(result)
    },
    (error) => {
        try {
            const { config, status } = (error.response || {}) as ExtendResponse
            const { needShowMessage = true } = config.extendConfig || {}

            // 处理下服务器抛出的错误
            // 没有登录
            if (status === 401) {
                noLoginJump()
                return Promise.reject(error.response)
            }

            // 没有权限
            if (status === 403) {
                needShowMessage && rejectHandle(error.response.data.message)
                return
            }

            if (error.message.indexOf('Network Error') !== -1) {
                needShowMessage && rejectHandle('网络波动不稳定')
                return
            }

            if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
                needShowMessage && rejectHandle('请求超时')
                return
            }
            needShowMessage && rejectHandle('服务异常,请稍后再试')
            return Promise.reject(error)
        } catch (catchError) {
            return Promise.reject(catchError)
        }
    },
)

const service = ({ method = 'post', url, params = {}, data = {}, extendConfig = {}, ...moreConf }) => {
    const userStore = useUserStore()
    method = method.toLowerCase()
    const orgId = userStore.org.orgId
    const { timeout } = moreConf || {}

    const headers = {
        tenantId: orgId,
        orgId,
    }

    // 商品
    if (window.location.pathname.includes('goods-manage/')) {
      headers.shopId = userStore.shopId || ''
    }

    if (method === 'get') {
        // 此处大坑，...params不能写在后面老代码取得orgId不对
        if (_.isObjectLike(params)) {
            params.orgId = params.orgId ? params.orgId : orgId
            params.tenantId = params.orgId ? params.orgId : orgId
            // params.shopId = params.shopId ? params.shopId : shopId
        }
    } else {
        if (_.isObjectLike(data)) {
            data.orgId = data.orgId ? data.orgId : orgId
            data.tenantId = data.orgId ? data.orgId : orgId
            // params.shopId = params.shopId ? params.shopId : shopId
        }
    }

    const requestParams = {
        method,
        url,
        params,
        data,
        headers,
        extendConfig,
    }

    if (timeout) requestParams.timeout = timeout

    return instance(requestParams)
}
export { service, instance, getBaseHeader }
