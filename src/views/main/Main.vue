<template>
  <div>main</div>
  {{ counterStore.counter }}--{{ counterStore.doubleCounter }}
  <button @click="changeCounter">修改counter</button>
</template>

<script setup lang="ts">
import useCounterStore from "@/store/counter";
const counterStore = useCounterStore();

function changeCounter() {
  counterStore.changeCounterAction(300);
}
</script>

<style lang="less" scoped>
</style>
