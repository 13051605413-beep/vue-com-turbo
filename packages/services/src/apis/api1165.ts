/* eslint-disable */
// @ts-nocheck
/**
 * 新增机构排班班次
 * https://yapi.yza.cn/project/59/interface/api/1165
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

export interface IReqapi1165 {
    /**
     * 组织id
     */
    orgId: number
    /**
     * 医院id
     */
    hospitalId: number
    /**
     * 班次名字
     */
    dutyName: string
    /**
     * 班次开始时间 08:00
     */
    dutyBeginTime?: string
    /**
     * 班次结束时间 12:00
     */
    dutyEndTime?: string
    /**
     * 班次开始时间(分钟数)
     */
    dutyBeginMinute?: number
    /**
     * 班次结束时间(分钟数)
     */
    dutyEndMinute?: number
    /**
     * 是否跨天 0否 1是
     */
    crossDay?: number
    /**
     * '班次类型（0:照护师/订单制，1:常规制,2:班级制）
     */
    dutyType?: number
}
export interface IResapi1165 {
    status: number
    message: string
    data: number
}

export const currentUrl = getCurrentUrl(59, '/orgAdmin/dutyinfo/insertDutyInfo')

export default (
    data?: IReqapi1165,
    extendConfig?: ExtendConfig
): Promise<IResapi1165['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
