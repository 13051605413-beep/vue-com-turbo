import { Interface, IOutPut, ServerConfig } from 'yapi-magic'
import apiIdUsing from './src/api-id-using'
interface yapiBaseInfoInter {
    yapiBaseInfo: {
        req_headers: any
        tag: any
        project_id: number
        _id: number
    }
}

const serverUrl = 'https://yapi.yza.cn'

const setPayloadName = (method: string): string => {
    let str = ''
    const dataMethod = ['POST', 'post', 'PUT', 'put']
    const paramsMethod = ['GET', 'get', 'DELETE', 'delete']
    if (dataMethod.includes(method)) {
        str = 'data'
    }

    if (paramsMethod.includes(method)) {
        str = 'params'
    }

    return str
}

// 服务端返回数据不规范，都是非必须，这里将所有response的?: 改成必定返回
const generateApiFileCode = (projectId: string) => (api: Interface & IOutPut & yapiBaseInfoInter) => {
    const str = `
    /* eslint-disable */
        // @ts-nocheck
        /**
         * ${api.title}
         * ${serverUrl}/project/${projectId}/interface/api/${api.id}
        **/

        import getCurrentUrl from '@/utils/getCurrentUrl'
        import { service } from '@/utils/http'

        interface ExtendConfig {
            needShowMessage?: Boolean
            needFullResponse?: Boolean
        }

        ${api.requestInterface}
        ${api.responseInterface.replace(/\?:/g, ':')}

        export const currentUrl = getCurrentUrl(${projectId}, '${api.path}')

        export default (data?: ${api.reqInterfaceName}, extendConfig?: ExtendConfig): Promise<${
        api.resInterfaceName
    }['data']> => service({
            method: '${api.method}',
            url: currentUrl,
            ${setPayloadName(api.method)}: data,
            extendConfig
        })
    `
    return str
}

const genProject = (projectId: string): ServerConfig => {
    return {
        changelog: false,
        generateUpdateJson: false,
        target: 'ts',
        notCheckGit: true,
        serverUrl,
        outputFilePath: `src/apis`,
        generateIndexFile: false,
        projectId,
        generateApiName: (_path, _id) => {
            return `api${_id}`
        },
        customizeFilter: (api, { currentGitBranch }) => {
            // @ts-ignore
            const {
                yapiBaseInfo: { tag, project_id, _id },
            } = api as Interface & IOutPut & yapiBaseInfoInter
            const usingIds = (apiIdUsing.find((item) => item.projectId === project_id) || {}).ids || []
            return (tag || []).includes(currentGitBranch) || usingIds.includes(_id)
            // return true
        },
        // @ts-ignore
        generateApiFileCode: generateApiFileCode(projectId),
    }
}

const configs = [
    // genProject('29'),
    // genProject('59'),
    // genProject('71'),
    // genProject('35'),
    // genProject('53'),
    // genProject('47'),
    // genProject('111'),
    // genProject('117'),
    // genProject('246'),
    // genProject('132'),
    // genProject('267'),
    // genProject('136'),
    // genProject('287'),
    genProject('119'),
    // genProject('272'),
    // genProject('254'),
    // genProject('124'),
]
module.exports = configs
