
    /* eslint-disable */
        // @ts-nocheck
        /**
         * 新增短链分享（v2）
         * https://yapi.yza.cn/project/119/interface/api/36349
        **/

        import getCurrentUrl from '@/utils/getCurrentUrl'
        import { service } from '@/utils/http'

        interface ExtendConfig {
            needShowMessage?: Boolean
            needFullResponse?: Boolean
        }

        export interface IReqapi36349 {
  /**
   * 名称
   */
  title: string;
  /**
   * 租户id
   */
  orgId: number;
  /**
   * 跳转方式 ： 1.h5 可通过外部浏览器访问  2.公众号中间页 仅微信环境可打开
   */
  jumpType: number;
  /**
   * 用户id 不传默认为 0
   */
  userId?: number;
  /**
   * h5 路径
   */
  url?: string;
  /**
   * 小程序页面路径 只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~%` 不支持中文，若有则请选择urlEncode处理
   */
  appletPath?: string;
  /**
   * 是否需要encode处理（设置为true时需要前端手动decode）
   */
  needUrlEncode?: boolean;
  /**
   * 小程序id
   */
  appId?: string;
  /**
   * 业务类型 透传字段
   * 内置类型 ：
   * normal_long_link : 外部web普通长链 （纯跳转，不统计链路）
   * internal_normal_link : 内部web普通长链（纯跳转，不统计链路）
   */
  type: string;
  /**
   * 业务id 透传字段（不传默认为：即将生成的短链主键本身）
   */
  businessId?: string;
  /**
   * 链接是否需要拼接字段shortLinkCode 该字段用来标记是否是源头分享
   */
  needShortLinkCode?: boolean;
  /**
   * 链接是否需要拼接字段shareUserId
   */
  needShareUserId?: boolean;
  /**
   * 链接是否需要拼接字段orgId和tenantId
   */
  needOrgId?: boolean;
  /**
   * 链接是否预创建
   */
  prebuilt?: number;
  /**
   * 营销渠道
   */
  marketingChannel?: string;
  /**
   * 营销场景
   */
  marketingScene?: string;
  /**
   * 透传参数，该参数中的值会拼接在链接后面
   */
  extParams?: {
    key?: string;
  };
  /**
   * 父压缩码 用来串联分享链路 （不传则视为第一次分享）
   */
  parentCode?: string;
  /**
   * 是否需要生成二维码，2024-12-27新增字段，原业务默认都是会生成二维码，所以这里默认为true
   */
  needQrcode?: boolean;
}
        /**
 * cn.yilife.health.common.bean.BaseResult<cn.yilife.health.vo.MarketingShortLinkInsertVO>
 */
export interface IResapi36349 {
  status: number;
  message: string;
  data: {
    /**
     * 主键
     */
    id: number;
    /**
     * 名称
     */
    title: string;
    /**
     * 长链接地址
     */
    longLinkUrl: string;
    /**
     * 短链接地址
     */
    shortLinkUrl: string;
    /**
     * 短链压缩码
     */
    compressionCode: string;
    /**
     * 二维码
     */
    qrcode: string;
  };
}

        export const currentUrl = getCurrentUrl(119, '/marketingShortLink/insertmarketingShortLinkV2')

        export default (data?: IReqapi36349, extendConfig?: ExtendConfig): Promise<IResapi36349['data']> => service({
            method: 'POST',
            url: currentUrl,
            data: data,
            extendConfig
        })
    