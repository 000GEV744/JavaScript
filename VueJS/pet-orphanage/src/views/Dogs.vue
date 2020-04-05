<template>
   <div>
      <PetTable
   species="dogs"
   :pets='dogs'
   />
  </div>
</template>
<script>
// import dogs from '@/data/dogs'
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
      'dogs'  //we are gettingcthe dogs data directly from the vuex store
      ]) 
   }
}
</script>