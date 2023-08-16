<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <template v-if="!loggedIn">
      <div>To use this app you'll need to
        <router-link to="/login">Login</router-link>
      </div>
      <div>Or
        <router-link to="/register">Register</router-link>
      </div>
    </template>
  </div>
</template>

<script>
import { useUserStore } from '@/userStore'

export default {
  setup() {
    const { loggedIn } = useUserStore()
    return {
      loggedIn
    }
  }
}
</script>
