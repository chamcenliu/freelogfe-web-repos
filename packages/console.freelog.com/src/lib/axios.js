/**
 * https://github.com/axios/axios
 * https://github.com/superman66/vue-axios-github
 */
// cors bug :https://github.com/axios/axios/issues/891

import { axiosInstance } from '@freelog/freelog-common-lib'
import store from '@/store'
import { gotoLogin } from './utils'
import i18n from './i18n'

axiosInstance.interceptors.request.use(
  (config) => {
    if (store.getters.session && store.getters.session.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = store.getters.session.token
    }

    return config
  },
  err => Promise.reject(err)
)


axiosInstance.interceptors.response.use(
  (response) => {
    let errorMsg
    const data = response.data

    if ([28, 30].indexOf(data.errcode) > -1) {
      // 清除已过期cookie
      store.dispatch('userLogout').then(() => {
        gotoLogin(window.location.href)
      })
      // replace执行存在延迟
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(response)
        }, 5e2)
      })
    } else if (response.status === 200 && (!data.ret || data.ret === 0)) {
      response.getData = () => {
        if (('errcode' in data) && data.errcode !== 0) {
          throw new Error(data)
        }
        return data.data || data
      }
      return response
    }
    switch (response.status) {
      case 401:
        errorMsg = i18n.t('axios.unAuthError')
        break
      case 404:
        errorMsg = i18n.t('axios.forbidden')
        break
      case 500:
        errorMsg = i18n.t('axios.internalError')
        break
      default:
        errorMsg = data.msg
    }

    response.errorMsg = errorMsg
    return Promise.reject({ response }) //eslint-disable-line
  },
  (err) => {
    err.response = err.response || {}
    return Promise.reject(err)
  }
)

export default axiosInstance
