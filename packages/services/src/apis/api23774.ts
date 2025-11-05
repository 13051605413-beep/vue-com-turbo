/* eslint-disable */
// @ts-nocheck
/**
 * 上传文件
 * https://yapi.yza.cn/project/59/interface/api/23774
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

export interface IReqapi23774 {
    /**
     * file
     */
    file: FileData
}
/**
 * 是否成功
 */
export interface IResapi23774 {
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
    data: {
        /**
         * 成功数量
         */
        successCount: number
        /**
         * 失败数量
         */
        failureCount: number
    }
}

export const currentUrl = getCurrentUrl(
    59,
    '/finance/finance/financeCarerAdjust/uploadExcel'
)

export default (
    data?: IReqapi23774,
    extendConfig?: ExtendConfig
): Promise<IResapi23774['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
