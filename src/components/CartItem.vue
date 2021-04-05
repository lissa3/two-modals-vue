<template>
  <div class="cart" >    
      <div class="d-flex justify-content-around">
        <!-- <div class="one-line prod-img">
          <img :src="prod.image" alt="img" class="rounded">
        </div> -->
        <div class="one-line prod-title">
          <h4>{{prod.name}}</h4>
        </div>
        <div class="one-line minus" @click="subtractOne(prod.id,prod.num)">
          <span>-</span>
        </div>
        <div class="one-line">
          <input type="text"  :value="prod.num" @blur="changeVal(prod.id,$event)">          
          <p v-if="errMsg" class="red">{{errMsg}}</p>
        </div>
        <div class="one-line plus" @click="addOne(prod.id,prod.num)">
          <span>+</span>
        </div>       
      <div class="one-line closeX" @click="$emit('remove',prod.id)">
          X
        </div>
        
      </div>     
  </div>     
</template>
<script>

// function inpValid(inp){
//   return Number.isInteger(Number(inp))
// }
export default {
  name:'CartItem',
  props:['prod'],
  data(){
    return {
      inputValid:false,
      errMsg:"",
      
    }
  },
  methods:{
    addOne(prodId,prodNum){
      this.$emit('update',{id:prodId,num:prodNum+1})
    },
    subtractOne(prodId,prodNum){
      this.errMsg = "";
      this.$emit('update',{id:prodId,num:prodNum-1})        
    },
    changeVal(prodId,event){
      console.log("id",prodId);
      console.log("event",event);
      this.$emit('update',{id:prodId,num:event.target.value})

    } 
        
    
  }
} 
</script>
<style>
.red{
  color:red;
}

.closeX{
  color:red;
  cursor: pointer;
}
.plus,.minus{
  background-color: darkgrey;
  width:30px;
  height:30px;
  border-radius: 50%;
  cursor: pointer;
}
.prod-img{
  background-color: darkgray;
  width:150px;
  height: 150px;
  border-radius: 50%;
}
</style>