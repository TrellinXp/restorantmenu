<template>
  <div id="app">
    <h1 v-bind:style="headline">Restorant Menu</h1>

    Today on the {{today}} the following dishes are served:

    <DishesComponent />
  </div>
</template>

<script>

import DishesComponent from './DishesComponent.vue'
import DishService from './services/DishService.js'

export default {
  components: {
    DishesComponent
  },

  data () {
    return {
      today: "23.12.2020"
    }
  },

  name: "Restorant Menu",
  mounted() {
    const dishService = new DishService();
    dishService.sendRequest();
  }
}

</script>