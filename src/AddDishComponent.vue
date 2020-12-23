<template>
  <div id="Add New Dish" class="addDish">
    <h2>Add new Dish</h2>
    <div class="attributesClass">
      <div class="attribute">Dish Name</div>
      <div class="attribute">Description</div>
      <div class="attribute">Price</div>
      <div class="attribute">Category</div>
      <div class="attribute">Availability</div>
      <div class="attribute">Activated</div>
      <div class="attribute">Serving Time in min</div>
    </div>
    <div class="attributesClass">
      <div class="attribute"><input type="text"  v-model="dishname" /></div>
      <div class="attribute"><input type="text" v-model="description" /></div>
      <div class="attribute"><input type="number" v-model="price" /></div>
      <div class="attribute">
        <select class="selectBox" v-model="category">
          <option selected="true">main course</option>
          <option>starter</option>
          <option>dessert</option>
          <option>beverage</option>
        </select>
      </div>

      <div class="attribute">
       <select class="selectBox" v-model="availability">
          <option selected="true">lunch</option>
          <option>breakfast</option>
          <option>dinner</option>
          <option>monday</option>
          <option>weekends</option>
        </select>
      </div>
      <div class="attribute"><input type="checkbox" id="active" name="active" checked v-model="activated"></div>
      <div class="attribute"><input type="text" v-model="servingTime" /></div>
    </div>
    <button class="addDish" v-on:click="addNewDish()">Add new Dish</button>
  </div>
</template>

<script>
import axios from "axios";
import { Category } from "./data/category.js";
import Dish from './data/Dish.js'

export default {
  name: "restorantmenu",
  apiUrl: "http://localhost:9000/dishes",
  data() {
    return {
      dishes: [],
      today: "23.12.2020",
      categorys: Object.keys(Category),
      dishname: "",
      description: "",
      price: "",
      category: "",
      availability: "",
      activated: true,
      servingTime: ""
    };
  },
  
  mounted() {
    axios.get("http://localhost:9000/dishes").then((response) => {
        this.dishes = response.data.data;
    });
    console.log("Dishes" + this.dishes);
  },

  methods: {
    addNewDish() {
      var dish = new Dish(this.dishname, this.description, this.price, this.category, this.availability, this.activated, this.servingTime);
      var addedDish = "";
      axios.put("http://localhost:9000/dishes", dish).then((response) => {
        addedDish = response.data.data.results;        
      });
      console.log("Added Dish"+addedDish.dishname);
    },

    reload: function(){
      this.isRouterAlive = false
      setTimeout(()=>{
         this.isRouterAlive = true
      },0)
   }
  },
};
</script>