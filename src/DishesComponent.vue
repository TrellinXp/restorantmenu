<template>

    <div class="dishes">

        <b>The following dishes are served:</b>
        <div class="dishes-table">
          <b-table striped hover :items="dishes" :fields="fields"></b-table>
        </div>
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
    AddDishComponent,
  },
  name: "restorantmenu",
  apiUrl: "http://localhost:9000/dishes/",
  data() {
    return {
        fields: ["name", "description", "price", "category", "availability", "waitingTime"],
        dishes: [],
        today: "23.12.2020"
    }
  },
  methods: {
    clearDishes() {
        this.dishes = [];
        axios.get("http://localhost:9000/dishes"+"/clear")
        .then(response => 
        
        {console.log("Dishes Cleared " + response.data)});
    }
  },

  mounted() {
    let self = this;
    axios.get("http://localhost:9000/dishes").then((response) => {
      self.dishes = response.data.data;
    });
    console.log("Dishes "+this.dishes);
    console.log("Items"+this.items);
  },

}

</script>

