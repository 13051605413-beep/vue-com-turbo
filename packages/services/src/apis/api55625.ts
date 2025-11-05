/* eslint-disable */
// @ts-nocheck
/**
 * 根据参数查询微信列表
 * https://yapi.yza.cn/project/124/interface/api/55625
 **/

import getCurrentUrl from '@/utils/getCurrentUrl'
import { service } from '@/utils/http'

interface ExtendConfig {
    needShowMessage?: Boolean
    needFullResponse?: Boolean
}

export interface IReqapi55625 {
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
     * 微信Id
     */
    wcId?: string
    /**
     * 微信昵称
     */
    wcNickname?: string
    deptId?: string
    userId?: string
    remark?: string
    isBind?: number
    avatar?: string
    /**
     * 微信最后登入设备imei
     */
    deviceImei?: string
}
export interface IResapi55625 {
    status: number
    message: string
    data: {
        id: string
        /**
         * 微信Id
         */
        wcId: string
        /**
         * 微信昵称
         */
        wcNickname: string
        /**
         * 所属员工
         */
        userId: string
        /**
         * 所属员工名称
         */
        userName: string
        /**
         * 部门ID
         */
        deptId: string
        /**
         * 部门名称
         */
        deptName: string
        avatar: string
        /**
         * 好友统计
         */
        friendsCount: number
        /**
         * 好友发送统计
         */
        friendsSendcount: number
        /**
         * 群发统计
         */
        groupSendcount: number
        /**
         * 微信最后登入设备imei
         */
        deviceImei: string
        isBind: number
        /**
         * 备注
         */
        remark: string
        /**
         * 微信在线状态
         */
        status: number
        /**
         * 微信号
         */
        wcNumber: string
        /**
         * 租户id
         */
        tenantId: number
    }[]
}

export const currentUrl = getCurrentUrl(124, '/wkWechat/getListByParam')

export default (
    data?: IReqapi55625,
    extendConfig?: ExtendConfig
): Promise<IResapi55625['data']> =>
    service({
        method: 'POST',
        url: currentUrl,
        data: data,
        extendConfig
    })
