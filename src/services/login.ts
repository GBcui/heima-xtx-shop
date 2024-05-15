import { https } from '@/utils/https'

type loginParms = {
  code: string
  encryptedData: string
  iv: string
}

export type loginRes = {
  account: string
  avatar: string
  id: string
  mobile: string
  nickname: string
  token: string
}
export const postLoginWXMin = (data: loginParms) => {
  return https<loginRes>({
    url: '/login/wxMin',
    data,
    method: 'POST',
  })
}
type simpleLoginParms = {
  cphoneNumberode: string
}
export const postSimpleLoginWXMin = (phoneNumber: string) => {
  return https<loginRes>(
    {
      url: '/login/wxMin/simple',
      data: {
        phoneNumber,
      },
      method: 'POST',
    },
    {
      successMsg: '登录成功',
    },
  )
}
