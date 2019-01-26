import request from '@/utils/request'

export function addplan(plan) {
  console.log(plan)
  return request({
    url: '/addplan',
    method: 'post',
    data: plan,
    dataType: 'json'
  })
}

export function planview(planid) {
  return request({
    url: '/viewplan',
    method: 'get',
    params: {
      id: planid
    }
  })
}

export function planlist() {
  return request({
    url: '/planlist',
    method: 'post'
  })
}

export function delplan(planid) {
  return request({
    url: '/delplan',
    method: 'get',
    params: {
      id: planid
    }
  })
}

export function editplan(planid) {
  return request({
    url: '/editplan',
    method: 'get',
    params: {
      id: planid
    }
  })
}
