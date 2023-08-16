<template>
    <div>
        <form @submit.prevent="login" class=".login">
        <div>
            <label for="email">email:</label>
            <input v-model="email" type="email" name="email" value>
        </div>

        <div>
            <label for="password">Password:</label>
            <input v-model="password" type="password" name="password" value>
        </div>
        <ul>
            <li v-for="err in errors"><p>{{ err }}</p></li>
        </ul>
        <button class="cursor" type="submit" name="button">Login</button>
        <router-link to="/register">Dont have an account register</router-link>
        </form>
    </div>
</template>

<script>
import { useUserStore } from '@/userStore';

export default {
    setup() {
        const store = useUserStore()
        return {
            store,
        }
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
            errors: null 
        }
    },
    methods: {
        login() {
            // console.log('register clicked')
            this.store.login({email: this.email, password: this.password})
            .then(()=>{
                this.$router.push({name:"dashboard"})})
            .catch((err)=>{
                this.errors = err.response.data.error 
                console.log(this.errors)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.2em 1em;
  margin: 0.2em;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}
</style>