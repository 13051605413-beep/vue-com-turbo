/* eslint-disable */
// @ts-nocheck
/**
 * 判断该月份是否调整过
 * https://yapi.yza.cn/project/59/interface/api/23765
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

export interface IReqapi23765 {
    /**
     * 结算月份
     */
    adjustMonth?: string | number
}
/**
 * 该月份是否调整过
 */
export interface IResapi23765 {
    /**
     * 操作状态码，200:成功，500:失败
     */
    status: number
    /**
     * 提示信息，{操作成功|操作失败}
     */
    message: string
    /**
     * 业务数据
     */
    data: boolean
}

export const currentUrl = getCurrentUrl(
    59,
    '/finance/finance/financeCarerAdjust/isExistAdjustPersonalTax'
)

export default (
    data?: IReqapi23765,
    extendConfig?: ExtendConfig
): Promise<IResapi23765['data']> =>
    service({
        method: 'GET',
        url: currentUrl,
        params: data,
        extendConfig
    })
