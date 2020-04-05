<template>
  <div id="app">
    <Header
    :correctAnswers="correctAnswers"
    :totalQuestions="totalQuestions"
    />
    <b-container class="bv-example-row">
  <b-row>
    <b-col sm="6" offset="3">
      <QuestionBox 
      v-if="questions.length>0"
      v-bind:currentQuestion="questions[index]"
      v-bind:nextQuestion="next"
      :increment="increment"/>
    </b-col>
  </b-row>
</b-container>
    
  </div>
</template>

<script>
import Header from './components/Header'
import QuestionBox from './components/QuestionBox';

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox
  },
data:()=>{
  return {
      questions: [],
      totalQuestions :0,
      correctAnswers :0,
      index : 0
  }
  },
  methods:{
    next(){
      this.index++;
      },

      increment(isCorrect){
        if(isCorrect){
          this.correctAnswers++
        }
        this.totalQuestions++
      }
  },
  mounted:  function(){
     fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple',{
      method:'get'})
      .then((response)=>{
        return response.json()}).then((jsonData)=>{
          this.questions = jsonData.results
          })
          }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
