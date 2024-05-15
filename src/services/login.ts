import { https } from '@/utils/https'

type loginParms = {
  code: string
  encryptedData: string
  iv: string
}

type loginRes = {
  token: string
  userInfo: {
    id: string
    nickName: string
    avatarUrl: string
    gender: number
    city: string
    country: string
    province: string
  }
}
export const postLoginWXMin = (data: loginParms) => {
  return https({
    url: '/login/wxMin',
    data,
    method: 'POST',
  })
}
type simpleLoginParms = {
  cphoneNumberode: string
}
export const postSimpleLoginWXMin = (phoneNumber: string) => {
  return https(
    {
      url: '/login/wxMin/simple',
      data: {
        phoneNumber,
      },
      method: 'POST',
    },
    {
      successShowToast: true,
    },
  )
}
