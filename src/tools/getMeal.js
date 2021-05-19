import { ref } from 'vue'

const getMeal = () => {


const meal = ref(null)
const meals = ref(null)
const error = ref(null)
const uriById = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const randomUri = 'https://www.themealdb.com/api/json/v1/1/random.php'
const uriByName = 'https://www.themealdb.com/api/json/v1/1/search.php?s='


const getMealById = async (id) => {
      try {
        let data = await fetch(uriById + id)
        if (!data.ok){
          throw Error('No data available')
        }
        meal.value = await data.json()
        // = meal.value.meals[0]
        meal.value = meal.value.meals[0]

      } 
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    const getMealByName = async (mealName) => {
      try {
        let data = await fetch(uriByName + mealName)
        if (!data.ok){
          throw Error('No data available')
        }
        meals.value = await data.json()
        // = meal.value.meals[0]
        meals.value = meals.value.meals

      } 
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    const getRandomMeal = async () => {
        try {
          let data = await fetch(randomUri)
          if (!data.ok){
            throw Error('No data available')
          }
          meal.value = await data.json()
          // = meal.value.meals[0]
          meal.value = meal.value.meals[0]
  
        } 
        catch (err) {
          error.value = err.message
          console.log(error.value)
        }
      }
    return {meal, meals, error, getMealById, getRandomMeal, getMealByName}
}
    export default getMeal