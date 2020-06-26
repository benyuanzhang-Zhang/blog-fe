<template>
  <el-container class="layout">
    <el-header flex="main: justify cross: center">
      <div class="logo" flex="">byz</div>
    </el-header>
    <transition>
      <router-view />
    </transition>
  </el-container>
</template>

<script>
export default {
  name: 'TheLayout',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.layout {}
</style>
