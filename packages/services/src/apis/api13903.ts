/* eslint-disable */
// @ts-nocheck
/**
 * 新增文件
 * https://yapi.yza.cn/project/111/interface/api/13903
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
export interface IReqapi13903 {
    /**
     * 用印文件归属类型
     */
    fileType?: string
    /**
     * 文件名称
     */
    fileName?: string
    /**
     * 文件原始链接
     */
    oriFileUrl?: string
    fileInfo?: {
        originalName?: string
        fileName?: string
        url?: string
        fileSize?: number
        width?: number
        height?: number
    }
}
/**
 * BaseResult<Boolean>
 */
export interface IResapi13903 {
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

export const currentUrl = getCurrentUrl(111, '/wflow/seal/fixed/file/add')

export default (
    data?: IReqapi13903,
    extendConfig?: ExtendConfig
): Promise<IResapi13903['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
