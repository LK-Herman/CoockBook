import { ref } from 'vue'

const getMealById = () => {


const meal = ref(null)
const error = ref(null)
const uri = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const randomUri = 'https://www.themealdb.com/api/json/v1/1/random.php'
const getMeal = async (id) => {
      try {
        let data = await fetch(uri + id)
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
    return {meal, error, getMeal, getRandomMeal}
}
    export default getMealById