<template>
  <div class="login">login</div>
</template>

<script setup lang="ts">
import hyRequest from "@/service";
hyRequest
  .get({
    url: "/home/multidata"
  })
  .then((res) => {
    console.log(res);
  });
</script>

<style lang="less" scoped>
</style>
