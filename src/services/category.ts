import type { CategoryTopItem } from '@/types/category'
import { https } from '@/utils/https'
/**
 * 获取分类列表数据
 */
/**
 * 分类列表-小程序
 */
export const getCategoryTopAPI = () => {
  return https<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
