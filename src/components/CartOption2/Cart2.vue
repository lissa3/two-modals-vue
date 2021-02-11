<template>
  <div class="container">    
  <div class="wrap">
    <h1>Shopping Cart (without components)</h1>
    <div class="display-cart-state">
      <!-- <div class="cart-info">Total items</div> -->
      <div class="cart-info">Amount products:{{prodAmount}}</div>
      <div class="cart-info">Total: ${{getAmount}}</div>
      <div class="closeX">
        <button class="btn btn-danger" @click="emptyCart">Empty Cart</button>   
      </div> 
      
    </div>
      <div class="row">
        <div class="col col-md-12" >
          <div class="cart" v-for="prod in products" :key="prod.id">    
            <div class="prod-name equal">
              <h5>{{prod.name}}</h5>
            </div>
            <!-- <div class="prod-item prod-img">
              <img :src="prod.image" alt="img">               
            </div>-->
            <div class="calc-block equal">
              <div v-if="prod.added" class="minus" @click="subtructOne(prod.id)">
                <span>-</span>
              </div>
              <div class="amount-input">
                <div  v-if="prod.added" class="amount-input-item">
              <input type="text" :value="prod.num" @blur="getUserInp(prod.id,$event)"> 
                </div>
                <div v-if="errMsg" class="amount-input-item">
                  <p v-if="errMsg" class="red">{{errMsg}}</p>
                </div>
                <div class="amount-input-item">
                  <button class="btn btn-success"
                  @click="addToCart(prod.id)"
                  >Add to cart</button>
                </div>                      
              </div>
              <div v-if="prod.added" class="plus" @click="addOne(prod.id)">
                <span>+</span>
              </div>
            </div>               
            <div class="sub-cart-info">
              <p><strong>Item Info</strong></p>
              <div>Price for 1 item: ${{prod.price}}</div>
              <div class="added" v-if="prod.added">
                <div>Amount items added: </div>
                <div>Sub-Total:  </div>
              </div>
            </div> 
            <!-- <div class="closeX" @click="deleteProduct(prod.id)">
                X
            </div>                  -->
        </div>     
      </div>
      <!-- if item is already incart  -->
    </div>       
  </div>   
</div>
</template>
<script>
export default {
  name: 'Cart2',  
  data(){
    return{ 
      cart:[],
      prodAmount:0,
      itemAmount:"",
      products:[
      {       
        id: 1,
        name: "Golden Snitch ",
        price:10,
        num:1,
        image:'@/assets/geit.jpg',
        added:false        
      },
      {       
        id: 3,
        name: "Unicorn Hair",
        price:20,
        num:1,
        image:'@/assets/geit.jpg' ,
        added:false       
      },
      {       
        id: 4,
        name: "Wand",
        price:25,
        num:1,
        image:'@/assets/geit.jpg',
        added:false       
      },
      {       
        id: 14,
        name: "Numbus 2000",
        price:300,
        num:1,
        image:'@/assets/geit.jpg',
        added:false        
      },
      
    ],
      errMsg:"",
      errSubtruct:""     
    }
  },
  methods:{ 
    addToCart(prodId){
      console.log("found",prodId);
      this.products.filter((item)=>{
          if(item.id == prodId&&!item.added){
            item.added = true;
            this.prodAmount +=1;
            this.cart.push(item);
            // return item; // do I need it now????
          }else if(item.id == prodId&&item.added){
            // bug (all items get this errMsg)
            this.errMsg = 'This Item already in Cart'
          }
        })
      console.log("cart is:",this.cart);
      return this.products         
    },
    addOne(prodId){
      this.cart.filter((item)=>{
        if(item.id === prodId){
          console.log("fount smth to rise");
          item.num +=1;
        }else{
          console.log("hmmmm.......")
        }
      })
    },
    subtructOne(prodId){
       this.cart.filter((item)=>{
        if(item.id === prodId&&(item.num >=1)){
          console.log("fount smth to rise");
          item.num -=1;
        }else{
          this.errSubtruct ="below zero";
          console.log("belowing zeroing");
        }
      })
    },
    emptyCart(){
      this.cart = [];
      this.prodAmount = 0;
      this.products.map((item)=>{
        item.added = false;
        return item
      })
    },
    
    getUserInp(prodId,event){
      console.log("event is",event.target.value);      
      console.log("targeting id",prodId);
      this.cart.filter((item)=>{
        if(item.id===prodId){
          item.num = event.target.value;
        }
        return item;
      })
      
    }    

  },
  computed:{
    getAmount(){
      let count = 0;
      this.cart.map((item)=>{
        let subTotal = item.num*item.price;
        console.log("price per item",subTotal)
        count += subTotal;
        
      })
      return count;
    }
  }  
}
</script>
<style scoped>
.container{
  max-height: 100vh;
}
.equal{
  min-width:300px;
}
.cart{
  margin:1rem;
  border-bottom:1px solid black;
  display: flex;
  justify-content: space-between; 
}
.display-cart-state{
  display: flex;
  justify-content: space-between;
}
.wrap{
  display: flex;
  flex-direction: column;
  align-content: space-around;  
}
.amount-input{
  display: flex;
  flex-direction: column;
  align-items: stretch;  /* background-color: darkkhaki;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;  */
}
.amount-input-item{
  margin-top: 1em;
}
.calc-block{
  display: flex;
  justify-content:space-around;
  padding: 1rem;;
}
.sub-cart-info{
  text-align: left;
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
  background-color: rgb(222, 238, 153);
  width:100px;
  height: 100px;
  border-radius: 50%;
}
</style>

