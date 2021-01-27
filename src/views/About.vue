<template>
  <div class="about">
    <!-- About vue = controls teleported modals to App.vue -->
    <h1>This is an about page</h1>
  <button @click="showOne">Show modal one</button>
  <button @click="showTwo">Show modal two</button>
  <hr>
  <p>Lorem, ipsum dolor 
    sit amet consectetur adipisicing elit. Hic ad delectus laudantium quod, atque, eum praesentium eveniet mollitia minus voluptas accusantium, laborum architecto dolores. Maxime minima impedit dolores cupiditate laboriosam optio iusto, in cumque! Laboriosam fuga iusto deserunt! Dolorem sit veritatis id soluta eligendi quis! Reiciendis id dolor necessitatibus incidunt!
  </p>
  <teleport to=".modals" >
    <div class="wrapper" v-if="above">
      <div class="modal-kern">
        <h4>Model 1</h4>
      </div>
    </div>
  </teleport>
  <teleport to=".modals" >
    <div class="wrapper" v-if="below">
      <div class="modal-kern2">
        <h4>Model 2</h4>
      </div>
    </div>
  </teleport>
  </div>
</template>
<script>
export default {
  name: 'About', 
  data(){
    return{
      above:false,
      below:false
    }
  },
  methods:{
    showOne(){
      return this.above = !this.above;
    },
    showTwo(){
      return this.below = !this.below;
    }
  } 
}
</script>
<style scoped>
.modal-kern{
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width:500px;
  height:200px;
  background-color: coral;
}
.modal-kern2{
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  height:300px;
  background-color:darkgreen;
}


</style>

