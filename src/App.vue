<template>
  <div id="app">
    <h1 v-bind:style="headline">Restorant Menu</h1>

    Today the following dishes are served:

    <div class="dishes">
        Dish 1
    </div> 
  </div>
</template>

<script>
export default {
  name: "Restorant Menu",
  mounted() {
  }
}

</script>