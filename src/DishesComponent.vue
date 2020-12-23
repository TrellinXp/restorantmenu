<template>
    <div class="dishes">
        <table v-for="dish in dishes" :key="dish.name">
            <tr>
                <th>Dish Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Availability</th>
                <th>Waiting Time</th>
                <th>Active</th>
            </tr>
            <tr>
                <td>dish.name</td>
                <td>dish.description</td>
                <td>dish.price</td>
                <td>dish.category</td>
                <td>>dish.availability</td>
            </tr>
          </table>
    </div> 
</template>

<script>

import DishService from './services/DishService.js'

export default {
  name: "Restorant Menu",
  mounted() {
    const dishService = new DishService();
    var dishes = dishService.getDishes();
  }
  
}

</script>