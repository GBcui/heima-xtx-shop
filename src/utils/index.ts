// 防抖
// 不管怎么点击，只在500毫秒后触发事件，500毫秒内点击也要等到500毫秒后再触发事件
export const debounce = (fn: Function, delay: number = 500) => {
  let timer: number | null = null
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
