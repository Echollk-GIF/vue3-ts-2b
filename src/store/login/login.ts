import { defineStore } from "pinia";
import { accountLoginRequest, getUserInfoById } from "@/service/login/login";
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";
import router from "@/router";

const useLoginStore = defineStore("login", {
  state: () => ({
    token: "",
    userInfo: {}
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

      // 5.页面跳转(main页面)
      router.push("/main");
    }
  }
});
export default useLoginStore;
