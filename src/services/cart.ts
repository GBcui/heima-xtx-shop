import { https } from '@/utils/https'
/**
 * 加入购物车
 * @param data 请求体参数
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return https({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}
