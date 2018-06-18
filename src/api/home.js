import request from '@/utils/request'

export function getHome (data) {
  return request({
    url: '/home/publish/get',
    method: 'get'
  })
}
export function getBlock (data) {
  return request({
    url: '/home/block',
    method: 'get'
  })
}
export function getFileBlock (data) {
  return request({
    url: '/file/block/get',
    method: 'get'
  })
}
export function listBlockBanner (data) {
  return request({
    url: '/banner/block/list',
    method: 'get'
  })
}
export function loadArticle (data) {
  return request({
    url: '/article/load',
    method: 'post',
    data: data
  })
}
export function listArticle (data) {
  return request({
    url: '/article/list',
    method: 'post',
    data: data
  })
}
export function listFile (data) {
  return request({
    url: '/file/list',
    method: 'post',
    data: data
  })
}
export function submitMessage (data) {
  return request({
    url: '/message/add',
    method: 'post',
    data: data
  })
}
