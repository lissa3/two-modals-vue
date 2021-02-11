<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/">Home</router-link>   
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
      </li>
      <li class="nav-item">
        <button @click="toggleSignUp">Modal Sign Up</button>
      </li>
      <li class="nav-item">
        <button @click="toggleLogIn">Modal Login</button>        
      </li>
      <li class="nav-item">
       <router-link to="/sign-up-form">Regular SingUp-Form</router-link>    
      </li>     
      <li class="nav-item">
       <router-link to="/cart">Cart C+</router-link>    
      </li>     
      <li class="nav-item">
       <router-link to="/cart-option-2">Cart C-</router-link>    
      </li>     
    </ul>
  </div>
</nav>  
<router-view/>
  <!-- <footer>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="{name:'About'}"
            >About</router-link> 
            <router-link :to="{name:'Contact'}"
            >Contact</router-link> 
                  
        </div>
      </div>
    </nav>    
  </footer> -->
  </div>  
<teleport to=".modals">
      <div v-if="showSignUp">      
        <Modal @closeModal="toggleSignUp" >
          <slot>Msg from parent App.vue(slot): Welcome to SignUp</slot>
          <template v-slot:signItUp> 
            <p>Msg from parent App.vue(slot):I'm a named slot!</p>         
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
/* nav-item nav-link */
/* #nav a.router-link-active{ */
.nav-item a.nav-link {
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  /* padding:5px;
  background: purple;
  border-radius: 10px;
  color:white; */
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
