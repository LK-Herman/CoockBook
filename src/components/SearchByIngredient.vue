<template>
<div v-if="caiList" >
     <form v-if="isSearchBarVisible" class="searchForm" @submit.prevent="handleSubmit">
        
        <label>Search by ingredient:</label>
        <input type="text" placeholder="type in a ingredient name..." v-model="searchedIngredient">
        
        <button id="searchButton">Search</button>
    </form>
        <div class="areaPage">
                <div class="categoryTitle">
                    <div id="luigiDiv">
                        <img id="luigi" src="@/assets/chefa.png" @click="handleReload">
                    </div>
                    <h1>Food ingredients</h1>
                </div>
        <div v-if="!meals">
        <div class="areaMenu" v-if="caiList">
                <div class="areaTitle"  v-for="ingredient in filteredIngredients" :key="ingredient.idIngredient">
                    <p class="singleOne" @click="handleClickIngredient(ingredient.strIngredient)" >{{ingredient.strIngredient}}</p>
                </div>
        </div>
        </div>
        <div class="showSearch">
           <a @click="isSearchBarVisible = true" class="btn"> SHOW SEARCH FORM</a>
        </div>
        <div class="mealBar">
            <MealList v-if="meals" :meals="meals"/>
        </div>

            <!-- <router-link :to="{name:'MealDetails', params: {id: playlist.id} }"> -->
            <!-- </router-link> -->

        </div>
</div>
<div v-if="!caiList" class="lds-circle"><div></div></div>
</template>

<script>
import MealList from './MealList.vue'
import getMeal from '@/tools/getMeal.js'
import { onMounted, onUpdated, ref } from 'vue'
export default {
components:{ MealList },
setup(){
    const {caiList, error, getCAIList, meals, getMealsByCAI} = getMeal()
    const filteredIngredients = ref(null)
    const searchedIngredient = ref(null)
    const isSearchBarVisible = ref(true)

    onMounted(async ()=> {
        const res = await getCAIList('i')
        filteredIngredients.value = caiList.value
    })
   

    const handleSubmit = () =>{
            filteredIngredients.value = caiList.value.filter((ingredient) => {
                // searchedIngredient.value = searchedIngredient.value.toLowerCase()
                // ingredient.strIngredient = ingredient.strIngredient.toLowerCase()
                return ingredient.strIngredient.toLowerCase().includes(searchedIngredient.value.toLowerCase())
            })
            console.log(filteredIngredients.value)
            if (filteredIngredients.value.length) isSearchBarVisible.value = false
        }
    const handleReload = () => {
        location.reload();
    }

    const handleClickIngredient = async (ingredient) => {
        const res = await getMealsByCAI('i',ingredient)
        console.log(res)
    }

    return{ caiList, error, handleClickIngredient, meals, filteredIngredients, searchedIngredient, handleSubmit, isSearchBarVisible, handleReload }
}
}
</script>

<style scoped>
.areaPage{
     margin-top: -30px;
}
.areaTitle{
    font-size: 0.80em;
    font-weight: 400;
    margin: 0px 10px 0px 10px;
    transition: ease 0.4s;
    padding: 4px 4px;
    cursor: pointer;
}
#luigiDiv{
  text-align: center;
  display: flex;
  justify-content: center;
}
#luigi{
  max-height: 100px;
  max-width: 100px;
  margin:0;
  transform: translateY(20px);
  z-index: 1;
 
}
h1{
    background: white;
    padding: 0 15px;
    text-align: center;
    color: var(--button1);
    font-family: 'Great Vibes', cursive;
    font-size: 3em;
}
.areaMenu{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top:10px;
    margin-bottom: 40px;
    padding: 20px 0;
   
    border-radius: 0px;
    
    border-bottom: solid 2px var(--button1);
    border-top: solid 2px var(--button1);

    /* box-shadow: 0px 3px 4px rgba(50,50,50,0.4); */
}
.categoryTitle{
  transform: translateY(30px);
  display: flex;
  flex-direction: column;
  align-items: center;
}


.mealListItem{
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
  .mealListItem:hover{
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
.mealBar{
    margin-top: 40px;
}


.searchForm{
    max-width: 500px;
    background:none;
    border: none;
    box-shadow: none;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 6fr 1fr ;
    grid-template-rows:24px 40px;
    column-gap: 20px;
    row-gap: 15px;
    /* justify-self: center; */
    padding: 10px 20px ;

}
.searchForm #searchButton{
    place-self:center;
    /* margin-bottom: 0; */
}
.searchForm #searchBar{
    place-self: center;
}
.searchForm input{
    place-self: center;
    margin-bottom: 0;
    margin-top:0;
}
.searchForm label{
   grid-column-start: 1;
   grid-column-end: 3;
}
.showSearch{
    text-align: center;
}
</style>