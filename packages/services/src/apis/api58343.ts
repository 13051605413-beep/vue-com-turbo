/* eslint-disable */
// @ts-nocheck
/**
 * 获取个人分身列表
 * https://yapi.yza.cn/project/254/interface/api/58343
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

/**
 * 查询条件
 */
export interface IReqapi58343 {
    pageIndex?: number
    pageSize?: number
    sorts?: {
        field?: string
        type?: string
    }[]
    /**
     * 机构ID
     */
    orgId?: number
    /**
     * id集合
     */
    idList?: number[]
    /**
     * 关键词
     */
    keyword?: string
    /**
     * 用户ID
     */
    userId: number
    /**
     * 用户ID集合
     */
    userIdList?: number[]
    isOfficial?: number
}
/**
 * 分身列表
 */
export interface IResapi58343 {
    status: number
    message: string
    data: {
        /**
         * 主键
         */
        id: number
        /**
         * 机构id
         */
        orgId: number
        /**
         * 用户ID
         */
        userId: number
        /**
         * 分身编码
         */
        agentCode: string
        /**
         * 分身名称
         */
        agentName: string
        /**
         * 分身头像
         */
        agentAvatar: string
        /**
         * 分身描述
         */
        agentDesc: string
        /**
         * 标签
         */
        agentTag: string
        /**
         * 应用类型（chat：聊谈助手 agent：智能助手 completion：文本生成应用 chatflow：具有记忆多轮对话工作流 workflow：流程编排工作流）
         */
        agentType: string
        /**
         * 关联Dify的应用密钥
         */
        apiKey: string
        /**
         * 是否官方（0-否 1-是）
         */
        isOfficial: number
        /**
         * 人设
         */
        characterDesign: string
        /**
         * 开场白
         */
        prologue: string
        /**
         * 推荐问题
         */
        recommendQuestion: string[]
        /**
         * 分身性别：0 未知 1 男 2 女
         */
        sex: number
        /**
         * 音色id
         */
        timbreId: string
        /**
         * 语言
         */
        lang: string
        /**
         * 知识库ID
         */
        knowledgeId: string
        /**
         * 自定义人设ID
         */
        modelId: number
        /**
         * 提示词
         */
        prompt: string
    }[]
}

export const currentUrl = getCurrentUrl(254, '/api/agent/queryUserAgentList')

export default (
    data?: IReqapi58343,
    extendConfig?: ExtendConfig
): Promise<IResapi58343['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
