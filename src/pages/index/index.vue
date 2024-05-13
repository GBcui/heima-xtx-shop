<script setup lang="ts">
import { ref } from 'vue'
import { getHomeBannerApi } from '@/services/home'
import CustomNavbar from './componets/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from '@/types/home'

onLoad(() => {
  getHomeBanner()
})
const list = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerApi()
  list.value = res.result
}
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="list" />
  <view>111</view>
</template>

<style lang="scss">
//
</style>
