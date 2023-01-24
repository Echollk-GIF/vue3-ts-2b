import { defineStore } from "pinia";
import { accountLoginRequest } from "@/service/login/login";

const useLoginStore = defineStore("login", {
  state: () => ({
    token: ""
  }),
  actions: {
    async loginAccountAction(account: any) {
      // 1.账号登录, 获取token等信息
      const loginResult = await accountLoginRequest(account);
      console.log(loginResult);
      const id = loginResult.data.id;
      this.token = loginResult.data.token;
    }
  }
});
export default useLoginStore;
