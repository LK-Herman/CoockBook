<template>
  <div v-for="favMeal in favorites" :key="favMeal.favoriteMealId">
      <!-- <router-link :to="{name:'MealDetails', params: {id: playlist.id} }"> -->
      <div >
          
              <h3>{{ favMeal.favoriteMealId }}</h3>
              <p>{{ favMeal.userName }}</p>
          
      </div>
      <!-- </router-link> -->
  </div>
</template>

<script>
export default {
props: ['favorites']
}
</script>

<style scoped>


</style>