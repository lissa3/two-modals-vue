<template>
  <div class="cart" >
    
      <div class="d-flex justify-content-around">
        <!-- <div class="one-line prod-img">
          <img :src="prod.image" alt="img" class="rounded">
        </div> -->
        <div class="one-line prod-title">
          <h4>{{prod.name}}</h4>
        </div>
        <div class="one-line plus" @click="addOne">
          <span>+</span>
        </div>
        <div class="one-line">
          <input type="text"  :value="prod.num" @change="getAmount">
          <input type="text" v-model="amount" @change="getAmount">
          <p v-if="errMsg" class="red">{{errMsg}}</p>
        </div>
        <div class="one-line minus" @click="minOne">
          <span>-</span>
        </div>
       
      <div class="one-line closeX" @click="$emit('removeItem',prod.id)">
          X
        </div>
        
      </div>     
  </div>     
</template>
<script>

function inpValid(inp){
  return Number.isInteger(Number(inp))
}
export default {
  name:'CartItem',
  props:['prod'],
  data(){
    return {
      amount:null,
      inputValid:false,
      errMsg:"",
      
    }
  },
  methods:{
    addOne(){
      this.errMsg = "";
      this.amount = Number(this.amount)+1;
        return this.amount;
    },
    minOne(){
      this.errMsg = "";
        this.amount =Number(this.amount)-1
        if(this.amount >=1){
          return this.amount;
        }else{
          this.amount = null;
          this.errMsg = "Amount can't be negative"
        }
      },      
    getAmount(){
      this.errMsg = "";
      console.log("starting with getAmount");
      if(!inpValid(this.amount)){
        this.errMsg = 'not a valid input';
        this.amount = null;
      }if(Number(this.amount)<0){
        console.log("is negative?",Number(this.amount));
        this.errMsg = 'amount can not be negative'
        this.amount = 0;
      }
      else{
        this.inputValid = true;
      }    
    },
    // removeItem(itemId){
    //   console.log("removing item with id:",itemId);
    //   this.$emit('delItem',itemId);    

    // }
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