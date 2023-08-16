<template>
  <div id="app">
    <app-nav />
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view class="page" />
    <!-- <router-view class="page" /> -->
  </div>
</template>

<script>

// import { defineComponent } from 'vue';
import AppNav from './components/AppNav'
import { useUserStore } from './userStore';
import axios from 'axios';
import './assets/styles/global.scss'; // 导入全局样式
export default {
  setup() {
    const store = useUserStore()
    return {store}
  },
  created() {
    const userString = localStorage.getItem('user')
    if(userString) {
      const data = JSON.parse(userString)
      this.store.$patch({
        name: data.name,
        email: data.email,
        token: data.token
      })
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    }

    axios.interceptors.response.use(
      response=>response,
      error=> {
        if(error.response.status == 401) {
          this.store.logout()
        }
        return Promise.reject(error)
      }
    )
  },
  components: { AppNav }
}
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
