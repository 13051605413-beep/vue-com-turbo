/* eslint-disable */
// @ts-nocheck
/**
 * 查询固定文件列表
 * https://yapi.yza.cn/project/111/interface/api/13899
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

export interface IReqapi13899 {}
/**
 * BaseResult<List<SealFixedFileVo>>
 */
export interface IResapi13899 {
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
        id: number
        /**
         * 文件类型
         */
        fileType: string
        /**
         * 文件名称，如 颐挚证件原照.pdf
         */
        fileName: string
        /**
         * 原文件路径
         */
        oriFileUrl: string
        /**
         * 预览文件路径
         */
        previewFileUrl: string
    }[]
}

export const currentUrl = getCurrentUrl(111, '/wflow/seal/fixed/file/list')

export default (
    data?: IReqapi13899,
    extendConfig?: ExtendConfig
): Promise<IResapi13899['data']> =>
    service({
        method: 'GET',
        url: currentUrl,
        params: data,
        extendConfig
    })
