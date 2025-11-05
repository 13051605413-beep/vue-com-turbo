
    /* eslint-disable */
        // @ts-nocheck
        /**
         * 查询AI任务规则列表（不分页）
         * https://yapi.yza.cn/project/119/interface/api/60101
        **/

        import getCurrentUrl from '@/utils/getCurrentUrl'
        import { service } from '@/utils/http'

        interface ExtendConfig {
            needShowMessage?: Boolean
            needFullResponse?: Boolean
        }

        export interface IReqapi60101 {
  pageIndex?: number;
  pageSize?: number;
  sorts?: {
    field?: string;
    type?: string;
  }[];
  /**
   * 主键ID
   */
  id?: number;
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
   * 创建人ID
   */
  createUserId?: number;
  /**
   * 创建时间开始
   */
  createTimeStart?: string;
  /**
   * 创建时间结束
   */
  createTimeEnd?: string;
  /**
   * 标签 id
   */
  tagId?: number;
  /**
   * 标签 ids
   */
  tagIds?: number[];
  /**
   * 关联类型
   */
  relateType?: number;
  /**
   * 关联业务 id
   */
  relateBusinessId?: string;
  /**
   * 关联业务 ids
   */
  relateBusinessIds?: string[];
}
        export interface IResapi60101 {
  status: number;
  message: string;
  data: {
    /**
     * 主键ID
     */
    id: number;
    /**
     * 租户ID
     */
    tenantId: number;
    /**
     * 规则名称
     */
    name: string;
    /**
     * 状态：0禁用 1启用
     */
    status: number;
    /**
     * AI提示词
     */
    aiPrompt: string;
    /**
     * 规则描述
     */
    description: string;
    /**
     * 创建人ID
     */
    createUserId: number;
    /**
     * 创建人名称
     */
    createUserName: string;
    /**
     * 备注
     */
    remark: string;
    /**
     * 创建时间
     */
    gmtCreate: string;
    /**
     * 修改时间
     */
    gmtModified: string;
    /**
     * 标签列表
     */
    tagList: {
      /**
       * 规则ID
       */
      ruleId: number;
      /**
       * 标签ID
       */
      tagId: number;
      /**
       * 标签名称
       */
      tagName: string;
    }[];
    /**
     * 关联信息
     */
    relateList: {
      /**
       * 规则ID
       */
      ruleId: number;
      /**
       * 关联类型（1：AI 销售配置）
       */
      relateType: number;
      /**
       * 业务 id
       */
      relateBusinessId: string;
      /**
       * 关联业务 id
       */
      relateBusinessName: string;
      /**
       * 关联业务类型
       */
      relateBusinessType: string;
    }[];
  }[];
}

        export const currentUrl = getCurrentUrl(119, '/taskAiRule/findTaskAiRuleList')

        export default (data?: IReqapi60101, extendConfig?: ExtendConfig): Promise<IResapi60101['data']> => service({
            method: 'POST',
            url: currentUrl,
            data: data,
            extendConfig
        })
    