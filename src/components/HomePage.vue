<template>
  <div class="container" >
      <div class="row">
<!-- v-for="item in items" :key="item.id" -->

      <category-column 
        v-for="(category, index) in categories" 
        :key="index" 
        :category="category"
        :tasks="tasks"
      ></category-column>
      
    </div>
  </div>
</template>

<script>
import CategoryColumn from './CategoryColumn'


export default {
    name: "HomePage",
    components: {
      CategoryColumn
    },
    props: ['tasks','categories']
}

</script>

<style>

</style>