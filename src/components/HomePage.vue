<template>
  <div class="container" >
      <div class="row">

      <category-column 
        v-for="(category, index) in categories" 
        :key="index" 
        :category="category"
        :tasks="tasks"
        @data="$emit('data')"
      ></category-column>
      
    </div>
  </div>
</template>

<script>
import CategoryColumn from './CategoryColumn'
// import navbar from "./Navbar"


export default {
    name: "HomePage",
    components: {
      CategoryColumn
    },
    props: ['tasks','categories'],
    created(){
      this.$emit('data')
    }
}

</script>

<style>

</style>