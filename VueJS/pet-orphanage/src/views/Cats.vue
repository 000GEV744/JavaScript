<template>
   <div>
   <PetTable
   species="cats"
   :pets='cats'
   />
  </div>
</template>
<script>
// import cats from "@/data/cats";
import { mapState } from 'vuex'
import PetTable from '../components/petTable'

export default {
  components:{
      PetTable
  },
    data(){
      return {}
    },
   computed:{
      ...mapState([
      'cats'  //we are getting the cats data directly from the vuex store
      ]) 
   }
}

</script>