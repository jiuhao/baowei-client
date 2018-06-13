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
