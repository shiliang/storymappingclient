import request from '@/utils/request'

export function login(username, password) {
  const formData = new FormData()
  formData.append('username', username)
  formData.append('password', password)
  return request({
    url: '/login',
    method: 'post',
    data: formData
  })
}

export function register(username, password) {
  const formData = new FormData()
  formData.append('username', username)
  formData.append('password', password)
  return request({
    url: '/register',
    method: 'post',
    data: formData
  })
}

export function getInfo(token) {
  // const formData = new FormData()
  // formData.append('token', token)
  return request({
    url: '/userinfo',
    method: 'get',
    params: {
      token: token
    }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
