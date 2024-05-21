import type { OrderPreResult } from '@/types/order'
import { https } from '@/utils/https'
/**
 * 填写订单-获取预付订单
 */
export const getMemberOrderPreAPI = () => {
  return https<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return https<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}
