<template>
  <div id="app">
    <h1 class="title">Restorant Menu</h1>
    <DishesComponent />
  </div>
</template>

<style>
  @import '../assets/styles/Dishes.css';
</style>

<script>

import DishesComponent from './DishesComponent.vue'

export default {
  components: {
    DishesComponent
  },

  data () {
    return {
      today: "23.12.2020"
    }
  },

  name: "restorantmenu",
  mounted() {

  }
}

</script>