import type { ProfileDetail, ProfileParams } from '@/types/member'
import { https } from '@/utils/https'

/**
 * 获取个人信息
 */
export const getMemberProfileAPI = () => {
  return https<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

/**
 * 修改个人信息
 * @param data 请求体参数
 */
export const putMemberProfileAPI = (data: ProfileParams) => {
  return https<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
