<template>
    <div>
        <login-form 
            v-if="currentPage == 'login'"
            @changePage="changePage"
        ></login-form>
        <register-form
            v-if="currentPage == 'register'"
            @changePage="changePage"
        ></register-form>
        <home-page
            v-else-if="currentPage == 'home'"
            :tasks="tasks"
            :categories="categories"
        ></home-page>
        <task-form
            v-if="currentPage == 'taskform'"
            @changePage="changePage"
        ></task-form>
    </div>
</template>

<script>

import axios from "axios"
import LoginForm from "./components/LoginForm"
import HomePage from "./components/HomePage"
import RegisterForm from "./components/RegisterForm"
import TaskForm from "./components/TasksForm"

export default {
    name: "App",
    data() {
        return {
            currentPage: "login",
            tasks: [],
            // ini untuk penampung kategori
            // sesuaikan dengan kategori yg ada
            categories: ['Backlog','Todo','Doing','Done']
        }
    },
    components: {
        LoginForm,
        RegisterForm,
        HomePage,
        TaskForm
    },
    methods: {
        fetchTask(){
            axios({
                method: "GET",
                url: `http://localhost:3000/tasks`,
                headers: {
                    access_token:localStorage.getItem("access_token")
                },
            })
            .then(({data}) => {
                this.tasks = data
            })
            .catch(err => {
                console.log(err);
            })
        }
        ,
        changePage(payload){
            console.log(payload);
            this.currentPage = payload
        }
    },
    created() {
        if (localStorage.getItem("access_token")) {
            this.currentPage = "home"
            this.fetchTask()
        }
    }
}
</script>

<style>

</style>