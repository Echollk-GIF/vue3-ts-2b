<template>
  <div>main</div>
  <button @click="handleExitClick">退出登录</button>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache';
import { useRouter } from 'vue-router';
import { LOGIN_TOKEN } from '../../global/constants';

const router = useRouter()
function handleExitClick() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
</style>
