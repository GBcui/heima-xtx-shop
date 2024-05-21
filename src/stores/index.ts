import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

// 创建 pinia 实例
const pinia = createPinia()
// 使用持久化存储插件
pinia.use(persist)

// 默认导出，给 main.ts 使用
export default pinia

// import useUserStore from './user'
// import useCounterStore from './counter'

// // 统一导出useStore方法
// export default function useStore() {
//   return {
//     user: useUserStore(),
//     counter: useCounterStore(),
//   }
// }

// 模块统一导出
export * from './modules/member'
export * from './modules/address'
