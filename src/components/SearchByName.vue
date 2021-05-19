<template>
    <form class="searchForm" @submit.prevent="handleSubmit">
        <label>Search by meal name:</label>
        <input type="text" placeholder="type in a meal name..." v-model="mealName">
        <button>Search</button>
    </form>
    <div v-if="meals">
        <div v-for="meal in meals" :key="meal.idMeal">
        
            <div class="testing">
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
        </div>
    </div>
    <div v-else>
        No results...
    </div>
</template>

<script>
import { ref } from 'vue'
import getMeal from '@/tools/getMeal.js'
const {meals, error, getMealByName} = getMeal()
export default {
    setup(){
        const mealName = ref(null)

        const handleSubmit = async () =>{
            const res = await getMealByName(mealName.value)
        }

        return {mealName, handleSubmit, getMealByName, meals, error}
    }

}
</script>

<style scoped>
.testing{
  display: grid;
  grid-template-columns: 1fr 6fr 2fr 2fr 1fr;
  justify-self: start;
  align-self: center;
  align-items: center;
  column-gap: 15px;
  padding: 8px;
  background: rgb(246, 246, 246);
    border-radius: 10px;
    margin-bottom: 15px ;
    
  transition: ease 0.5s;
  }
  .testing:hover{
    transition: ease 0.5s;
    transform: scale(1.02);
    box-shadow: 2px 2px 4px rgba(50,50,50,0.5);
  }
.image{
    margin-right: 20px;
    max-width: 240px;
    max-height: 140px;
    object-fit: cover;
    border-radius: 10px;
    /* border: solid 5px white; */
    /* box-shadow: 2px 2px 3px rgba(50,50,50,0.5);  */
}
.favoriteButtons{
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}
.delBtn{
  background: var(--button2);
}
.delBtn:hover{
  background: var(--warning);
}
#titleMeal{
    font-family: 'Great Vibes', cursive; 
    font-size: 2em;
}
.searchForm{
    margin: 20px auto;
}

</style>