<template>
  <div class="total">
    
    <span>Total: {{totalSum}}</span>
    <button class="pay-btn">Pay</button>
  </div>
</template>

<script>
// dif .map() vs .forEach() no change vs change initial arr (fastvs slow)
// https://codeburst.io/javascript-map-vs-foreach-f38111822c0f
export default {
  props:['prodList'],
  computed:{
    totalSum(){
      let total = 0
      // can be also forEach
      this.prodList.map(item=>{
        total +=item.price
      })
      return total;
    }
  }
}
</script>
<style>
.total{
  background-color: cornsilk;
  text-align: center;
}
.pay-btn {
  background-color:#ad9343;
  border-radius: 20px;
  color:white;
  padding:15px 30px;
  margin:5px;
}

</style>