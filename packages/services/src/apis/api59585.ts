
    /* eslint-disable */
        // @ts-nocheck
        /**
         * 分页查询企微账号列表
         * https://yapi.yza.cn/project/119/interface/api/59585
        **/

        import getCurrentUrl from '@/utils/getCurrentUrl'
        import { service } from '@/utils/http'

        interface ExtendConfig {
            needShowMessage?: Boolean
            needFullResponse?: Boolean
        }

        export interface IReqapi59585 {
  pageIndex?: number;
  pageSize?: number;
  sorts?: {
    field?: string;
    type?: string;
  }[];
  /**
   * 企微名称
   */
  qywxName?: string;
  /**
   * 企微账号
   */
  qywxAccount?: string;
  /**
   * 绑定手机号
   */
  bindPhone?: string;
  /**
   * 微信名称
   */
  wechatName?: string;
  /**
   * 微信号
   */
  wechatNumber?: string;
  /**
   * 会话存档状态（1=关闭，2=开启）
   */
  hhcdStatus?: number;
  /**
   * 关联的AI账号
   */
  relateAiAccount?: number;
  /**
   * 状态（1正常/0停用）
   */
  status?: number;
  /**
   * 租户ID
   */
  tenantId?: number;
}
        export interface IResapi59585 {
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
       * 企微名称
       */
      qywxName: string;
      /**
       * 企微账号
       */
      qywxAccount: string;
      /**
       * 绑定手机号
       */
      bindPhone: string;
      /**
       * 微信名称（可选）
       */
      wechatName: string;
      /**
       * 微信号（可选）
       */
      wechatNumber: string;
      /**
       * 会话存档状态（1=关闭，2=开启）
       */
      hhcdStatus: number;
      /**
       * 关联的AI账号，用来确定使用哪个机器人
       */
      relateAiAccount: number;
      /**
       * 关联AI账号信息
       */
      relateAiAccountInfo: {
        /**
         * 关联的AI账号，用来确定使用哪个机器人
         */
        relateAiAccount: number;
        /**
         * 手机imei
         */
        imei: string;
        /**
         * 手机号
         */
        phone: string;
        /**
         * 机器人id
         */
        robotId: string;
      };
      /**
       * 状态（1正常/0停用）
       */
      status: number;
      /**
       * 备注
       */
      remark: string;
      /**
       * 创建时间
       */
      createTime: string;
      /**
       * 更新时间
       */
      updateTime: string;
      /**
       * 激活状态: 0=不存在 1=已激活，2=已禁用，4=未激活，5=退出企业。已激活代表已激活企业微信或已关注微信插件（原企业号）。未激活代表既未激活企业微信又未关注微信插件（原企业号）。
       */
      qywxStatus: number;
      /**
       * 审批状态：1-审批中，2-已通过，3-已拒绝，4-已取消
       */
      approveStatus: number;
      /**
       * 上次邀请时间
       */
      lastInviteTime: string;
      /**
       * 邀请时间间隔(秒)
       */
      inviteDiffTime: number;
    }[];
  };
}

        export const currentUrl = getCurrentUrl(119, '/marketingQywxAccount/findMarketingQywxAccountPage')

        export default (data?: IReqapi59585, extendConfig?: ExtendConfig): Promise<IResapi59585['data']> => service({
            method: 'POST',
            url: currentUrl,
            data: data,
            extendConfig
        })
    