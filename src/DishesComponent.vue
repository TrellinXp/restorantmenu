<template>

    <div class="dishes">

        <EditDialogComponent />

        <b>The following dishes are served:</b>
        <b-table striped hover :items="dishes" :fields="fields" class="table dishes-table table-striped">
                <template #cell(delete)="row">
                  <b-button size="sm" @click="deleteRow(row)" class="mr-2">
                    Delete
                  </b-button>
                </template>
                <template #cell(edit)="row">
                  <b-button size="sm" @click="editRow(row)" class="mr-2">
                    Edit
                  </b-button>
                </template>

        </b-table>

        <div id="action">
          <button class="addDish" v-on:click="addNewDish()">Add new Dish</button>
          <button class="button clear" @click="clearDishes()">Clear Dishes</button>
        </div>
    </div> 
</template>

<style>
  @import '../assets/styles/Dishes.css';
</style>

<script>

import axios from 'axios';
import EditDialogComponent from './EditDialog.vue'
import eventBus from './main'

export default {
  components: {
    EditDialogComponent
  },
  name: "restorantmenu",
  apiUrl: "http://localhost:9000/dishes/",
  data() {
    return {
          fields: ["name", "description", "price", "category", "availability", "waitingTime", "delete", "edit"],
          dishes: [],
          today: "23.12.2020",
          showModal: false,
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

    addNewDish() {
        document.getElementById('modal').style.display='block';
    },

    editRow(row) {
      let self = this;
      self.showModal = true;
      document.getElementById('modal').style.display='block';
      eventBus.$emit('fillDataEvent', row.item);
      console.log("Event emited on" + eventBus);
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
    console.log("Event Bus Dishes Component " + eventBus);
  },

};

</script>

 