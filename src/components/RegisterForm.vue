<template>
    <div class="container mt-5 col-4 offset-4">
      <div>
        <form @submit.prevent="register">
          <h1>Register</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Your Name</label>
            <input type="text" class="form-control" id="registerName" v-model="name" placeholder="Enter Your Name">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="registerEmail" v-model="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="registerPassword" v-model="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary" value="login">Submit</button>
        </form>
      </div>
    </div>
</template>

<script>

import axios from "axios"

export default {
    name: "RegisterForm",
    data(){
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    props: ['changePage'],
    methods: {
        register() {
            axios({
                method: "POST",
                url: `https://kanban-romizaki-app.herokuapp.com/register`,
                data: {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
            })
            .then(({data}) => {
                this.$emit("changePage","LoginForm")
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