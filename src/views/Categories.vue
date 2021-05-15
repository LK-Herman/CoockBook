<template>
    <div v-if="error" >{{ error }}</div>
    <h1>Food categories</h1>
    <div v-if="categories.length" class="catMenu">
        
        <div v-for="cat in categories" :key="cat.idCategory">
            <h3 class="catTitle"> {{ cat.strCategory }}</h3>
        </div>
    </div>
    <div v-if="categories.length" class="catContainer">
        <div class="catSingle" v-for="cat in categories" :key="cat.idCategory">
            
                <h3 > {{ cat.strCategory }}</h3>
                <div>
                    <img class="catImage" :src="cat.strCategoryThumb">
                    <p> {{ cat.strCategoryDescription }}</p>
                </div>
        </div>
    </div>
    <div v-if="!categories.length">Loading data...</div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Categories',
  setup(){
    const categories = ref([])
    const error = ref(null)
    const uri = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const load = async () => {
      try {
        let data = await fetch(uri)
        if (!data.ok){
          throw Error('No data available')
        }
        //posts.value = await data.json()
        categories.value = await data.json()
        categories.value = categories.value.categories
        console.log(categories)
        console.log(categories.value)

        console.log('Długość tablicy: ' + categories.value.length)
      } 
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }
  
  load()

    return { error, categories }
  }
  

}
</script>

<style scoped>
.catContainer{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
}
.catContainer h3{
text-align: center;
font-family: 'Great Vibes', cursive;
color: var(--button1);
font-size: 3em;
margin-top: 20px;
}

.catContainer p{
text-align: justify;
margin: 15px;
}
.catContainer div{
padding: 20px;
text-align: center;

}
.catContainer .catSingle{
    background: rgb(254, 254, 254);
    border-radius: 0px;
    margin: 10px;
    border-bottom: solid 2px var(--button1);
    
       
}
.catContainer .catImage{
    margin: 10px;
    border-radius: 10px;
}
.catMenu{
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:10px 10px;
    padding: 10px;
   
    border-radius: 0px;
    
    border-bottom: solid 2px var(--button1);
    border-top: solid 2px var(--button1);
}
h1{
    text-align: center;
    color: var(--button1);
    text-transform: uppercase;
}

.catTitle{
font-family: 'Great Vibes', cursive;
font-size: 2em;
margin: 20px 30px 0 30px;
transition: ease 0.6s;
padding: 10px;
cursor: pointer;
}
.catTitle:hover{
    color: var(--button1);
    transition: ease 0.6s;
}
</style>