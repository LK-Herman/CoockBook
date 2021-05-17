<template>
  <div v-for="favMeal in favorites" :key="favMeal.favoriteMealId">
      <!-- <router-link :to="{name:'MealDetails', params: {id: playlist.id} }"> -->
      <div class="testing">
          
             <img class="image" :src="favMeal.mealPhotoUrl">
              <p>{{ favMeal.userName }}</p>
              <p>{{favMeal.mealName}} - {{favMeal.mealArea}} {{favMeal.mealCategory}}</p>
              <h3>{{ favMeal.mealId }}</h3>
              <div class="favoriteButtons">
                  <button>Go to</button>
                  <button class="delBtn">Remove</button>
              </div>
          
      </div>
      <!-- </router-link> -->
  </div>
</template>

<script>
export default {
props: ['favorites'],

setup(){
  
  return {}
}
}
</script>

<style scoped>
.testing{
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  justify-self: start;
  align-self: center;
  align-items: center;
  column-gap: 15px;
  padding: 20px;
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
    margin-right:  auto;
    max-width: 200px;
    max-height: 100px;
    object-fit: cover;
    border-radius: 10px;
    /* border: solid 5px white; */
    box-shadow: 2px 2px 3px rgba(50,50,50,0.5); 
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

</style>