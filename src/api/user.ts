// import type {} from '@/api/model/userModel';
import { request } from '@/utils/request';

const Api = {
  Captcha: '/user/captcha',
  Login: '/user/login',
  UserInfo: '/user/my-info',
};

export function getCaptcha() {
  return request.get<any>(
    {
      url: Api.Captcha,
      responseType: 'blob',
    },
    {
      isTransformResponse: false,
    },
  );
}

export function getLogin(userInfo: Record<string, unknown>) {
  return request.get<any>({
    url: `${Api.Login}/${userInfo.account}/${userInfo.password}/${userInfo.captcha}`,
  });
}

export function getUserInfo() {
  return request.get<any>({
    url: Api.UserInfo,
  });
}
