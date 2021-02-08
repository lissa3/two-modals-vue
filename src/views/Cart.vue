<template>
  <div class="container">
    <!-- About vue = controls teleported modals to App.vue -->
  <div class="wrap">
    <cart-title :userName="userInfo"></cart-title>
    <cart-list :prodList="getProds"></cart-list>
    <cart-total :prodList="getProds"></cart-total>
  </div> 
  
  </div>
</template>
<script>
import CartTitle from '@/components/CartTitle.vue'
import CartList from '@/components/CartList.vue'
import CartTotal from '@/components/CartTotal.vue'
 
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  components:{     
    'cart-title': CartTitle,
    'cart-list': CartList,
    'cart-total': CartTotal  
  }, 
  data(){
    return{      
    }
  },
  methods:{
    
  },
  computed:{
    ...mapGetters(['getProds','userInfo'])
  }, 
}
</script>
<style scoped>
.container{
  max-height: 100vh;
}
.wrap{
  display: flex;
  flex-direction: column;
  align-content: space-around;  
}
</style>

