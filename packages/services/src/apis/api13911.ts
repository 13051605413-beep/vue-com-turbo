/* eslint-disable */
// @ts-nocheck
/**
 * 查询文件类型列表
 * https://yapi.yza.cn/project/111/interface/api/13911
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

export interface IReqapi13911 {}
/**
 * BaseResult<List<SealFixedFileVo>>
 */
export interface IResapi13911 {
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
         * 文件类型
         */
        fileType: string
        /**
         * 文件名称(描述)
         */
        fileTypeDesc: string
        /**
         * 图标类型
         */
        logoType: string
        /**
         * 图标
         */
        logo: string
    }[]
}

export const currentUrl = getCurrentUrl(111, '/wflow/seal/fixed/file/type/list')

export default (
    data?: IReqapi13911,
    extendConfig?: ExtendConfig
): Promise<IResapi13911['data']> =>
    service({
        method: 'GET',
        url: currentUrl,
        params: data,
        extendConfig
    })
