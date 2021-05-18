<template>
  <div>
            <div class="headerFavorites">
                <h2>Hello Chef!</h2>
                <h4>Here's your favorites:</h4>
            </div>
            
            <div v-if="favorites">
                
                <ListView :favorites="favorites" />
            </div>
       
  </div>
</template>

<script>
import getCollection from '@/tools/getCollection.js'
import getUser from '@/tools/getUser.js'
import ListView from '@/components/ListView.vue'
import { computed } from 'vue'
export default {
    components: { ListView },
    setup(){
        const { user } = getUser()
        const { documents: favorites} = getCollection(
            'favorites',
            ['userId', '==', user.value.uid ] )

               
        
        return { favorites, user }
    }

}


</script>

<style>
.headerFavorites{
    text-align: center;
    margin: 30px;
}
</style>