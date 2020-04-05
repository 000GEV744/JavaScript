<!--to get the bootsrap work here we need use a 3rd party library i.e boostrap vue and 
the command to install it is npm install vue bootstrap-vue bootstrap -->
<template>
<div>
     <b-nav tabs>
    <b-nav-item disabled><b>Rookie Quiz</b></b-nav-item>
    <b-nav-item disabled>Counter: {{correctAnswers}}/{{totalQuestions}}</b-nav-item>
  </b-nav>
  </div>
</template>

<script>
export default {
  props:{
    correctAnswers: null,
    totalQuestions:null
  }
}
</script>