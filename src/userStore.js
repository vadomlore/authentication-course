import {defineStore} from 'pinia'
import axios from 'axios'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: '',
      email:'',
      token: ''
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.name
    }
  },
  actions: {
    async register(credentials) {
      return new Promise(async(resolve, reject)=>{
        try{
          const {data} = await axios.post("http://localhost:3000/register", credentials)
          console.log(data) 
          this.name = data.name;
          this.email = data.email;
          this.token = data.token
          localStorage.setItem('user', JSON.stringify(data))
          console.log(`set axios global authen token ${data.token}`)
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
          resolve(data)
        }catch(err) {
          reject(err)
        }
      })
    },
    async login(credentials) {
      return new Promise(async(resolve, reject)=>{
        try{
          const {data} = await axios.post("http://localhost:3000/login", credentials)
          console.log(data) 
          this.name = data.name;
          this.email = data.email;
          this.token = data.token
          localStorage.setItem('user', JSON.stringify(data))
          console.log(`set axios global authen token ${data.token}`)
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
          resolve(data)
        }catch(err) {
          reject(err)
        }
      })
    },
    logout() {
      try{
        // this.name = '';
        // this.email = '';
        // this.token = '';
        localStorage.removeItem("user")
        location.reload()
        // axios.defaults.headers.common['Authorization'] = null;
 
      }catch(err) {
        return err
      }
    }
  }
})