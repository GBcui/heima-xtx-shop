import type { Guessintance } from '@/types/component'
import { ref } from 'vue'

export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<Guessintance>()
  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrolltolower,
  }
}
