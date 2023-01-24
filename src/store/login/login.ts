import { defineStore } from "pinia";
import { accountLoginRequest } from "@/service/login/login";
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";

const useLoginStore = defineStore("login", {
  state: () => ({
    token: ""
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录, 获取token等信息
      const loginResult = await accountLoginRequest(account);
      console.log(loginResult);
      const id = loginResult.data.id;
      this.token = loginResult.data.token;
      localCache.setCache(LOGIN_TOKEN, this.token);
    }
  }
});
export default useLoginStore;
