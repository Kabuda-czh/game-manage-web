import sha256 from 'crypto-js/sha256';
import { defineStore } from 'pinia';

import { getCaptcha, getLogin, getLogout, getMyInfo } from '@/api/user';
import { usePermissionStore } from '@/store';
import type { UserInfo } from '@/types/interface';

const InitUserInfo: UserInfo = {
  name: '', // 用户名，用于展示在页面右上角头像处
  roles: [], // 前端权限模型使用 如果使用请配置modules/permission-fe.ts使用
};

export const useUserStore = defineStore('user', {
  state: () => ({
    token: 'main_token', // 默认token不走权限
    userInfo: { ...InitUserInfo },
  }),
  getters: {
    roles: (state) => {
      return state.userInfo?.roles;
    },
  },
  actions: {
    async login(userInfo: Record<string, unknown>) {
      userInfo.password = sha256(userInfo.password as string).toString();

      const res = await getLogin(userInfo);
      if (res) {
        this.token = 'token';
      } else {
        throw res;
      }
    },
    async getUserInfo() {
      const res = await getMyInfo();
      this.userInfo = res;
    },
    async logout() {
      await getLogout();
      this.token = '';
      this.userInfo = { ...InitUserInfo };
    },
    async getCaptcha() {
      const res = await getCaptcha();
      return res;
    },
  },
  persist: {
    afterRestore: () => {
      const permissionStore = usePermissionStore();
      permissionStore.initRoutes();
    },
    key: 'user',
    paths: ['token'],
  },
});
