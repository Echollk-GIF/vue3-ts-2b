<template>
  <div class="panel">
    <h1 class="title">登录页面</h1>
    <!-- 中间的tabs切换 -->
    <el-tabs type="border-card" stretch v-model="activeName">
      <!-- 1.账号登录的Pane -->
      <el-tab-pane name="account">
        <template #label>
          <span class="icon">
            <el-icon><UserFilled /></el-icon>
            <span class="text">账号登录</span>
          </span>
        </template>
        <paneAccount ref="accountRef"/>
      </el-tab-pane>
      <!-- 2.手机登录的Pane -->
      <el-tab-pane name="phone">
        <template #label>
          <span class="icon">
            <el-icon><Cellphone /></el-icon>
            <span class="text">手机登录</span>
          </span>
        </template>
        <panePhone/>
      </el-tab-pane>
    </el-tabs>
    <div class="control-account">
      <el-checkbox v-model="isRemPwd" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
    type="primary"
    class="login-btn"
    @click="handleLoginBtnClick"
    >立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref,watch } from "vue";
import { localCache } from '@/utils/cache'
import paneAccount from "./paneAccount.vue";
import panePhone from './panePhone.vue'
const activeName = ref('account')
const isRemPwd = ref(localCache.getCache('isRemPwd') ?? false);
watch(isRemPwd, (newValue) => {
  localCache.setCache('isRemPwd', newValue)
})
const accountRef = ref<InstanceType<typeof paneAccount>>()
function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction(isRemPwd.value)
  } else {
    console.log('用户在进行手机登录')
  }
}
</script>

<style scoped lang="less">
.panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .control-account {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
