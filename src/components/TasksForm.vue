<template>
    <div class="container mt-5 col-4 offset-4">
      <div>
        <form @submit.prevent="addTask">
          <h1>Add Task</h1>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Task</label>
            <textarea class="form-control" id="titleTask" v-model="title" placeholder="Enter Your Task" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Your Category Task</label>
            <select class="form-control form-control-sm" v-model="category" id="categoryTask">
                <option value="Backlog">Backlog</option>
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
</template>

<script>

import axios from "axios"

export default {
    name: "TaskForm",
    data(){
        return {
            title: "",
            category: "",
            UserId: ""
        }
    },
    methods: {
        addTask() {
            axios({
                method: "POST",
                url: `http://localhost:3000/tasks`,
                headers: {
                    access_token:localStorage.getItem("access_token")
                },
                data: {
                    title: this.title,
                    category: this.category
                }
            })
            .then(({data}) => {
                this.title = "",
                this.category = "",
                this.$emit("changePage","home")
            })
            .catch(err => {
                console.log(this.category);
                console.log(this.title);
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>