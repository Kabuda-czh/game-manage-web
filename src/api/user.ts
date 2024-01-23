// import type {} from '@/api/model/userModel';
import { request } from '@/utils/request';

const Api = {
  Captcha: '/user/captcha',
  Login: '/user/login',
  MyInfo: '/user/my-info',
  Logout: '/user/logout',
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
  return request.get<string>({
    url: `${Api.Login}/${userInfo.account}/${userInfo.password}/${userInfo.captcha}`,
  });
}

export function getMyInfo() {
  return request.get<any>({
    url: Api.MyInfo,
  });
}

export function getLogout() {
  return request.get<any>({
    url: Api.Logout,
  });
}
