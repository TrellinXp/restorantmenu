<template>

    <div class="dishes">

        The following dishes are served:
          <AddDishComponent />

          <div id="action">
            <button class="button" @click="clearDishes()">Clear All Dishes</button>
          </div>
    </div> 
</template>

<style>
  @import '../assets/styles/Dishes.css';
</style>

<script>

import axios from 'axios';
import AddDishComponent from './AddDishComponent.vue'

export default {
  components: {
    AddDishComponent
  },
  name: "restorantmenu",
  apiUrl: "http://localhost:9000/dishes/",
  data() {
    return {
        dishes: [],
        today: "23.12.2020"
    }
  },
  methods: {
    clearDishes() {
        axios.get("http://localhost:9000/dishes"+"/clear")
        .then(response => 
        
        {console.log("Dishes Cleared" + response.data)});
    }
  },

  mounted() {
    axios.get("http://localhost:9000/dishes")
    .then(response =>

    {console.log(response.data.data)});
  },

}

</script>

