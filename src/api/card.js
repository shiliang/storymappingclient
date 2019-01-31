import request from '@/utils/request'

export function addcard(card) {
  console.log(card)
  return request({
    url: '/addcard',
    method: 'post',
    data: card,
    dataType: 'json'
  })
}

export function cardview(cardid) {
  return request({
    url: '/viewcard',
    method: 'get',
    params: {
      id: cardid
    }
  })
}

export function cardlist() {
  return request({
    url: '/cardlist',
    method: 'post'
  })
}

export function cardlistByType(type) {
  return request({
    url: '/cardlist',
    method: 'get',
    params: {
      type: type
    }
  })
}

export function cardlistbydate() {
  return request({
    url: '/cardlistbydate',
    method: 'post'
  })
}

export function delcard(cardid) {
  return request({
    url: '/delcard',
    method: 'get',
    params: {
      id: cardid
    }
  })
}

export function editcard(cardid) {
  return request({
    url: '/editcard',
    method: 'get',
    params: {
      id: cardid
    }
  })
}

export function cardInchargeList(userId) {
  return request({
    url: '/getCardIncharge',
    method: 'get',
    params: {
      id: userId
    }
  })
}
