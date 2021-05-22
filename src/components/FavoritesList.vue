<template>
  <div v-for="favMeal in favorites" :key="favMeal.favoriteMealId">
      <!-- <router-link :to="{name:'MealDetails', params: {id: playlist.id} }"> -->
      <div class="testing">
          
             <img class="image" :src="favMeal.mealPhotoUrl">
              <div>
                  <p id="titleMeal">{{favMeal.mealName}}</p>
                  <p>{{favMeal.mealArea}} {{favMeal.mealCategory}}</p>
              </div>

              <h3>{{ favMeal.mealId }}</h3>
              <p>Ingredients</p>
              <div class="favoriteButtons">
                  <button class="delBtn">Remove</button>
              </div>
          
      </div>
      <!-- </router-link> -->
  </div>
</template>

<script>
import useDocument from '@/tools/useDocument.js'
export default {
props: ['favorites'],


setup(){
  const { error, deleteDoc, isPending } = useDocument('favorites', )

  return {}
}
}
</script>

<style scoped>
.testing{
  display: grid;
  grid-template-columns: 1fr  3fr 1fr 1fr 1fr;
  justify-self: start;
  align-self: center;
  align-items: center;
  column-gap: 15px;
  padding: 20px;
  border-radius: 100px;
  margin:15px 100px ;
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
.favoriteButtons{
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  overflow: hidden;
  padding: 15px 15px;
  margin:0;
}
.favoriteButtons button{
  background: var(--button1);
  color: white; 
  padding: 34px 10px;
  border-radius: 50%;
  font-weight: 400;
}

.delBtn{
  background: var(--button2);
}
.delBtn:hover{
  background: var(--button2);
}
#titleMeal{
    font-family: 'Great Vibes', cursive; 
    font-size: 2em;
}
</style>