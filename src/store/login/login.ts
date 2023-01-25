import { defineStore } from "pinia";
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from "@/service/login/login";
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";
import router from "@/router";

interface ILoginState {
  token: string;
  userInfo: any;
  userMenus: any;
  permissions: string[];
}

const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: "",
    userInfo: {},
    userMenus: [],
    permissions: []
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录, 获取token等信息
      const loginResult = await accountLoginRequest(account);
      const id = loginResult.data.id;
      this.token = loginResult.data.token;
      localCache.setCache(LOGIN_TOKEN, this.token);

      // 2.获取登录用户的详细信息(role信息)
      const userInfoResult = await getUserInfoById(id);
      const userInfo = userInfoResult.data;
      this.userInfo = userInfo;

      // 3.根据角色请求用户的权限(菜单menus)
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id);
      const userMenus = userMenusResult.data;
      this.userMenus = userMenus;

      // 4.进行本地缓存
      localCache.setCache("userInfo", userInfo);
      localCache.setCache("userMenus", userMenus);

      // 5.页面跳转(main页面)
      router.push("/main");
    }
  }
});
export default useLoginStore;
