import request from '@/utils/request'

export function getHome (data) {
  return request({
    url: '/home/publish/get',
    method: 'get'
  })
}
