  //Vue has component architectrue that let us use bits of code wherever needed
  Vue.component('cat-list',{
    props:['caties'], //passing data to the component;When a value is passed to a prop attribute, it becomes a property on that component instance.
    template: `
  <ul>
    <li v-for="cat in caties">{{cat.name}}</li> 
  </ul>
  `
})

var app = new Vue({
  el: "#root",
 component:['cat-list'],
  data: {
    cats: [{ name: "linda" }, { name: "bosco" }, { name: "merry" }],
    newCat: ""
  },
  methods: {
    addKitty: function() {
      this.cats.push({ name: this.newCat });
      this.newCat = "";
    }
  },
  filters:{
    capitalize: function(value){
      return value.toUpperCase();
    },
    kittify: function(value){
      return value+"y"
    }
  },
  computed:{
    kittyfiName: function(){
       if(this.newCat.length>2){
         return this.newCat+"y"
       }
    }
  },
  destroyed:function(){ //part of Vue lifecycle method
    console.log('destroyed')
  }


});

//cannot call destroyed lifecycle fuction in such a small project hence calling it explicitly by this method in which the app will destroy after 5 sec
setTimeout(function(){
app.$destroy();
},5000);
