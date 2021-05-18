<template>
    <div class="welcome">
      <img id="luigi" src="@/assets/chefa.png">
      <h2>Buongiorno!</h2>
      <p v-if="meal && meal2">Please take a look at today's specials: {{meal.strMeal}} and {{meal2.strMeal}}.</p>
    </div>
    <div class="mealContainer" >

    <div v-if="meal"   class="meal">
        <h4>Let's make some {{meal.strArea}} {{meal.strCategory}}</h4> 
        <h2 class="recipeTitle">{{meal.strMeal}}</h2>
        <p>Here is the list of ingredients:</p>
        <div class="igrCont">
            <p>
            <ul>
              <li v-if="meal.strIngredient1">{{meal.strIngredient1}} - {{meal.strMeasure1}}</li>
              <li v-if="meal.strIngredient2">{{meal.strIngredient2}} - {{meal.strMeasure2}}</li>
              <li v-if="meal.strIngredient3">{{meal.strIngredient3}} - {{meal.strMeasure3}}</li>
              <li v-if="meal.strIngredient4">{{meal.strIngredient4}} - {{meal.strMeasure4}}</li>
              <li v-if="meal.strIngredient5">{{meal.strIngredient5}} - {{meal.strMeasure5}}</li>
              <li v-if="meal.strIngredient6">{{meal.strIngredient6}} - {{meal.strMeasure6}}</li>
              <li v-if="meal.strIngredient7">{{meal.strIngredient7}} - {{meal.strMeasure7}}</li>
              <li v-if="meal.strIngredient8">{{meal.strIngredient8}} - {{meal.strMeasure8}}</li>
              <li v-if="meal.strIngredient9">{{meal.strIngredient9}} - {{meal.strMeasure9}}</li>
            
            </ul>
            </p>
            <button id="buttonLeft"
                    :class="{buttonDisabled : mealButtonFlagLeft}" 
                    @click="handleAddToFavotites(meal, 'buttonLeft')" 
                    ><span class="material-icons">favorite</span>Add to your favorites
            </button>
        </div>
        
        <img id="dinner" :src="meal.strMealThumb">
        <img class="coock" src="@/assets/chefa.png">
        <p>{{meal.strInstructions}}</p>
    </div>
     
    <div v-if="meal2"   class="meal">
        <h4>Let's make some {{meal2.strArea}} {{meal2.strCategory}}</h4> 
        <h2 class="recipeTitle">{{meal2.strMeal}}</h2>
        
        <p>Here is the list of ingredients:</p>
        <div class="igrCont">
        <p>
        <ul>
          <li v-if="meal2.strIngredient1">{{meal2.strIngredient1}} - {{meal2.strMeasure1}}</li>
          <li v-if="meal2.strIngredient2">{{meal2.strIngredient2}} - {{meal2.strMeasure2}}</li>
          <li v-if="meal2.strIngredient3">{{meal2.strIngredient3}} - {{meal2.strMeasure3}}</li>
          <li v-if="meal2.strIngredient4">{{meal2.strIngredient4}} - {{meal2.strMeasure4}}</li>
          <li v-if="meal2.strIngredient5">{{meal2.strIngredient5}} - {{meal2.strMeasure5}}</li>
          <li v-if="meal2.strIngredient6">{{meal2.strIngredient6}} - {{meal2.strMeasure6}}</li>
          <li v-if="meal2.strIngredient7">{{meal2.strIngredient7}} - {{meal2.strMeasure7}}</li>
          <li v-if="meal2.strIngredient8">{{meal2.strIngredient8}} - {{meal2.strMeasure8}}</li>
          <li v-if="meal2.strIngredient9">{{meal2.strIngredient9}} - {{meal2.strMeasure9}}</li>
         
        </ul>
        </p>
        <button id="buttonRight" 
                :class="{buttonDisabled : mealButtonFlagRight}" 
                @click="handleAddToFavotites(meal2,'buttonRight')"
                ><span class="material-icons">favorite</span>Add to your favorites
        </button>
        </div>
        <img id="dinner" :src="meal2.strMealThumb">
        <img class="coock" src="@/assets/chefa.png">
        <p>{{meal2.strInstructions}}</p>
    </div>
    
     
      
  </div>
</template>

<script>
import getMealById from '@/tools/getMealById.js'
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue'
import getUser from '@/tools/getUser.js'
import useCollection from '@/tools/useCollection'
import getCollection from '@/tools/getCollection'
import { timestamp } from '@/firebase/config.js'

export default {
  name: 'Home',
   setup(){
     
      const mealButtonFlagLeft = ref(false)
      const mealButtonFlagRight = ref(false)
      const {meal, error, getRandomMeal} = getMealById()
      const {meal: meal2, error:error2, getRandomMeal:getMeal2} = getMealById()
      const { user } = getUser()
      const { error:errorCollecton, addDoc, isPending, docInCollection} = useCollection('favorites')
      let favoriteMeals = ref([])

      const handleEvent = async () =>{
          const { documents: favorites} = await getCollection(
          'favorites',
          ['userId', '==', user.value.uid ] )

          favoriteMeals = await ({...favorites})
          //  await console.log('FAVORITES: ',favoriteMeals.value)
          // mealButtonFlagLeft.value =await  docInCollection(favorites.value, meal.idMeal)
          // mealButtonFlagRight.value =await docInCollection(favorites.value, meal2.idMeal)
      }
     
      onMounted( async () => {
          mealButtonFlagLeft.value = false
          mealButtonFlagRight.value = false
          const res = await getRandomMeal()  
          const resp = await getMeal2()
      
      })


      const handleAddToFavotites = async (recipe, id) => {
        
            isPending.value = true
            console.log(recipe)
            const res = await addDoc({
                 mealId: recipe.idMeal,
                 mealName: recipe.strMeal,
                 mealArea: recipe.strArea,
                 mealCategory: recipe.strCategory,
                 mealPhotoUrl: recipe.strMealThumb,
                 userId: user.value.uid,
                 userName: user.value.displayName,

                 createdAt: timestamp()
                 })
        
         if(!error.value) {
              console.log('Meal with id: ',recipe.idMeal, ' was added to database.')
         }
         if(recipe.idMeal == meal.value.idMeal) { mealButtonFlagLeft.value = true}
         if(recipe.idMeal == meal2.value.idMeal) { mealButtonFlagRight.value = true}
         document.getElementById(id).innerHTML = "Added to favorites"
         document.getElementById(id).disabled = true
         isPending.value = false
      }
      

      return { meal,
               meal2, 
               error, 
               handleAddToFavotites, 
               user, 
               mealButtonFlagLeft, 
               mealButtonFlagRight, 
               docInCollection, 
               favoriteMeals, 
               handleEvent}
  }
}
</script>

<style scoped>
.meal{
  /* background: rgb(246, 246, 246); */
  text-align: center;  
  border-top: 1px solid;
  border-bottom: 1px solid;
  /* box-shadow:inset 0px 0px 85px rgba(50, 50, 50, 0.2); */
  /* border-radius: 20px; */
}
.meal .igrCont{
  display:grid;
  grid-template-columns: 5fr 2fr;
  
}
.meal .igrCont button{
  width: 100%;
  max-height: 60px;
  align-self: start;
  display: flex;
  align-items: center;
}
.meal .igrCont button:disabled{
  opacity: 0.4;
}
/* .buttonDisabled{
  display: none;
  opacity: 0.6;
} */
.welcome{
  text-align: center;
}
#dessert{
  margin: 20px;
  width: 60%;
}
#dinner{
  margin: 20px 0;
   width: 100%;
    max-height: 300px;
    object-fit: cover;
}
.mealContainer .meal a{
  
  margin: 10px;
}
h4{
  padding: 10px 0;
  text-align: left;
}
.meal a{
  text-align: center;
  width: 92%;
}
ul{
  padding: 5px 20px;
}
#luigi{
  max-height: 100px;
  max-width: 100px;
  margin:0;
  transform: translateY(20px);
  z-index: 1;
 
}
</style>