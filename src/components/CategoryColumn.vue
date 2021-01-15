<template>
    <div class="col-3 container mt-5">
        <h3>{{ category }}</h3>
        <task-card 
            v-for="task in taskFilter" 
            :key="task.id"
            :task="task"
            @data="$emit('data')"
        ></task-card>
      </div>
</template>

<script>
import TaskCard from "./TaskCard"

export default {

    name: "CategoryColumn",
    props: ["category","tasks"],
    computed:{
      taskFilter(){
        return this.tasks.filter(el => el.category == this.category )
      }
    },
    components: {
        TaskCard
    }
}
</script>

<style>

</style>