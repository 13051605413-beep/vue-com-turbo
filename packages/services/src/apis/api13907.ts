/* eslint-disable */
// @ts-nocheck
/**
 * 删除文件
 * https://yapi.yza.cn/project/111/interface/api/13907
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

/**
 * 参数
 */
export interface IReqapi13907 {
    id?: number
}
/**
 * BaseResult<Boolean>
 */
export interface IResapi13907 {
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

export const currentUrl = getCurrentUrl(111, '/wflow/seal/fixed/file/delete')

export default (
    data?: IReqapi13907,
    extendConfig?: ExtendConfig
): Promise<IResapi13907['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
