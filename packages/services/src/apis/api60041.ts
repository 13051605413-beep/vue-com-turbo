/* eslint-disable */
// @ts-nocheck
/**
 * 分页查询AI群组配置列表
 * https://yapi.yza.cn/project/272/interface/api/60041
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
export interface IReqapi60041 {
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
     * 租户id
     */
    orgId?: number
    /**
     * ids
     */
    ids?: number[]
    /**
     * 投放名称
     */
    name?: string
    /**
     * 企微用户ID
     */
    qwUserId?: string
    /**
     * 营销渠道
     */
    marketingChannel?: string
    /**
     * 营销渠道
     */
    marketingScene?: string
    /**
     * 使用人
     */
    userName?: string
    /**
     * 使用人ID
     */
    userId?: number
    /**
     * 是否开启群聊
     */
    enableGroupChat?: number
    /**
     * 配置状态（0：未开启，1：已开启）
     */
    status?: number
    /**
     * 是否开启AI回复（0：未开启，1：已开启）
     */
    enableAiAnswer?: number
    /**
     * 主体类型（1：个微，2：企微）
     */
    subjectType?: number
    /**
     * 主个微账号(subject_type=1)
     */
    wcId?: string
}
/**
 * 分页数据
 */
export interface IResapi60041 {
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
             * 配置名称
             */
            name: string
            /**
             * 配置描述
             */
            description: string
            /**
             * 主体类型（1：个微，2：企微）
             */
            subjectType: number
            /**
             * 群名称规则
             */
            groupNameRule: string
            /**
             * 主个微账号(subject_type=1)
             */
            wcId: string
            /**
             * 主企微账号(subject_type=2)
             */
            qwUserId: string
            /**
             * 企微二维码配置 id
             */
            qrConfigId: string
            /**
             * 活码 state
             */
            qrCodeState: string
            /**
             * 分身 id
             */
            separateId: number
            /**
             * 分身名称
             */
            separateName: string
            /**
             * 渠道码
             */
            marketingChannel: string
            /**
             * 渠道码名称
             */
            marketingChannelName: string
            /**
             * 场景码
             */
            marketingScene: string
            /**
             * 场景码名称
             */
            marketingSceneName: string
            /**
             * 用户 id
             */
            userId: number
            /**
             * 用户名称
             */
            username: string
            /**
             * 是否开启群聊配置（0：未开启，1：已开启）
             */
            enableGroupChat: number
            /**
             * 模式（1:仅@ 2：智能回复）
             */
            mode: number
            /**
             * 上下文规则
             */
            contextRule: {
                /**
                 * 启用消息条数限制
                 */
                messageLimitEnable: boolean
                /**
                 * 消息条数限制
                 */
                messageLimit: number
                /**
                 * 启用时间限制
                 */
                timeLimitEnable: boolean
                /**
                 * 时间限制（分钟）
                 */
                timeLimit: number
                /**
                 * 条件逻辑操作符（1:且(AND) 2:或(OR)），默认为且
                 */
                logicOperator: number
            }
            /**
             * 是否开启AI回复（0：未开启，1：已开启）
             */
            enableAiAnswer: number
            /**
             * 建群欢迎语
             */
            groupWelcomeId: number
            /**
             * 建群欢迎语名称
             */
            groupWelcomeName: string
            /**
             * 同意好友欢迎语
             */
            friendWelcomeId: number
            /**
             * 同意好友欢迎语名称
             */
            friendWelcomeName: string
            /**
             * 配置状态（0：未开启，1：已开启）
             */
            status: number
            /**
             * 创建人ID
             */
            createUserId: number
            /**
             * 备注
             */
            remark: string
            /**
             * 创建时间
             */
            gmtCreate: string
            /**
             * 修改时间
             */
            gmtModified: string
            /**
             * 成员列表
             */
            memberList: {
                /**
                 * 主键ID
                 */
                id: number
                /**
                 * 账号类型（1：个微，2：企微）
                 */
                accountType: number
                /**
                 * 建群企微 id
                 */
                qywxUserId: string
                /**
                 * 账号名称
                 */
                accountName: string
                /**
                 * 微信 id
                 */
                wcId: string
            }[]
            /**
             * 活码信息
             */
            activeCode: {
                /**
                 * 配置id
                 */
                configId: string
                /**
                 * 联系二维码的URL
                 */
                qrCode: string
            }
            /**
             * 打标规则id列表
             */
            aiRuleIds: number[]
            /**
             * 打标规则列表
             */
            aiRuleList: {
                /**
                 * 主键ID
                 */
                id: number
                /**
                 * 租户ID
                 */
                tenantId: number
                /**
                 * 规则名称
                 */
                name: string
                /**
                 * 状态：0禁用 1启用
                 */
                status: number
                /**
                 * AI提示词
                 */
                aiPrompt: string
                /**
                 * 规则描述
                 */
                description: string
            }[]
            /**
             * 生效 sop 规则列表
             */
            raiseTaskList: {
                /**
                 * 主键ID
                 */
                id: number
                /**
                 * 租户id
                 */
                orgId: number
                /**
                 * 任务名称
                 */
                taskName: string
            }[]
        }[]
    }
}

export const currentUrl = getCurrentUrl(272, '/qywx/ai/groupConfig/page')

export default (
    data?: IReqapi60041,
    extendConfig?: ExtendConfig
): Promise<IResapi60041['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
