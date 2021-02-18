<template>
  <el-container class="layout">
    <el-header class="lk-flex lk-justify-between lk-items-center lk-shadow">
      <div class="logo">ben&nbsp;&nbsp;yuan&nbsp;zhang</div>

      <el-menu :default-active="menu.active" mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <transition>
        <router-view />
      </transition>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'TheLayout',
  data () {
    return {
      menu: {
        active: '1',
        list: [
          { }
        ]
      }
    }
  }
}
</script>
