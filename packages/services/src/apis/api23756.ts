/* eslint-disable */
// @ts-nocheck
/**
 * 下载失败的个税调整
 * https://yapi.yza.cn/project/59/interface/api/23756
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

/**
 * 财务调整项
 */
export interface IReqapi23756 {
    settleMonth: number
    operatorId?: number
    operatorName?: string
}
export interface IResapi23756 {}

export const currentUrl = getCurrentUrl(
    59,
    '/finance/finance/financeCarerAdjust/downloadFailureAdjustPersonalTax'
)

export default (
    data?: IReqapi23756,
    extendConfig?: ExtendConfig
): Promise<IResapi23756['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
