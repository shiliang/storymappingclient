import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const Id = 'userid'
const ProjectId = 'projectId'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getId() {
  return Cookies.get(Id)
}
export function setId(userid) {
  return Cookies.set(Id, userid)
}
export function removeId() {
  return Cookies.remove(Id)
}

export function getProjectId() {
  return Cookies.get(ProjectId)
}
export function setProjectId(id) {
  return Cookies.set(ProjectId, id)
}
export function removeProjectId() {
  return Cookies.remove(ProjectId)
}

