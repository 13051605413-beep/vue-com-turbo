/* eslint-disable */
// @ts-nocheck
/**
 * 更新AI群组配置
 * https://yapi.yza.cn/project/272/interface/api/60017
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

/**
 * AI群组配置更新DTO
 */
export interface IReqapi60017 {
    /**
     * 主键ID
     */
    id?: number
    /**
     * 租户id
     */
    orgId?: number
    /**
     * 配置名称
     */
    name?: string
    /**
     * 配置描述
     */
    description?: string
    /**
     * 主体类型（1：个微，2：企微）
     */
    subjectType?: number
    /**
     * 群名称规则
     */
    groupNameRule?: string
    /**
     * 主个微账号(subject_type=1)
     */
    wcId?: string
    /**
     * 主企微账号(subject_type=2)
     */
    qwUserId?: string
    /**
     * 是否开启AI回复（0：未开启，1：已开启）
     */
    enableAiAnswer?: number
    /**
     * 建群欢迎语
     */
    groupWelcomeId?: number
    /**
     * 同意好友欢迎语
     */
    friendWelcomeId?: number
    /**
     * 分身 id
     */
    separateId?: number
    /**
     * 渠道码
     */
    marketingChannel?: string
    /**
     * 场景码
     */
    marketingScene?: string
    /**
     * 用户 id
     */
    userId?: number
    /**
     * 是否开启群聊配置（0：未开启，1：已开启）
     */
    enableGroupChat?: number
    /**
     * 模式（1:仅@ 2：智能回复）
     */
    mode?: number
    /**
     * 上下文规则
     */
    contextRule?: {
        /**
         * 启用消息条数限制
         */
        messageLimitEnable?: boolean
        /**
         * 消息条数限制
         */
        messageLimit?: number
        /**
         * 启用时间限制
         */
        timeLimitEnable?: boolean
        /**
         * 时间限制（分钟）
         */
        timeLimit?: number
        /**
         * 条件逻辑操作符（1:且(AND) 2:或(OR)），默认为且
         */
        logicOperator?: number
    }
    /**
     * 配置状态（0：未开启，1：已开启）
     */
    status?: number
    /**
     * 创建人ID
     */
    createUserId?: number
    /**
     * 备注
     */
    remark?: string
    /**
     * 逻辑删除标志
     */
    deletedTime?: number
    /**
     * 创建时间
     */
    gmtCreate?: string
    /**
     * 修改时间
     */
    gmtModified?: string
    /**
     * 成员列表
     */
    memberList?: {
        /**
         * 主键ID
         */
        id?: number
        /**
         * 账号类型（1：个微，2：企微）
         */
        accountType?: number
        /**
         * 建群企微 id
         */
        qywxUserId?: string
        /**
         * 账号名称
         */
        accountName?: string
        /**
         * 微信 id
         */
        wcId?: string
    }[]
    /**
     * AI 打标规则列表
     */
    aiRuleIds?: number[]
}
/**
 * 操作结果
 */
export interface IResapi60017 {
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

export const currentUrl = getCurrentUrl(272, '/qywx/ai/groupConfig/update')

export default (
    data?: IReqapi60017,
    extendConfig?: ExtendConfig
): Promise<IResapi60017['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
