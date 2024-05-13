import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 使用成员存储模块
const memberStore = useMemberStore()
// 尝试获取用户token
const token = memberStore.profile?.token

// 定义http请求拦截器
const httpInterceptor = {
  /**
   * 拦截请求配置
   * @param optins UniApp的请求选项
   */
  invoke(optins: UniApp.RequestOptions) {
    // 如果请求url不是以'/http'开头，添加基础url
    if (!optins.url.startsWith('/http')) {
      optins.url = baseURL + optins.url
    }
    // 设置请求超时时间
    optins.timeout = 10000
    // 设置请求头信息
    optins.header = {
      ...optins.header,
      'source-client': 'miniapp', // 标识请求来源为miniapp
    }

    // 如果存在token，添加到请求头的Authorization字段
    if (token) {
      optins.header.Authorization = token
    }
  },
}

// 注册全局请求拦截器
uni.addInterceptor('request', httpInterceptor)

// 注册全局上传文件请求拦截器
uni.addInterceptor('uploadFile', httpInterceptor)
