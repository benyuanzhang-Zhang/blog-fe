<template>
  <el-container class="layout">
    <el-header class="lk-flex lk-justify-between lk-items-center lk-shadow">
      <div class="logo">ben&nbsp;&nbsp;yuan&nbsp;zhang</div>

      <el-menu :default-active="menu.active" mode="horizontal">
        <el-menu-item
          v-for="item in menu.list"
          :key="item.index"
          :index="item.index"
        >{{ item.name }}</el-menu-item>
      </el-menu>
    </el-header>
    <transition>
      <el-main>
          <router-view />
      </el-main>
    </transition>
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
          { index: '1', name: '推荐' },
          { index: '2', name: '归档' }
        ]
      }
    }
  }
}
</script>
