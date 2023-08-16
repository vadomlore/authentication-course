<template>
    <div>
        <form @submit.prevent="register">
            <div>
                <label for="name">Name:</label>
                <input v-model="name" type="text" name="name" value>
            </div>
        <div>
            <label for="name">Password:</label>
            <input v-model="password" type="password" name="password" value>
        </div>
        <div>
            <label for="email">email:</label>
            <input v-model="email" type="email" name="email" value>
        </div>
        <ul>
            <li v-for="err in errors"><p>{{ err }}</p></li>
        </ul>
        <button type="submit" name="button">Register</button>
        <router-link to="/login">Already have an account Login</router-link>

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
        register() {
            // console.log('register clicked')
            this.store.register({name: this.name, email: this.email, password: this.password})
            .then((data)=>{
                console.log("do route")
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
</style>