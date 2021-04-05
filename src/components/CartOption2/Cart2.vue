<template>
  <div class="container">    
  <div class="wrap">
    <h1>Shopping Cart (without components)</h1>
    <div class="display-cart-state">
      <!-- <div class="cart-info">Total items</div> -->
      <div class="cart-info">Amount products:{{prodAmount}}</div>
      <div class="cart-info">Total: ${{getAmount}}</div>
      <div class="closeX" v-if="cart.length>0">
        <button class="btn btn-danger" @click="emptyCart">Empty Cart</button>   
      </div>      
    </div>
    <div class="display-cart-state" v-if="cart.length>0">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Prod Name</th>
              <th scope="col">Price (per 1 Item)</th>
              <th scope="col">Amount</th>
              <th scope="col">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <th scope="row">1</th>
              <td>{{item.name}}</td>
              <td>{{item.price}}</td>
              <td>{{item.num}}</td>
              <td>{{item.subtotal}}</td>
            </tr>           
          </tbody>
        </table>
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
              <div v-if="prod.added" class="minus2" @click="subtructOne(prod.id)" ref="zoo">
                <span>-</span>
              </div>
              <div class="amount-input">
              <div  v-if="prod.added" class="amount-input-item">
              <input type="number"
              min="0" max="500"  step=1
              v-model="prod.num"
              
              > 
              <!-- <input type="number"
              min="0" max="500"  step=1
              :value="prod.num" 
              @blur="getUserInp(prod.id,$event)">  -->
              </div>               
                <div class="amount-input-item">
                  <button class="btn btn-success"
                  v-if="!prod.added"
                  @click="addToCart(prod.id)"
                  >Add to cart
                  </button>
                  <button class="btn btn-danger" v-if="prod.added"
                  @click="removeFromCart(prod.id)"
                  >Remove from cart
                  </button>
                </div>                      
              </div>
              <div v-if="prod.added" class="plus2" @click="addOne(prod.id)">
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
        added:false,
        subtotal:0        
      },
      {       
        id: 3,
        name: "Unicorn Hair",
        price:20,
        num:1,
        image:'@/assets/geit.jpg' ,
        added:false,
        subtotal:0        
      },
      {       
        id: 4,
        name: "Wand",
        price:25,
        num:1,
        image:'@/assets/geit.jpg',
        added:false,
        subtotal:0        
      },
      {       
        id: 14,
        name: "Numbus 2000",
        price:300,
        num:1,
        image:'@/assets/geit.jpg',
        added:false,
        subtotal:0          
      },
      
    ],     
    }
  },
  methods:{
    getCartFromLocalStorage(){
      if(localStorage.getItem('cart')){
        const itemsInCartLocalStor = JSON.parse(localStorage.getItem('cart'))
        return itemsInCartLocalStor;
      }else{
        return []
      }
    }, 
    setToLocalStore(){
      // if there is already 'old' cart in LStorage
      localStorage.removeItem('cart');
      const usercart = JSON.stringify(this.cart)
      localStorage.setItem('cart',usercart)
    } ,   
    removeFromCart(prodId){
      console.log("removing item with id from the cart",prodId);
      this.products.filter((item)=>{
        if(item.id === prodId){
          item.added = false;
          this.prodAmount -=1;
          let index = this.cart.findIndex((item)=>{
            return item.id == prodId
            })
          this.cart.splice(index,1)
          console.log("current cart state",this.cart)
        }
        // if smth has been changed in cart;
        this.setToLocalStore()
      })
      // if user deleted the last item from the cart
      let itemsInCart = JSON.parse(localStorage.getItem('cart'));
      if (itemsInCart.length ===0){
        localStorage.removeItem('cart');
        console.clear;
      }

    },
    addToCart(prodId){
      console.log("found",prodId);
      this.products.filter((item)=>{
          if(item.id == prodId&&!item.added){
            item.added = true;
            this.prodAmount +=1;
            this.cart.push(item);
            // return item; // do I need it now????
          }
        })
      console.log("cart is:",this.cart);
      this.setToLocalStore(this.cart)
      return this.products         
    },
    addOne(prodId){
      this.cart.filter((item)=>{
        if(item.id === prodId){
          console.log("fount smth to rise");
          item.num +=1;
        }
      })
    },
    subtructOne(prodId){
        this.cart.filter((item)=>{
        if(item.id === prodId&&(item.num >=1)){
          item.num -=1;
        }else{
          this.$refs.zoo.classList.add('disabled');             
          
        }
      })
    },
    emptyCart(){
      this.cart = [];
      this.prodAmount = 0;
      localStorage.removeItem('cart')
      this.products.map((item)=>{
        item.added = false;
        return item;
      })
    },    
    getUserInp(prodId,event){
      console.log("event is",event.target.value);      
      this.cart.filter((item)=>{
        if(item.id===prodId){
          item.num = event.target.value;
        }
        return item;
      })      
    } 
  },
  mounted(){
    // in case user re-loads this page
    this.cart = this.getCartFromLocalStorage();
    // check if cart in LS not empty
    if(this.cart.length>0){
      // to sync state of item.added in products and items in cart
      // in case of active reload of the page
      this.products.filter((item)=>{
        this.cart.map((cartItem)=>{
          if(item.id === cartItem.id){
            item.added = true;
          }
        })
      })
    }
  },
  computed:{
    getAmount(){
      let count = 0;
      this.cart.map((item)=>{
        let subTotal = item.num*item.price;
        item.subtotal = subTotal;
        count += subTotal;        
      })
      return count;
    },
    
  }  
}
</script>
<style scoped>
.table {
  border:1px solid red;
}
.btn-danger{
  background-color: #dc991f;
  border: 1px solid #dc991f;
}
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
  margin:1rem ;
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

.plus2,.minus2{
  background-color: coral;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
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

.prod-img{
  background-color: rgb(222, 238, 153);
  width:100px;
  height: 100px;
  border-radius: 50%;
}
</style>

