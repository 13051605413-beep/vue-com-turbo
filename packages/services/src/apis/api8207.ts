/* eslint-disable */
// @ts-nocheck
/**
 * 查询机构医院下所有排班班次
 * https://yapi.yza.cn/project/59/interface/api/8207
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

export interface IReqapi8207 {
    orgId?: string | number
    hospitalId?: string | number
    keyword?: string | number
}
export interface IResapi8207 {
    status: number
    message: string
    data: {
        id: number
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
        dutyBeginTime: string
        /**
         * 班次结束时间 12:00
         */
        dutyEndTime: string
        /**
         * 班次开始时间(分钟数)
         */
        dutyBeginMinute: number
        /**
         * 班次结束时间(分钟数)
         */
        dutyEndMinute: number
        /**
         * 是否跨天 0否 1是
         */
        crossDay: number
        /**
         * 是否被使用 0否 1是
         */
        useOrNot: number
        /**
         * '班次类型（0:照护师，1:常规）
         */
        dutyType: number
    }[]
}

export const currentUrl = getCurrentUrl(
    59,
    '/orgAdmin/dutyinfo/findAllDutyInfoByHospitalId'
)

export default (
    data?: IReqapi8207,
    extendConfig?: ExtendConfig
): Promise<IResapi8207['data']> =>
    service({
        method: 'GET',
        url: currentUrl,
        params: data,
        extendConfig
    })
