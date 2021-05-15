<template>
    <div class="mealContainer">
    <div class="meal">
      <h2>Buongiorno!</h2>
      <h4>How about some <span class="blue">dessert</span>? </h4>
      <img class="coock" src="@/assets/chefa.png">
      <p>(Tu opis losowej potrawy).Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur, facere quis assumenda asperiores minus reiciendis expedita, fugit, nam laudantium quo molestiae mollitia voluptatem suscipit numquam voluptatum corporis totam velit est repellat? Nesciunt eaque, tempora praesentium, numquam, aspernatur aperiam adipisci quam voluptates laudantium doloremque eos? Necessitatibus voluptatem hic exercitationem illum labore blanditiis repellat repellendus ipsum beatae consectetur quidem molestias dolor esse quo sequi, quas obcaecati libero sit minus eius et officia dolorem saepe.</p>
      
      <img id="dessert" src="https://www.themealdb.com/images/category/dessert.png">
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, laudantium! Sed consequatur, facere quis assumenda asperiores minus reiciendis expedita, fugit, nam laudantium quo molestiae.</p>
             
       
       <img class="coock" src="@/assets/chefa.png">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, laudantium! Sed consequatur, facere quis assumenda asperiores minus reiciendis expedita, fugit, nam laudantium quo molestiae mollitia voluptatem suscipit numquam voluptatum corporis totam velit est repellat? Nesciunt eaque, tempora praesentium, numquam, aspernatur aperiam adipisci quam voluptates laudantium doloremque eos? Necessitatibus voluptatem hic exercitationem illum labore blanditiis repellat repellendus ipsum beatae consectetur quidem molestias dolor esse quo.</p>
      
    </div>
    
    <div class="meal">
      
        <h2>Let's make some food! </h2>
        <img class="coock" src="@/assets/chefa.png">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur pariatur laborum, ad dolorem asperiores cumque atque aut, dolor aperiam natus voluptatibus hic, quibusdam facere provident modi ullam facilis? Sapiente adipisci inventore reprehenderit voluptate eaque labore voluptatibus error neque, harum quo perferendis architecto praesentium rem blanditiis atque expedita asperiores provident aliquam quae odit totam eveniet necessitatibus tempora. Explicabo facere voluptatibus ut corporis ipsam earum magnam sint aspernatur laborum dolorem! Possimus iste nulla velit deleniti iusto. Dolorem perferendis optio tempora necessitatibus illum doloremque, vel sed expedita dignissimos minima commodi, ipsa deleniti! Natus cumque, cum animi fuga qui recusandae consequatur, nemo repellat, non suscipit optio voluptatibus consectetur possimus ipsa vel unde earum aliquam amet nobis! Iste, illo saepe magnam impedit, reprehenderit animi accusantium tempora ad in vitae veritatis officiis. Non excepturi minus deserunt, culpa at doloremque molestiae. Necessitatibus cupiditate, eaque, neque, quas repellendus maxime dolorum aspernatur repellat praesentium eos voluptates? Quasi nulla blanditiis saepe ipsam consectetur beatae porro, architecto aspernatur doloribus consequatur fugit, facere, itaque perferendis ea explicabo! Laborum, harum error itaque ab iure doloribus odio repudiandae praesentium voluptate, quaerat, cupiditate ea molestiae! Quam sed rerum ex architecto cupiditate autem fugiat temporibus iste quae dolorum molestiae, atque praesentium quasi, adipisci exercitationem. Natus, possimus!
        </p>
    </div>
     <div class="meal">
       <h2>Let's make some food! </h2>
      <p>
      Oudiandae praesentium voluptate, quaerat, cupiditate ea molestiae! Quam sed rerum ex architecto cupiditate autem fugiat temporibus iste quae dolorum molestiae, atque praesentium quasi, adipisci exercitationem. Natus, possimus!
      </p>
    </div>
    <div class="meal">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore nulla tempora magnam, accusamus aperiam sint suscipit cupiditate impedit alias explicabo facere sit sed quidem quia corrupti neque id perspiciatis, voluptatibus amet praesentium, quod ullam ratione voluptates. Aliquid obcaecati nam aperiam a modi harum iste dolorum ullam at officiis. Commodi provident laboriosam incidunt, quas quibusdam rem voluptate ipsum non ullam.
      </p>
    </div>
     
      
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup(){
   

    return {  }
  }
}
</script>

<style scoped>
.meal{
  text-align: center;  
  background: rgb(255, 255, 255);
  border-bottom: 1px solid;
}
#dessert{
  margin: 20px;
  width: 60%;
}
.mealContainer .meal a{
  
  margin: 10px;
}
h2, h4{
  padding: 10px;
  text-align: left;
}
.meal a{
  text-align: center;
  width: 92%;
}
</style>