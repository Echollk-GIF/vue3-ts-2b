import myRequest from "..";
import type { IAccount } from "@/types";
export function accountLoginRequest(account: IAccount) {
  return myRequest.post({
    url: "/login",
    data: account
  });
}

export function getUserInfoById(id: number) {
  return myRequest.get({
    url: `/users/${id}`
    // headers: {
    //   Authorization: 'Bearer ' + localCache.getCache(LOGIN_TOKEN)
    // }
  });
}
