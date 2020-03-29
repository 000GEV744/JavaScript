//new Vue() create an instance whchih is the root of the Vue application
//so this will connect with div having id = app; hence our Vue instance is plugegd with that div

new Vue({
  el: "#root",
  data: {
    greeting: "Hello Vue",
    count: 0
  }
});

//so the Vue instance is the heart of the application, it plugins to the element
//in the dom  and that DOM may use expression to show the instances of that data
new Vue({
  el: "#root1",
  data: {
    email: "anuj60360@gmail.com"
  }
});
