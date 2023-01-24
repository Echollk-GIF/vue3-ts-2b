import { BASE_URL, TIME_OUT } from "./config";
import MYRequest from "./request";
import { LOGIN_TOKEN } from "@/global/constants";
import { localCache } from "@/utils/cache";

const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // 每一个请求都自动携带token
      const token = localCache.getCache(LOGIN_TOKEN);
      if (config.headers && token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    }
  }
});

export default myRequest;
