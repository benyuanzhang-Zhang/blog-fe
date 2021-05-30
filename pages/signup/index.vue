<template>
  <div>
    <el-form ref="form" :model="user" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="user.login_name" placeholder="用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.login_password" type="password" placeholder="密码" />
      </el-form-item>
      <el-button type="primary" @click="signup">
        注册
      </el-button>
    </el-form>
  </div>
</template>

<script>
import { signup } from '~/services/UsersService'
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
    async signup() {
      const a = await signup(this.user)
      console.log(a)
    }
  }
}
</script>
