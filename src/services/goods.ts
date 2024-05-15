import type { GoodsResult } from '@/types/goods'
import { https } from '@/utils/https'
/**
 * 商品详情
 * @param id 商品id
 */
export const getGoodsByIdAPI = (id: string) => {
  return https<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
