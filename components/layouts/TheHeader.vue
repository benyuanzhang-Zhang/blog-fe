<template>
  <el-header class="yz-flex yz-flex-space-between">
    <nuxt-link to="/" tag="img" class="yz-pointer" src="/logo.png" />
    <el-menu :default-active="activeIndex" mode="horizontal" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/article">文章</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts">
export default {
  name: "TheHeader",
  data() {
    return {
      activeIndex: '/'
    }
  }
}
</script>
