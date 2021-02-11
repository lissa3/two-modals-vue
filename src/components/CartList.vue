<template>
  <div class="cart-list">
   My image:  <img :src="img" alt="">
    <div class="row">
        <div class="col col-md-12" >
          <cart-list-item v-for="prod in prodList" :key="prod.id"
          :prod="prod" @remove="$emit('remove',$event)"
          @update="$emit('update',$event)"
          ></cart-list-item>
        </div>
      </div> 
  </div>
</template>

<script>
// import {mapMutations} from 'vuex';
import geit from '@/assets/geit.jpg'
import CartItem from '@/components/CartItem.vue'
export default {
  props:['prodList'],
  components:{
    'cart-list-item':CartItem
  },
  data(){
    return{
      img:geit
    }
  },
  methods:{
 
  }
}
</script>
<style>
.cart-list{
  background-color:#f3ecec;  
}
.item{
  display: flex;
  justify-content: space-evenly;
  background-color: darkkhaki;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray; 

}
.item-part{
  display: flex;
  justify-content:space-around;
  padding: 1rem;;
}
.change{
  display:flex;
  justify-content: space-around;
}

.plus,.minus{
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width:30px;
  height:30px;
  margin:1rem;
  border:1px solid black;
}
.geit{
  border-radius: 50%;
  width:50px;
  height:50px;
}

</style>