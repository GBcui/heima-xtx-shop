import type { BannerItem } from '@/types/home'
import { https } from '@/utils/https'

/**
 *
 * @param distributionSite 广告区域展示位置1 为首页（默认值）2 为商品分类页
 * @returns
 */
export const getHomeBannerApi = (distributionSite = 1) => {
  return https<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}
