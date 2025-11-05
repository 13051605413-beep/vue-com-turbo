/* eslint-disable */
// @ts-nocheck
/**
 * 获取表单详情（PC+小程序）
 * https://yapi.yza.cn/project/111/interface/api/12959
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

export interface IReqapi12959 {
    /**
     * 表单的key
     */
    formKey: string | number
}
export interface IResapi12959 {
    status: number
    message: string
    data: {
        /**
         * 表单key，租户下唯一
         */
        formKey: string
        /**
         * 租户ID
         */
        tenantId: string
        /**
         * 表单名称
         */
        name: string
        /**
         * 关联的审批表单ID，为null或empty表示无关联
         */
        processFormId: string
        /**
         * 关联的审批流程名称
         */
        processName: string
        /**
         * 文件信息
         */
        fileInfo: {
            /**
             * 原文件名称，如：劳动合同模板文件.pdf
             */
            originalName: string
            /**
             * 文件URI，如：34/131240/ORG/gsujwbun7kdi4qer1cqs5zy6j.pdf
             */
            fileName: string
            /**
             * 文件大小，单位字节
             */
            fileSize: number
            /**
             * 文件宽度
             */
            width: string
            /**
             * 文件高度
             */
            height: string
            /**
             * 文件全路径
             */
            fileUrl: string
        }
        /**
         * 表单内容提交之后，可否编辑
         */
        modifiable: boolean
        /**
         * 是否可以重复提交，true表示只能提交一次
         */
        once: boolean
        /**
         * 在落地文件是否需要水印
         */
        watermark: boolean
        /**
         * 关联的模版文档路径
         */
        fileUrl: string
        /**
         * 是否启用
         */
        enable: boolean
        /**
         * 版本号
         */
        version: number
        /**
         * 是否可重新填写
         */
        writable: boolean
        /**
         * true表示在h5 不需要提示
         */
        writableInH5: boolean
        /**
         * 关联的表单项列表
         */
        items: {
            /**
             * 表单key
             */
            formKey: string
            /**
             * 租户ID
             */
            tenantId: string
            /**
             * 表单项Id
             */
            formItemId: string
            /**
             * 表单项类型，如INPUT
             */
            type: string
            /**
             * 表单项标题
             */
            label: string
            /**
             * 是否显示标签
             */
            showLabel: boolean
            /**
             * 默认值
             */
            defaultValue: string
            /**
             * 是否必填
             */
            required: boolean
            /**
             * 输入型提示文字
             */
            placeholder: string
            /**
             * 排序，从小到大
             */
            sort: string
            /**
             * 栅格宽度
             */
            span: string
            /**
             * 扩展字段 表单项独有字段
             */
            scheme: string
        }[]
    }
}

export const currentUrl = getCurrentUrl(111, '/wflow/doc/get')

export default (
    data?: IReqapi12959,
    extendConfig?: ExtendConfig
): Promise<IResapi12959['data']> =>
    service({
        method: 'GET',
        url: currentUrl,
        params: data,
        extendConfig
    })
