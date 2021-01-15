<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" >Task List App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" @click="homePage">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item px-2">
        <button class="btn btn-primary" @click="taskForm">Add Task</button>
      </li>
      <li class="nav-item">
        <button class="btn btn-danger" @click="logOut">logout</button>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    name: "navbar",
    methods: {
        logOut(){
          console.log('romi disini');
          this.$emit('logOut')
        },
        taskForm(){
          console.log('romi di navbar');
          this.$emit('taskForm')
        },
        homePage(){
          this.$emit('HomePage')
        }
    }
}
</script>

<style>

</style>