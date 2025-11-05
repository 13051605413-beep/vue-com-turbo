
    /* eslint-disable */
        // @ts-nocheck
        /**
         * 查询渠道码列表
         * https://yapi.yza.cn/project/119/interface/api/22919
        **/

        import getCurrentUrl from '@/utils/getCurrentUrl'
        import { service } from '@/utils/http'

        interface ExtendConfig {
            needShowMessage?: Boolean
            needFullResponse?: Boolean
        }

        export interface IReqapi22919 {
  pageIndex?: number;
  pageSize?: number;
  sorts?: {
    field?: string;
    type?: string;
  }[];
  orgId?: number;
  name?: string;
  code?: string;
  channelType?: number;
  codes?: string[];
}
        export interface IResapi22919 {
  status: number;
  message: string;
  data: {
    pageIndex: number;
    pageSize: number;
    total: number;
    data: {
      /**
       * 主键
       */
      id: number;
      /**
       * 渠道id
       */
      code: string;
      /**
       * 渠道名称
       */
      name: string;
      /**
       * 创建用户id
       */
      createUserId: number;
      /**
       * 创建用户名称
       */
      createUserName: string;
      /**
       * 更新用户id
       */
      updateUserId: number;
      /**
       * 更新用户名
       */
      updateUserName: string;
      /**
       * 创建时间
       */
      gmtCreate: string;
      /**
       * 修改时间
       */
      gmtModified: string;
      /**
       * 租户id
       */
      tenantId: number;
      channelType: number;
    }[];
  };
}

        export const currentUrl = getCurrentUrl(119, '/marketingChannel/findmarketingChannelPage')

        export default (data?: IReqapi22919, extendConfig?: ExtendConfig): Promise<IResapi22919['data']> => service({
            method: 'POST',
            url: currentUrl,
            data: data,
            extendConfig
        })
    