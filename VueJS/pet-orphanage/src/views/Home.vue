<template>
  <div class="home-view-container">
    <h2>Adoption Centre for pets</h2><br>
    <b>Total Pets Available:</b> {{animalCount}} 
    <p><b>cats Available:</b>{{getAllCats}} </p>
    <br>

    <button @click="togglePetForm" class="btn btn-primary">Add a New Pet</button>
    <br><br>
     <b-form @submit.prevent="handleSubmit"  v-if="showPetFrom">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="petFormData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="petFormData.species"
          :options="['cats','dogs']"
          required
        ></b-form-select>
      </b-form-group>

     <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type='number'
          v-model="petFormData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button> &nbsp;
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'Home',
  computed:{
...mapGetters([
    'animalCount',
    'getAllCats'
])
  },  
  data(){
    return {
      showPetFrom : false,
      petFormData:{
            name:'',
            age: 0,
            species: null
      }
    }
  },
  methods:{
    ...mapActions([
      'addPet'
    ]),
    togglePetForm(){
      this.showPetFrom=true;
    },
    handleSubmit(){ 
      const {species, name, age} = this.petFormData ;
      const payLoad = {
        species,
        pet:{
          name,
          age
        }
      }
          this.addPet(payLoad);
          this.petFormData={
              name:'',
            age: 0,
            species: null
          }
           this.showPetFrom=false
    }
  }
}
</script>
