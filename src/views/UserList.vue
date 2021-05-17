<template>
  <div class="imageTitle">
       <div>
            <h2>My Favorites</h2>
            <div v-if="playlists">
                <ListView :favorites="favorites" />
            </div>
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

        console.log(favorites)            
        
        return { favorites, user }
    }

}


</script>

<style>

</style>