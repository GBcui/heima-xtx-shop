import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 使用成员存储模块
const memberStore = useMemberStore()
// 尝试获取用户token
const token = memberStore.profile?.token
interface httpConfig {
  //是否显示成功提示msg
  successShowToast?: boolean
  //指定成功提示词
  successMsg?: string
}

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
interface Data<T> {
  code: number
  msg: string
  result: T
}

// 定义https响应拦截器
const httpsInterceptor = <T>(optins: UniApp.RequestOptions, config?: httpConfig) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...optins,
      success(res) {
        // 响应成功
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 响应成功，将数据返回
          resolve(res.data as Data<T>)
          if (config?.successShowToast || !!config?.successMsg) {
            uni.showToast({
              icon: 'none',
              title: config?.successMsg || (res.data as Data<T>).msg,
            })
          }
        } else if (res.statusCode === 401) {
          memberStore.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login',
          })
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求失败',
            icon: 'none',
          })
        }
      },
      fail(err) {
        uni.showToast({
          title: '网络错误,请换一个网络试试',
          icon: 'none',
        })
        // 响应失败
        reject(err)
      },
    })
  })
}

export { httpsInterceptor as https }
