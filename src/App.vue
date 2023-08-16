<template>
  <div id="app">
    <app-nav />
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view class="page" />
    <!-- <router-view class="page" /> -->
  </div>
</template>

<script setup>
import AppNav from './components/AppNav'
</script>

<style lang="scss" scoped>

.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
