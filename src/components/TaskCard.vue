<template>
    <div class="card text-center mb-3">
        <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <h5 class="card-title" v-text="task.title" >Special title treatment</h5>
            <p class="card-text" v-text="task.date.slice(0, 10)" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
</template>

<script>


export default {
    name: "TaskCard",
    props: ["task"]
}
</script>

<style>

</style>