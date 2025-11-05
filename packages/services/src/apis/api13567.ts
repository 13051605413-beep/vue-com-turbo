/* eslint-disable */
// @ts-nocheck
/**
 * 潜客管理-我的线索-列表
 * https://yapi.yza.cn/project/124/interface/api/13567
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

export interface IReqapi13567 {
    /**
     * 当前页
     */
    current?: number
    /**
     * 分页大小
     */
    size?: number
    /**
     * 排序字段
     */
    sortBy?: string
    /**
     * 排序顺序
     */
    sortOrder?: string
    /**
     * 当前登录用户ID
     */
    userId: string
    /**
     * 查询条件组ID
     */
    queryGroupId?: string
    /**
     * 线索名称或联系方式
     */
    clueNameOrPhone?: string
    /**
     * 线索状态  0 待处理 1 跟进中
     */
    clueStatus?: number
    /**
     * 标签
     */
    tagIds?: string[]
    /**
     * 负责人id
     */
    headIds?: string[]
    /**
     * 协同人id
     */
    boratorIds?: string[]
    /**
     * 最后跟进开始时间
     */
    startFollowDay?: string
    /**
     * 最后跟进结束时间
     */
    endFollowDay?: string
    /**
     * 创建开始时间
     */
    startCreateDay?: string
    /**
     * 创建结束时间
     */
    endCreateDay?: string
    /**
     * 领取分配开始时间
     */
    startReceiveDay?: string
    /**
     * 领取分配结束时间
     */
    endReceiveDay?: string
    /**
     * 最后动态开始时间
     */
    startTrendDay?: string
    /**
     * 最后动态结束时间
     */
    endTrendDay?: string
    /**
     * 部门
     */
    depName?: string
    /**
     * 网址
     */
    url?: string
    /**
     * QQ号
     */
    qq?: string
    /**
     * 职务
     */
    position?: string
    /**
     * 邮箱
     */
    email?: string
    /**
     * 地址
     */
    addressName?: string
    /**
     * 性别code
     */
    gender?: number
    /**
     * 邮编
     */
    postCode?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 客户意向商品
     */
    intentionItem?: string
    /**
     * 创建人
     */
    createBy?: string[]
    /**
     * 线索名称
     */
    clueName?: string
    /**
     * 微信号
     */
    wcNumber?: string
    /**
     * 联系方式
     */
    contact?: string
    /**
     * 跟进阶段code 0 未处理 1 跟进中 2 有意向 3 无意中
     */
    follow?: number[]
    /**
     * 线索来源Code 0.搜索推广,1.信息流推广,2.展会,3.智能搜客,4.客户介绍,5.代理商,6.其他,7保险平台
     */
    leadSource?: number[]
    /**
     * 条件组sql
     */
    sql?: string
    /**
     * 剩余保有开始时间
     */
    minRetainStartDay?: number
    /**
     * 剩余保有结束时间
     */
    minRetainEndDay?: number
    /**
     * 客户意向商品
     */
    intendedCommodity?: string
    /**
     * 选中记录ID
     */
    ids?: string[]
    /**
     * 导出属性
     */
    exportFilds?: string[]
    customSqlSegment?: string
    /**
     * 标签查询类型
     */
    tagQueryType?: string
    /**
     * 线索ID
     */
    id?: string
    /**
     * 线索ID所在rownum
     */
    rowNum?: number
    /**
     * 原始来源
     */
    originalSource?: number[]
    /**
     * 我的下属
     */
    mySubordinates?: number[]
    /**
     * 营销标签
     */
    marketingLabels?: string[]
    mobiles?: string[]
    /**
     * 池子id
     */
    adminPoolIds?: string[]
    /**
     * 是否包含关联微信为空的数据
     */
    wxIdNull?: boolean
    /**
     * 身份证号
     */
    idCard?: string
    /**
     * 身份称谓
     */
    nameTitle?: string
}
export interface IResapi13567 {
    code: number
    data: {}
    msg: string
}

export const currentUrl = getCurrentUrl(124, '/customLatent/myClueList')

export default (
    data?: IReqapi13567,
    extendConfig?: ExtendConfig
): Promise<IResapi13567['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
