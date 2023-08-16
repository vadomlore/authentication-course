<template>
  <div id="nav">
       <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <p v-if="store.loggedIn">{{ username }}</p>
    <router-link to="/">
      Home
    </router-link>
    <router-link v-if="store.loggedIn" to="/dashboard">
      Dashboard
    </router-link>
    <router-link v-if="!store.loggedIn" to="/login" class="loginLink">
      Login
    </router-link>
    <button v-else to="/logout" @click="logout" class="logoutButton">
      Logout
    </button>
  </div>
</template>

<script>
import { useUserStore } from '@/userStore';
import { storeToRefs } from 'pinia';
export default {
    setup() {
        const store = useUserStore()
        const { name } = storeToRefs(store)
        return {
            store,
            name
        }
    },
    computed: {
        username() {
          return  "@" +this.name
      }
    },
    methods: {
      logout() {
        this.store.logout()
        // this.$router.push({name:"login"})
      }
    }
  }

</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.2em 1em;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}

.nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: white;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}

.router-link-exact-active {
  color: white;
  border-bottom: 2px solid #fff;
}

button,
.button {
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;

  &.router-link-active {
    color: #2c3e50;
  }
}

.logoutButton {
  cursor: pointer;
}

.loginLink {
  margin-left: auto;
}
.nav-welcome + button {
  margin-left: 0;
}
</style>
