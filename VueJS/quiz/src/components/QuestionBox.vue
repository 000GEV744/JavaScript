<template>
    <div class="question-box-container">
  <b-jumbotron>
    <template >
    {{currentQuestion.question}}
    </template>

    <hr class="my-4">
    <b-list-group>
  <b-list-group-item  
  v-for="(option,index) in shuffledAns" :key="index" 
  @click="selected(index)"
   v-bind:class="answerClass(index)"
   >
     {{option}}
  </b-list-group-item>
</b-list-group>
    
    <b-button @click="submitAnswer" variant="primary" :disabled=" selectedAns === null || answered ">
        Submit
    </b-button>
    <b-button @click="nextQuestion" variant="success" >
        Next
    </b-button>
  </b-jumbotron>
</div>
</template>



<script>
import _ from 'lodash'
export default {
 props:{
     currentQuestion: Object,
     nextQuestion: Function,
     increment: Function
     },

//data
data(){
    return{
        selectedAns: null,
        correctIndex:null,
        shuffledAns:null,
        answered: false //to disable the button as soon as the user aswered the question.
         }
     },


//watch
watch:{
//Second Method::   here "Immediaate" attribute will run the handler() even when the current quetion gets passed from the props for the first time and
// also for the subsequent changes in the currentQuestion.
currentQuestion:{
    
    immediate:true,
    handler(){
        this.answered=false
        this.selectedAns= null;
        this.shuffleOptions()
    }
}
//first method:: instead of using this as a function we can also use object
//  currentQuestion(){
//      this.selectedAns= null;
//   this.shuffleOptions()
//  } 
//and to resolve the issue of shuffling for the first question, we can use mounted: function(){this.shuffleOptions()}
     },


//computed     
computed:{
    options(){
        let  options = this.currentQuestion.incorrect_answers;
         options.push(this.currentQuestion.correct_answer)
        return options;
         }
        },


//methods
methods:{
            selected(index){
            this.selectedAns = index
            },
            shuffleOptions(){
                let  options = this.currentQuestion.incorrect_answers;
                options.push(this.currentQuestion.correct_answer)
                this.shuffledAns = _.shuffle(options)
                this.correctIndex = this.shuffledAns.indexOf(this.currentQuestion.correct_answer)
                
                ;
            },
            submitAnswer(){
             let isCorrect = false;
             if(this.selectedAns==this.correctIndex)  {
                    isCorrect=true
             } 
             this.answered = true;
             this.increment(isCorrect)
            },

        answerClass(index){
            let showClass = ''
            if(!this.answered && this.selectedAns==index) {
                showClass = 'selected';
            }
            else if (this.answered && this.correctIndex === index){
                    showClass ='correct';
            }
            else if(this.answered && this.selectedAns === index && this.correctIndex !== index ){
            showClass='incorrect' 
            }
            return showClass;
   
        }
}
        // mounted: function(){
        //     this.shuffleOptions()
        //     }
}
</script>






<!--CSS-->
<style scoped>

.list-group{
margin-bottom: 15px;
}
.list-group-item:hover{
background: #EEE;
cursor: pointer;
}
.btn{
    margin: 0 5px   ;
}
.selected{
    background-color: lightblue;
    }
.correct{
        background-color: lightgreen;
    } 
.incorrect{
        background-color:  rgb(233, 78, 78)

;
    } 
</style>