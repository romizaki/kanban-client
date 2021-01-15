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
          <button type="submit" class="btn btn-primary" value="login">Submit</button>
        </form>
      </div>
    </div>
</template>

<script>

import axios from "axios"

export default {
    name: "LoginForm",
    data(){
        return {
            email: "",
            password: ""
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
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>