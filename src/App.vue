<template>
    <div>

        <navbar
            v-if="currentPage == 'HomePage'"
            @taskForm="taskForm"
            @logOut="logOut"
        ></navbar>

        <login-form 
            v-if="currentPage == 'LoginForm'"
            @changePage="changePage"
        ></login-form>

        <register-form
            v-if="currentPage == 'register'"
            @changePage="changePage"
        ></register-form>
        <home-page
            v-on:logOut="logOut"
            v-on:taskForm="taskForm"
            v-else-if="currentPage == 'HomePage'"
            :tasks="tasks"
            :categories="categories"
            @data="fetchTask"
            @changePage="changePage"
        ></home-page>
        <task-form
            v-if="currentPage == 'taskForm'"
            @changePage="changePage"
        ></task-form>
    </div>
</template>

<script>

import axios from "axios"
import LoginForm from "./components/LoginForm"
import HomePage from "./components/HomePage"
import RegisterForm from "./components/RegisterForm"
import taskForm from "./components/TasksForm"
import TaskCard from "./components/TaskCard"
import navbar from "./components/Navbar"

export default {
    name: "App",
    data() {
        return {
            currentPage: "LoginForm",
            tasks: [],
            isUserLogin: false,
            categories: ['Backlog','Todo','Doing','Done']
        }
    },
    components: {
        LoginForm,
        RegisterForm,
        HomePage,
        taskForm,
        TaskCard,
        navbar
    },
    methods: {
        checkAuth() {
          if (localStorage.access_token) {
            this.fetchTask();
            this.currentPage = "HomePage";
            this.isUserLogin = true;
        } else {
            this.currentPage = "LoginForm";
            this.isUserLogin = false;
            }
        },
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
        },
        changePage(payload){
            console.log('masuk sini changepage');
            console.log(payload);
            this.currentPage = payload
        },
        logOut(){
            localStorage.clear()
            this.checkAuth()
        },
        taskForm(){
            console.log('romi di app');
            this.currentPage = "taskForm"
        }
    },
    created() {
        this.checkAuth()
    }
}
</script>

<style>

</style>