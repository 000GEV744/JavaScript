<template>
    <div>
       <h1> {{ animal.name}} ({{$route.params.species}})</h1>
        <p>Age: {{ animal.age}} years old</p>
        <p>Breed: {{animal.breed}}</p>
    </div>
</template>

<script>
// import cats from "@/data/cats";
import { mapState } from 'vuex'

export default {
    data(){
      return {
          animal:{}
      }
    },

   computed:{
      ...mapState([
      'cats' , 'dogs' //we are getting the cats data directly from the vuex store
      ]) 
     //    cats(){                             this is exactly similar as ...mapstate() as sometimes we do have lot of elements in the state
     //        return this.$store.state.cats
     //    }  
   },
   mounted(){
         const animal = this[this.$route.params.species][this.$route.params.id]
         this.animal= animal;  
   }
}

</script>