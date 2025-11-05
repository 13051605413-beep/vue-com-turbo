
    /* eslint-disable */
        // @ts-nocheck
        /**
         * 新增AI任务规则
         * https://yapi.yza.cn/project/119/interface/api/60071
        **/

        import getCurrentUrl from '@/utils/getCurrentUrl'
        import { service } from '@/utils/http'

        interface ExtendConfig {
            needShowMessage?: Boolean
            needFullResponse?: Boolean
        }

        export interface IReqapi60071 {
  /**
   * 租户ID
   */
  tenantId?: number;
  /**
   * 规则名称
   */
  name?: string;
  /**
   * 状态：0禁用 1启用
   */
  status?: number;
  /**
   * AI提示词
   */
  aiPrompt?: string;
  /**
   * 规则描述
   */
  description?: string;
  /**
   * 创建人ID
   */
  createUserId?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 标签列表
   */
  tagList?: {
    /**
     * 规则ID
     */
    ruleId?: number;
    /**
     * 标签ID
     */
    tagId?: number;
    /**
     * 标签名称
     */
    tagName?: string;
  }[];
  /**
   * 关联信息
   */
  relateList?: {
    /**
     * 规则ID
     */
    ruleId?: number;
    /**
     * 关联类型（1：AI 销售配置）
     */
    relateType?: number;
    /**
     * 业务 id
     */
    relateBusinessId?: string;
    /**
     * 关联业务 id
     */
    relateBusinessName?: string;
  }[];
}
        export interface IResapi60071 {
  status: number;
  message: string;
  data: boolean;
}

        export const currentUrl = getCurrentUrl(119, '/taskAiRule/insertTaskAiRule')

        export default (data?: IReqapi60071, extendConfig?: ExtendConfig): Promise<IResapi60071['data']> => service({
            method: 'POST',
            url: currentUrl,
            data: data,
            extendConfig
        })
    