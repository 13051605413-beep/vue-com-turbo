
    /* eslint-disable */
        // @ts-nocheck
        /**
         * 自动生成提示词
         * https://yapi.yza.cn/project/119/interface/api/60461
        **/

        import getCurrentUrl from '@/utils/getCurrentUrl'
        import { service } from '@/utils/http'

        interface ExtendConfig {
            needShowMessage?: Boolean
            needFullResponse?: Boolean
        }

        export interface IReqapi60461 {
  /**
   * 描述
   */
  desc?: string;
}
        export interface IResapi60461 {
  status: number;
  message: string;
  data: string;
}

        export const currentUrl = getCurrentUrl(119, '/taskAiRule/generatePrompt')

        export default (data?: IReqapi60461, extendConfig?: ExtendConfig): Promise<IResapi60461['data']> => service({
            method: 'POST',
            url: currentUrl,
            data: data,
            extendConfig
        })
    