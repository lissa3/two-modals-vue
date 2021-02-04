<template>
  <div id="nav">
    <div class="menu-item">
      <router-link to="/">Home</router-link>       
    </div>
    <div class="menu-item">
      <!-- to="/about" static -->
      <router-link :to="{name:'About'}"
      >About</router-link>    
    </div>
    <div class="menu-item">
      <router-link :to="{name:'Contact'}"
      >Contact</router-link>    
    </div>
    <div class="menu-item">    
      <button @click="toggleSignUp">Modal Sign Up</button>
    </div>  
    <div class="menu-item">
      <button @click="toggleLogIn">Modal Login</button>
    </div>    
    <div class="menu-item">
      <router-link to="/sign-up-form">Regular SingUp-Form</router-link>    
    </div>      
  </div> 
  <hr> 
  <teleport to=".modals">
      <div v-if="showSignUp">      
        <Modal @closeModal="toggleSignUp" >
          <slot>Welcome to SignUp</slot>
          <template v-slot:signItUp>          
            <a href="#">contact us</a>
            <p >here comes a singup form</p>
          </template>
        </Modal>     
      </div>
  </teleport>
  <teleport to=".modals">
      <div v-if="showLogIn">
        <Modal @closeModal="toggleLogIn" >
          <slot>
            <p >test it</p>
            Welcome to LogIn</slot>
          <template v-slot:logItIn>
            <a href="#">one link</a>
            <p>here comes a login form</p>
          </template>
        </Modal>
      </div>
  </teleport>
 
  <router-view/>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name:"App",
  components:{
    Modal  
   
  },
  data(){
    return {
      title:"Go on,Tata",
      showSignUp:false,
      showLogIn:false
    }
  },
  methods:{
    toggleSignUp(){
      this.showSignUp = !this.showSignUp;
      // console.log("sing up",this.showSignUp);
    },
    toggleLogIn(){
      this.showLogIn = !this.showLogIn;
      // console.log("log in",this.showLogIn);
    }, 
  },
}
</script>

<style>
 
.marine{
  background-color:#b5e5cf;
}
#nav{
  padding-top:1rem;
  display: flex;
  justify-content: space-around;
}
#nav a{
   padding:5px;
  background: rgb(15, 199, 113);
  border-radius: 10px;
  color:white;
  /* display: inline-block; */
}
#nav a.router-link-active{
  padding:5px;
  background: purple;
  border-radius: 10px;
  color:white;
  /* display: inline-block; */
}
#nav a.router-link-exact-active{
  padding:5px;
  background:rosybrown;
  border-radius: 10px;
  display: inline-block;
}
button{
  margin:0 10px;
  padding:10px;
  border:none;
  border-radius: 4px;
  background-color: silver;
}
</style> 
