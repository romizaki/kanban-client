<template>

    <div class="card text-center mb-3">

        <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
                <li class="nav-item px-1">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit</button>
                </li>
                <li class="nav-item px-1">
                    <a class="btn btn-danger" v-on:click.prevent="deleteTask(task.id)">Delete</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <h5 class="card-title" v-text="task.title" >Special title treatment</h5>
            <p class="card-text" v-text="task.date.slice(0, 10)" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class="btn btn-outline-dark btn-sm" v-if="task.category != 'Backlog'" @click.prevent="patchTaskBacklog(task.id)">Backlog</button>
            <button class="btn btn-outline-dark btn-sm" v-if="task.category != 'Todo'" @click.prevent="patchTaskTodo(task.id)">Todo</button>
            <button class="btn btn-outline-dark btn-sm" v-if="task.category != 'Doing'" @click.prevent="patchTaskDoing(task.id)">Doing</button>
            <button class="btn btn-outline-dark btn-sm" v-if="task.category != 'Done'" @click.prevent="patchTaskDone(task.id)">Done</button>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    
                    <form @submit.prevent="editTask(task.id)">
                        <h1>Edit Task</h1>
                        <div class="form-group">
                            <p class="text-left">Your Activity Task</p>
                            <textarea class="form-control" id="titleTask" v-model="titleEdit" placeholder="Enter Your Task" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <p class="text-left">Your Category Task</p>
                            <select class="form-control form-control-sm" v-model="cetegory" id="categoryTask">
                                <option value="Backlog">Backlog</option>
                                <option value="Todo">Todo</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                            </select>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </form>

                </div>
                </div>
            </div>
        </div>

    </div>
    

    
</template>

<script>
import axios from "axios"

export default {
    name: "TaskCard",
    data(){
        return {
            titleEdit: "",
            cetegory: ""
        }
    },
    props: ["task"],
    methods: {
        deleteTask(id){
            axios({
                method: "DELETE",
                url: `https://kanban-romizaki-app.herokuapp.com/tasks/${id}`,
                headers: {
                    access_token:localStorage.getItem("access_token")
                },
            })
            .then(({data}) => {
                this.$emit("data")
            })
            .catch(err => {
                console.log(err);
            })
        },
        patchTaskBacklog(id){
            axios({
                method: "PATCH",
                url: `https://kanban-romizaki-app.herokuapp.com/tasks/${id}`,
                headers: {
                    access_token:localStorage.getItem("access_token")
                },
                data:{
                    category: "Backlog"
                }
            })
            .then(({data}) => {
                this.$emit("data")
            })
            .catch(err => {
                console.log(err);
            })
        },
        patchTaskTodo(id){
            axios({
                method: "PATCH",
                url: `https://kanban-romizaki-app.herokuapp.com/tasks/${id}`,
                headers: {
                    access_token:localStorage.getItem("access_token")
                },
                data:{
                    category: "Todo"
                }
            })
            .then(({data}) => {
                this.$emit("data")
            })
            .catch(err => {
                console.log(err);
            })
        },
        patchTaskDoing(id){
            axios({
                method: "PATCH",
                url: `https://kanban-romizaki-app.herokuapp.com/tasks/${id}`,
                headers: {
                    access_token:localStorage.getItem("access_token")
                },
                data:{
                    category: "Doing"
                }
            })
            .then(({data}) => {
                this.$emit("data")
            })
            .catch(err => {
                console.log(err);
            })
        },
        patchTaskDone(id){
            axios({
                method: "PATCH",
                url: `https://kanban-romizaki-app.herokuapp.com/tasks/${id}`,
                headers: {
                    access_token:localStorage.getItem("access_token")
                },
                data:{
                    category: "Done"
                }
            })
            .then(({data}) => {
                this.$emit("data")
            })
            .catch(err => {
                console.log(err);
            })
        },
        editTask(value) {
            axios({
                method: "PUT",
                url: `https://kanban-romizaki-app.herokuapp.com/tasks/${value}`,
                headers: {
                    access_token:localStorage.getItem("access_token")
                },
                data: {
                    title: this.titleEdit,
                    category: this.cetegory
                }
            })
            .then(({data}) => {
                this.$emit("data")
                this.titleEdit = ""
                this.cetegory = ""
            })
            .catch(err => {
                console.log('romi err');
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>