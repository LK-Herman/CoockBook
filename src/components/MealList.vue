<template>
  <div v-if="meals">
    <div v-for="meal in meals" :key="meal.idMeal">
        <MealBar :passedMealId="meal.idMeal"/>
    </div>
  </div>
</template>

<script>
import MealBar from '../components/MealBar.vue'
import Home from '../views/Home.vue'
export default {
    components: { MealBar},
    props:['meals']
}
</script>

<style>

</style>