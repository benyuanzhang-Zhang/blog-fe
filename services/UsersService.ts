import { $axios } from '@/utils/request'

export function login(data: any) {
  return $axios({
    url: '/api/users/login',
    method: 'post',
    data: {
      body: data,
      timestamp: new Date().valueOf()
    }
  })
}

export function signup(data: any) {
  return $axios({
    url: '/api/users/signup',
    method: 'post',
    data: {
      body: data,
      timestamp: new Date().valueOf()
    }
  })
}
