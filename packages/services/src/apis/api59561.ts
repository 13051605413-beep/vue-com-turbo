
    /* eslint-disable */
        // @ts-nocheck
        /**
         * 修改企微账号
         * https://yapi.yza.cn/project/119/interface/api/59561
        **/

        import getCurrentUrl from '@/utils/getCurrentUrl'
        import { service } from '@/utils/http'

        interface ExtendConfig {
            needShowMessage?: Boolean
            needFullResponse?: Boolean
        }

        export interface IReqapi59561 {
  /**
   * 主键
   */
  id?: number;
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
   * 微信名称（可选）
   */
  wechatName?: string;
  /**
   * 微信号（可选）
   */
  wechatNumber?: string;
  /**
   * 会话存档状态（1=关闭，2=开启）
   */
  hhcdStatus?: number;
  /**
   * 关联的AI账号，用来确定使用哪个机器人
   */
  relateAiAccount?: number;
  /**
   * 状态（1正常/0停用）
   */
  status?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 租户ID
   */
  tenantId?: number;
}
        export interface IResapi59561 {
  status: number;
  message: string;
  data: boolean;
}

        export const currentUrl = getCurrentUrl(119, '/marketingQywxAccount/updateMarketingQywxAccount')

        export default (data?: IReqapi59561, extendConfig?: ExtendConfig): Promise<IResapi59561['data']> => service({
            method: 'POST',
            url: currentUrl,
            data: data,
            extendConfig
        })
    