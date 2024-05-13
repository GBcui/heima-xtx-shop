import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
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

// services/home.ts
/**
 * 首页-前台分类-小程序
 */
export const getHomeCategoryAPI = () => {
  return https<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
/**
 * 首页-热门推荐-小程序
 */
export const getHotPanelAPI = () => {
  return https<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
