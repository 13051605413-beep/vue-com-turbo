/* eslint-disable */
// @ts-nocheck
/**
 * 删除机构排班班次
 * https://yapi.yza.cn/project/59/interface/api/1169
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

export interface IReqapi1169 {
    id: string | number
}
export interface IResapi1169 {
    status: number
    message: string
    data: boolean
}

export const currentUrl = getCurrentUrl(
    59,
    '/orgAdmin/dutyinfo/deleteDutyInfoById'
)

export default (
    data?: IReqapi1169,
    extendConfig?: ExtendConfig
): Promise<IResapi1169['data']> =>
    service({
        method: 'GET',
        url: currentUrl,
        params: data,
        extendConfig
    })
