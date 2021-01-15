<template>
    <div class="container mt-5 col-4 offset-4">
      <div>
        <form @submit.prevent="login">
          <h1>Login</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="loginEmail" v-model="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="passwordEmail" v-model="password" placeholder="Password">
          </div>
          <h2 v-if="this.error" class="text-danger">{{ this.error }}</h2>
          <br>
          <button type="submit" class="btn btn-primary" value="login">Submit</button>
          <br>
          <br>
        </form>
          <button v-google-signin-button="clientId" class="google-signin-button btn-primary"> Continue with Google</button>
      </div>
    </div>
</template>

<script>

import axios from "axios"
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {
    name: "LoginForm",
    data(){
        return {
            email: "",
            password: "",
            error: "",
            clientId: '390534079214-0jg8d3fsq59lrd1h0oo49jiunq75a9aa.apps.googleusercontent.com'
        }
    },
    methods: {
        login() {
            axios({
                method: "POST",
                url: `http://localhost:3000/login`,
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then(({data}) => {
                localStorage.setItem('access_token', data.access_token)
                this.$emit("changePage","home")
            })
            .catch(err => {
                this.error=err.response.data.message
            })
        },
      OnGoogleAuthSuccess (idToken) {
        axios({
          method: "POST",
          url: `http://localhost:3000/logingoogle`,
          data: {
            id_token: idToken
          }
        })
        .then(data => {
          localStorage.setItem('access_token', data.data.access_token)
          this.$emit("changePage","home")
        })
        .catch(err => {
          console.log(err);
        })
      },
      OnGoogleAuthFail (error) {
        console.log(error)
      }
    }
}
</script>

<style>

</style>