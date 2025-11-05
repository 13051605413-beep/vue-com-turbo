
    /* eslint-disable */
        // @ts-nocheck
        /**
         * 获取缓存详情
         * https://yapi.yza.cn/project/119/interface/api/26582
        **/

        import getCurrentUrl from '@/utils/getCurrentUrl'
        import { service } from '@/utils/http'

        interface ExtendConfig {
            needShowMessage?: Boolean
            needFullResponse?: Boolean
        }

        /**
 * 参数
 */
export interface IReqapi26582 {
  /**
   * 缓存key
   */
  key?: string;
  /**
   * 内容
   */
  content?: string;
  /**
   * 有效期 （默认1天）
   */
  expireSeconds?: number;
}
        /**
 * cn.yilife.health.common.bean.BaseResult<java.lang.String>
 */
export interface IResapi26582 {
  /**
   * 操作状态码，200:成功，500:失败
   */
  status: number;
  /**
   * 提示信息，{操作成功|操作失败}
   */
  message: string;
  /**
   * 业务数据
   */
  data: string;
}

        export const currentUrl = getCurrentUrl(119, '/marketingMaterialLib/cache/detail')

        export default (data?: IReqapi26582, extendConfig?: ExtendConfig): Promise<IResapi26582['data']> => service({
            method: 'POST',
            url: currentUrl,
            data: data,
            extendConfig
        })
    