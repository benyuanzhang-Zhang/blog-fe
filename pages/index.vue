<template>
  <div class="container">
    123
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  async asyncData ({ $axios, error }: Context) {
    try {
      const { data } = await $axios.post('http://dz.hngqyun.cn/api/rtdb/st_rsvr_r/dp/rsvr_list')
      return {
        data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'server error'
      })
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
}
</style>
