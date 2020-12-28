<template>
  <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <div id="modal" class="w3-modal modalClass">
      <div class="modalcontent">
        <div class="modalcontainer">
          <span
            onclick="document.getElementById('modal').style.display='none'"
            class="w3-button w3-display-topright"
            >&times;</span
          >
          <h3>Edit Dish</h3>
          <div class="dishproperty">
            <div class="attributename">Dish Name</div>
            <input type="text" v-model="dishname" class="value"/>
          </div>
          <div class="dishproperty">
            <div class="attributename">Description</div>
            <input type="text" v-model="description" class="value"/>
          </div>
          <div class="dishproperty">
            <div class="attributename">Price</div>
            <input type="number" v-model="price" class="value"/>
          </div>
          <div class="dishproperty">
            <div class="attributename">Category</div>
              <select class="selectBoxDialog value" v-model="category" >
                <option
                  v-for="category in categorys"
                  v-bind:key="category.value"
                >
                  {{ category }}
                </option>
              </select>
          </div>
          <div class="dishproperty">
            <div class="attributename">Availability</div>
              <select class="selectBoxDialog value" v-model="availability">
                <option
                  v-for="availability in availabilities"
                  v-bind:key="availability.value"
                >
                  {{ availability }}
                </option>
              </select>
          </div>
          <div class="dishproperty">
            <div class="attributename activated">Activated</div>
              <input
                type="checkbox"
                id="active"
                name="active"
                checked
                v-model="activated"
              />
          </div>
          <div class="dishproperty">
            <div class="attributename">Serving Time</div>
            <input type="text" v-model="servingTime" class="value"/>
          </div>

          <div class="modal-actions">
            <button class="button" @click="saveEdit()">Save</button>
            <button class="button" @click="cancel()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Category } from "./data/category.js";
import { Availability } from "./data/availability.js";
import Dish from './data/Dish.js'
import eventBus from './main'

export default {
  name: "restorantmenu",
  apiUrl: "http://localhost:9000/dishes",
  data() {
    return {
      dishes: [],
      today: "23.12.2020",
      categorys: Object.values(Category),
      availabilities: Object.values(Availability),
      dishname: "",
      description: "",
      price: "",
      category: Category.STARTER,
      availability: Availability.breakfast,
      activated: true,
      servingTime: "",
    };
  },

  mounted() {
       let self = this;
       console.log("Event Bus Edit Dialog" + eventBus);
       self.clearFields();
  },

  methods: {
    fillData(data) {
        console.log("Fill data " + data);
        let self = this;
        self.dishname = data.name;
        self.description = data.description;
        self.price = data.price;
        self.activated = data.active;
        self.servingTime = data.waitingTime;
    },

    clearFields() {
      let self = this;
      self.dishname = "";
      self.description = "";
      self.price = "";
      self.activated = true;
      self.servingTime = "";
    },

    saveEdit() {
        console.log("Save Edit");
        var dish = new Dish(this.dishname, this.description, this.price, this.category, this.availability, this.activated, this.servingTime);
        axios.put("http://localhost:9000/dishes", dish).then((response) => {
            console.log("Added Dish "+response.data.data);
            document.getElementById('modal').style.display='none';
        });

        /** Call Get Dishes From Dishes Component */
    },

    cancel() {
        document.getElementById('modal').style.display='none';
    },
  },
};
</script>