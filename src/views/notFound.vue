<template>
  <div class="alert-page">
      <h1>I'm a 404</h1>
      <h2>Not found</h2>
      <p>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Laborum, nulla. Sequi, i
          ventore distinctio atque cupiditate molestiae quod nobis dolorem nulla laudantium porro. Quam tempore unde sint. Fugiat praesentium doloribus repellat!
      </p>
      <p><router-link :to="{name:'Home'}">Home</router-link></p>
   
  </div>
</template>

<script>
export default {
  name: 'notFound' 
} 
</script>

<style scoped>

.alert-page{
    margin:2rem auto;
    max-width: 800px;
    background: seashell;
    color:red;
}

</style>

