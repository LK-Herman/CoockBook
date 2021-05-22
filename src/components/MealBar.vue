<template>
<div v-if="meal">
  <div class="mealListItem" >
          
              <img class="image" :src="meal.strMealThumb">
                <div>
                    <p :class="{titleMeal: !titleFontFlag, titleMealSmall: titleFontFlag}">{{meal.strMeal}}</p>
                    <p>{{meal.strArea}} {{meal.strCategory}}</p>
                </div>
                <div class="ingredientsList">
                    <h4 id="ingrHeader"><span class="material-icons">lunch_dining</span> Main ingredients:</h4>
                    <ul>
                            <li v-if="meal.strIngredient1">{{meal.strIngredient1}}</li>
                            <li v-if="meal.strIngredient2">{{meal.strIngredient2}}</li>
                            <li v-if="meal.strIngredient3">{{meal.strIngredient3}}</li>
                    </ul>
                    <ul >
                            <li v-if="meal.strIngredient5">{{meal.strIngredient5}}</li>
                            <li v-if="meal.strIngredient6">{{meal.strIngredient6}}</li>
                            <li v-if="meal.strIngredient7">{{meal.strIngredient7}}</li>
                    </ul>
                </div>
               
                <!-- <h3>{{ meal.idMeal }}</h3> -->
      </div>
</div>
</template>

<script>
import getMeal from '@/tools/getMeal.js'
import { onBeforeMount, onMounted, ref } from 'vue'
export default {
    props: ['passedMealId'],
    setup(props){
        const {meal, error, isPending, getMealById } = getMeal()
        let titleFontFlag = ref(false)
        
        onBeforeMount( async ()=>{
            await getMealById(props.passedMealId)
            await console.log(meal.value, ' ',meal.value.strMeal.length)
            if(meal.value.strMeal.length > 32){
                titleFontFlag.value = true
            }
                await console.log(titleFontFlag.value)
        })
       

        return {meal, error, isPending, titleFontFlag}
    }

}
</script>

<style>
.mealListItem{
  display: grid;
  grid-template-columns: 1fr 5fr 4fr;
  justify-self: start;
  justify-items: start;
  align-self: center;
  align-items: center;
  column-gap: 20px;
  padding: auto;
  border-radius: 100px;
  margin:15px auto ;
  max-width: 900px;
  border-bottom: solid 1px;
  transition: ease 0.3s;
  box-shadow: 2px 2px 3px rgba(50,50,50,0.5); 
  background: rgb(248, 248, 248);
  }

  .mealListItem:hover{
    transition: ease 0.3s;
    transform: scale(1.02);
    background: rgb(235, 235, 235);
    cursor: pointer;
    
  }
.mealListItem .image{
    margin-right: auto;
    max-width: 250px;
    max-height: 120px;
    object-fit: cover;
    border-radius: 50%;
    /* border: solid 5px white; */
    box-shadow: 2px 2px 3px rgba(50,50,50,0.5); 
}
.mealListItem .titleMeal{
    font-family: 'Great Vibes', cursive; 
    font-size: 2em;
}
.mealListItem .titleMealSmall{
    font-family: 'Great Vibes', cursive; 
    font-size: 1.6em;
}
.mealListItem .ingredientsList{
    align-self: center;
    justify-self: start;
    margin-right:60px;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 24px;
    font-size: 0.7em;
    /* border-left: solid 1px #888;  */
    padding-left: 10px ;
}
.mealListItem #ingrHeader{
    /* border-bottom: solid 1px; */
    font-size: 1em;
    font-weight: 600;
    grid-column: 1 / 3;
    margin-bottom: 4px;
}
.mealListItem .material-icons{
    color: var(--primary);
    vertical-align: middle;
    font-size: 1.8em;
}
.mealListItem li{
    margin-left:18px;
}
</style>