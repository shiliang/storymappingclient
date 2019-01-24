import request from '@/utils/request'

export function addproject(project) {
  console.log(project)
  return request({
    url: '/addproject',
    method: 'post',
    data: project,
    dataType: 'json'
  })
}

export function projectview(projectid) {
  return request({
    url: '/viewproject',
    method: 'get',
    params: {
      id: projectid
    }
  })
}

export function projectlist() {
  return request({
    url: '/projectlist',
    method: 'post'
  })
}

export function delproject(projectid) {
  return request({
    url: '/delproject',
    method: 'get',
    params: {
      id: projectid
    }
  })
}

export function editproject(projectid) {
  return request({
    url: '/editproject',
    method: 'get',
    params: {
      id: projectid
    }
  })
}
