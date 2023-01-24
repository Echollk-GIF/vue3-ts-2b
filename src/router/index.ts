import { createRouter, createWebHashHistory } from "vue-router";
import { LOGIN_TOKEN } from "@/global/constants";
import { localCache } from "@/utils/cache";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/login",
      component: () => import("@/views/login/Login.vue")
    },
    {
      path: "/main",
      component: () => import("@/views/main/Main.vue")
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/not-found/NotFound.vue")
    }
  ]
});

router.beforeEach((to) => {
  // 只有登录成功(token), 才能真正进入到main页面
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path.startsWith("/main") && !token) {
    return "/login";
  }
});

export default router;
