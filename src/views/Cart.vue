<template>
  <div class="container">
    <!-- About vue = controls teleported modals to App.vue -->
  <div class="wrap">
    <cart-title :userName="userInfo"></cart-title>
    <cart-list :prodList="prodItems" @remove="removeProd($event)"
     @update="updateCount($event)"></cart-list>    
    <cart-total :prodList="prodItems" ></cart-total>
  </div> 
  
  </div>
</template>
<script>
import CartTitle from '@/components/CartTitle.vue'
import CartList from '@/components/CartList.vue'
import CartTotal from '@/components/CartTotal.vue'
 
import {mapGetters} from 'vuex';
// import {mapGetters,mapMutations} from 'vuex';

export default {
  name: 'Cart',
  components:{     
    'cart-title': CartTitle,
    'cart-list': CartList,
    'cart-total': CartTotal  
  }, 
  data(){
    return{ 
      prodItems:[
      {       
        id: 1,
        name: "Golden Snitch ",
        price:200,
        num:1,
        image:'@/assets/geit.jpg'        
      },
      {       
        id: 2,
        name: "Unicorn Hair",
        price:100,
        num:1,
        image:'@/assets/geit.jpg'        
      },
      {       
        id: 3,
        name: "Wand",
        price:100,
        num:1,
        image:'@/assets/geit.jpg'        
      },
      {       
        id: 4,
        name: "Numbus 2000",
        price:100,
        num:1,
        image:'@/assets/geit.jpg'        
      },
      
    ]     
    }
  },
  methods:{  
    removeProd(itemId){    
      let index = this.prodItems.findIndex((item)=>{
        return item.id === itemId;
      })
      // works without return
      this.prodItems.splice(index,1);
    },
    updateCount: function(payload){
      // console.log("payload",payload);
      this.prodItems.some((item)=>{
        if(item.id==payload.id){
          item.num = payload.num
          // return true;
        }
      })
      
      // this.changeProdList(this.$state,newProdList)
    }

  },
  computed:{
    // userInfo only for reading; TODO: with getters/mutations
    ...mapGetters(['userInfo']),
    // ...mapGetters(['getProds','userInfo']),
    // ...mapMutations(['changeProdList'])
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

