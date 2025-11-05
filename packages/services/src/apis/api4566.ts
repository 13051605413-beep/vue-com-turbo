/* eslint-disable */
// @ts-nocheck
/**
 * 分页查询用户
 * https://yapi.yza.cn/project/111/interface/api/4566
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

/**
 * UserQuery
 */
export interface IReqapi4566 {
    pageIndex?: number
    pageSize?: number
    sorts?: {
        field?: string
        type?: string
    }[]
    /**
     * 租户id
     */
    tenantId?: number
    /**
     * 用户名
     */
    name?: string
}
/**
 * 用户列表
 */
export interface IResapi4566 {
    status: number
    message: string
    data: {
        pageIndex: number
        pageSize: number
        total: number
        data: {
            /**
             * 用户ID
             */
            id: string
            /**
             * 用户名
             */
            name: string
        }[]
    }
}

export const currentUrl = getCurrentUrl(111, '/wflow/user/queryByPage')

export default (
    data?: IReqapi4566,
    extendConfig?: ExtendConfig
): Promise<IResapi4566['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
