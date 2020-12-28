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
        <AddDishComponent />

        <div id="action">
          <button class="button" @click="clearDishes()">Save</button>
        </div>
    </div> 
</template>

<style>
  @import '../assets/styles/Dishes.css';
</style>

<script>

import axios from 'axios';
import AddDishComponent from './AddDishComponent.vue'
import EditDialogComponent from './EditDialog.vue'

export default {
  components: {
    AddDishComponent,
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
          editDish: "",
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

    editRow(row) {
      let self = this;
      self.showModal = true;
      self.editDish = row.item;
      document.getElementById('modal').style.display='block';
      /*let edit = new EditDialogVue();
      edit.open(row);*/
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

};

</script>

 