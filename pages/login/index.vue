<template>
  <div>
    <el-form ref="form" :model="user" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="user.login_name" placeholder="用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.login_password" placeholder="密码" />
      </el-form-item>
      <el-button type="primary" @click="login">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
import { login } from '~/services/UsersService'
export default {
  name: 'Index',
  data() {
    return {
      user: {
        login_name: '',
        login_password: ''
      }
    }
  },
  methods: {
    async login() {
      const a = await login(this.user)
      console.log(a)
    }
  }
}
</script>
