/* eslint-disable */
// @ts-nocheck
/**
 * 分页查询欢迎语模板列表
 * https://yapi.yza.cn/project/272/interface/api/59735
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

/**
 * 分页查询参数
 */
export interface IReqapi59735 {
    /**
     * 当前查询页码,默认值 1
     */
    pageIndex?: number
    /**
     * 每页大小,默认值50，最大值500
     */
    pageSize?: number
    /**
     * 排序
     */
    sorts?: {
        /**
         * 排序字段
         */
        field?: string
        /**
         * 排序类型,asc:升序，desc:降序
         */
        type?: string
    }[]
    /**
     * 主键ID
     */
    id?: number
    /**
     * 租户id
     */
    orgId?: number
    /**
     * 模板名称
     */
    templateName?: string
    /**
     * 关键词
     */
    keywords?: string
    /**
     * 平台类型（1：个微，2：企微）
     */
    platformType?: number
    /**
     * 状态（1：启用，2：禁用）
     */
    templateStatus?: number
    /**
     * 创建人 id
     */
    createUserId?: number
}
/**
 * 分页模板列表
 */
export interface IResapi59735 {
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
         * 当前页
         */
        pageIndex: number
        /**
         * 每页的数量
         */
        pageSize: number
        /**
         * 总记录数
         */
        total: number
        /**
         * 结果集
         */
        data: {
            /**
             * 主键ID
             */
            id: number
            /**
             * 租户id
             */
            orgId: number
            /**
             * 模板名称
             */
            templateName: string
            /**
             * 描述
             */
            templateDesc: string
            /**
             * 状态（1：启用，2：禁用）
             */
            templateStatus: number
            /**
             * 平台类型（1：个微，2：企微）
             */
            platformType: number
            /**
             * 创建人 id
             */
            createUserId: number
            /**
             * 创建时间
             */
            gmtCreate: string
            /**
             * 修改时间
             */
            gmtModified: string
            /**
             * 配置列表
             */
            configList: {
                /**
                 * 主键ID
                 */
                id: number
                /**
                 * 租户ID
                 */
                orgId: number
                /**
                 * 模板ID
                 */
                templateId: number
                /**
                 * 内容类型
                 * 1：文字 - content为JSON格式：{"text": "文本内容"}
                 * 2：个微小程序 - content为JSON格式：{"path": "页面路径", "image": "图片链接", "appId": "小程序AppID", "originalId": "原始ID", "title": "标题", "channelCode": "渠道代码"}
                 * 3：图片 - content为JSON格式：{"url": "图片链接"}
                 * 4：公众号卡片 - content为JSON格式：{"shareImageUrl": "分享图片", "url": "H5链接", "title": "标题", "description": "描述"}
                 * 5：企微小程序 - content为JSON格式：{"appId": "小程序AppID", "agentId": "应用ID", "path": "页面路径", "title": "标题", "image": "图片链接", "schema": "小程序schema", "originalId": "小程序原始ID"}
                 * 6：音视频 - content为JSON格式：{"type": 1, "url": "文件链接", "fileName": "文件名", "fileSize": 文件大小}
                 *    type枚举值：1-音频文件，2-视频文件
                 * 7：文件 - content为JSON格式：{"type": 1, "url": "文件链接", "fileName": "文件名", "fileSize": 文件大小, "fileExtension": "扩展名"}
                 *    type枚举值：1-文档（docx、doc），2-表格（xlsx、xls），3-演示文稿（pptx、ppt），4-PDF，5-其他
                 */
                contentType: number
                /**
                 * 文本信息 （废弃，统一进 content 中）
                 * 「已废弃」
                 */
                text: string
                /**
                 * 小程序卡片信息 （废弃，统一进 content 中）
                 * 「已废弃」
                 */
                appletInfo: {}
                /**
                 * 内容信息（JSON格式）
                 * 根据contentType字段解析为对应的内容结构
                 * 详细格式请参考contentType字段的注释说明
                 */
                content: {}
                /**
                 * 创建人ID
                 */
                createUserId: number
                /**
                 * 创建时间
                 */
                gmtCreate: string
                /**
                 * 修改时间
                 */
                gmtModified: string
            }[]
        }[]
    }
}

export const currentUrl = getCurrentUrl(272, '/qywx/welcomeTemplate/page')

export default (
    data?: IReqapi59735,
    extendConfig?: ExtendConfig
): Promise<IResapi59735['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
