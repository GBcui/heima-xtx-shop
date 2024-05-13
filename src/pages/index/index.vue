<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { getHomeBannerApi, getHomeCategoryAPI, getHotPanelAPI } from '@/services/home'
import CustomNavbar from './componets/CustomNavbar.vue'
import CategoryPanel from './componets/CategoryPanel.vue'
import HotPanel from './componets/HotPanel.vue'
import type { Guessintance } from '@/types/component'

onLoad(() => {
  getHomeBanner()
  getHomeCategory()
  getHomeHotPanel()
})
const list = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerApi()
  list.value = res.result
}
const categoryList = ref<CategoryItem[]>([])
const getHomeCategory = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
const hotList = ref<HotItem[]>([])
const getHomeHotPanel = async () => {
  const res = await getHotPanelAPI()
  hotList.value = res.result
}
const GuessRef = ref<Guessintance>()
const onScrolltolower = () => {
  GuessRef.value?.getGuessLike()
}
</script>

<template>
  <CustomNavbar />
  <scroll-view scroll-y class="scrollView" @scrolltolower="onScrolltolower">
    <XtxSwiper :list="list" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList"></HotPanel>
    <XtxGuess ref="GuessRef"></XtxGuess>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scrollView {
  flex: 1;
}
</style>
