<template>
  <el-container>
    <el-header>
      <the-header />
    </el-header>
    <el-main>
      <Nuxt />
    </el-main>
    <el-footer>
      footer
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import TheHeader from '@/components/layouts/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>
