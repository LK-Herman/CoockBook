<template>
  <div v-for="meal in meals" :key="meal.idMeal">
      <!-- <router-link :to="{name:'MealDetails', params: {id: playlist.id} }"> -->
      <div :class="{mealListItem: meal.strCategory, mealListItemTwo: !meal.strCategory}" >
          
              <img class="image" :src="meal.strMealThumb">
                <div>
                    <p id="titleMeal">{{meal.strMeal}}</p>
                    <p>{{meal.strArea}} {{meal.strCategory}}</p>
                </div>
                <div>
                        <p v-if="meal.strIngredient1">{{meal.strIngredient1}}</p>
                        <p v-if="meal.strIngredient2">{{meal.strIngredient2}}</p>
                        <p v-if="meal.strIngredient3">{{meal.strIngredient3}}</p>
                        <p v-if="meal.strIngredient4">{{meal.strIngredient4}}</p>
                </div>
                <div>
                        <p v-if="meal.strIngredient5">{{meal.strIngredient5}}</p>
                        <p v-if="meal.strIngredient6">{{meal.strIngredient6}}</p>
                        <p v-if="meal.strIngredient7">{{meal.strIngredient7}}</p>
                        <p v-if="meal.strIngredient8">{{meal.strIngredient8}}</p>
                </div>
               
                <h3>{{ meal.idMeal }}</h3>
      </div>
      <!-- </router-link> -->
  </div>
</template>

<script>
import getMeal from '@/tools/getMeal.js'
export default {
    props:['meals'],
    setup(props){
        const {error, meal, getMealById} = getMeal()

        

        return { }
    }

}
</script>

<style>
.mealListItem{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  justify-self: start;
  align-self: center;
  align-items: center;
  column-gap: 15px;
  padding: 20px;
  border-radius: 100px;
  margin:15px 60px ;
  /* border-top: solid 1px; */
  border-bottom: solid 1px;
  transition: ease 0.3s;
  box-shadow: 2px 2px 3px rgba(50,50,50,0.5); 
  background: rgb(245, 245, 245);
  }
  .mealListItemTwo{
  display: grid;
  grid-template-columns: 1fr 2fr 0 0 1fr;
  justify-self: start;
  align-self: center;
  align-items: center;
  column-gap: 25px;
  padding: 20px;
  border-radius: 100px;
  margin:15px 200px ;
  /* border-top: solid 1px; */
  border-bottom: solid 1px;
  transition: ease 0.3s;
  box-shadow: 2px 2px 3px rgba(50,50,50,0.5); 
  background: rgb(245, 245, 245);
  }
  .testing:hover{
    transition: ease 0.3s;
    transform: scale(1.02);
    background: rgb(240, 240, 240);
    
  }
.image{
    margin-right:  auto;
    max-width: 250px;
    max-height: 130px;
    object-fit: cover;
    border-radius: 50%;
    /* border: solid 5px white; */
    box-shadow: 2px 2px 3px rgba(50,50,50,0.5); 
}
#titleMeal{
    font-family: 'Great Vibes', cursive; 
    font-size: 2em;
}
</style>