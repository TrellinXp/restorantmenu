<template>

    <div class="dishes">

        <b>The following dishes are served:</b>
        <b-table striped hover :items="dishes" :fields="fields" class="table dishes-table table-striped">
                <template #cell(delete)="row">
                  <b-button size="sm" @click="deleteRow(row)" class="mr-2">
                    Delete
                  </b-button>
                </template>

        </b-table>
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
        fields: ["name", "description", "price", "category", "availability", "waitingTime", "delete"],
        dishes: [],
        today: "23.12.2020",
        }
  },
  methods: {
    clearDishes() {
        this.dishes = [];
        axios.get("http://localhost:9000/dishes"+"/clear")
        .then(response => 
        
        {console.log("Dishes Cleared " + response.data)});
    },

    deleteRow(row) {
      let self = this;
      var payload = {
        "_id": row.item._id
      };
      console.log("Row "+payload._id);
      axios.delete("http://localhost:9000/dishes/"+payload._id, payload)
        .then(response => 
        
        {self.getDishes(response)});
    },

    deleteRowRompleted(response) {
      console.log("Response "+response);
      self.getDishes();
    },

    getDishes() {
      let self = this;
      axios.get("http://localhost:9000/dishes").then((response) => {
        self.dishes = response.data.data;
      });
    }
  },

  mounted() {
    let self = this;
    self.getDishes();
  },

}

</script>

