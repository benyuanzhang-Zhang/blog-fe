import { Context } from '@nuxt/types'
import { AxiosError } from 'axios'
import { initializeAxios } from '~/utils/request'

export default function({ $axios, redirect }: Context) {
  $axios.onError((error: AxiosError) => {
    const code: number = (error.response && error.response.status) ?? 400

    if (code === 400) { redirect('/400') }
  })

  initializeAxios($axios)
}
