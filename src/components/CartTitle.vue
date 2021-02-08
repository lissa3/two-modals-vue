<template>
  <div class="title">
    Welcome, <strong>{{userName}}</strong>
  </div>
</template>
<script>
export default {
  props:['userName']
}
</script>
<style>
.title{
  background-color: cornsilk;
}
</style>