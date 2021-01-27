<template>
  <div class="wrapper">
    <h1>This is an sing up form page</h1>
    <p>user's choice of names: {{names}}</p>    
    <div class="form-wrapper">
        <form @submit.prevent="sendData" 
          action="#" novalidate>            
            <label >Your Email:</label>
            <input v-model="data.email" type="email"  />
            <ul v-if="emailError">
                <li v-for=" err in emailError" :key="err.id">{{err}}</li>
            </ul>       
        
            <label >Your Password:</label>
                <input v-model="data.psw" type="password"  />
                <p v-if="pswError">{{pswError}}</p>
            <label >Role:</label>
             <select v-model="data.role" class="select">
                <option value="docent">Docent</option>
                <option value="pupil">Pupil</option>
              </select>
            <p v-if="roleError"></p> 
                   
            <input type="checkbox" v-model="data.terms" />
            <label >Accept terms and conditions</label>
                <p v-if="checkBoxError"></p>
        <hr>  
        <div>
            <input type="checkbox" v-model="names" value="python">
            <label >python</label>
            <input type="checkbox" v-model="names" value="js">
            <label >js</label>
            <input type="checkbox" v-model="names" value="C#">
            <label >C#</label>
        </div>
        <div class="skills">
            <label>Enter your skills</label>
            <input type="text" v-model="skill" @keyup="addSkill">
        </div>
        <div>
            <ul v-if="skills">
                <li v-for="sk in skills" :key="sk"><span class="pill"
                @click="delSkill(sk)"
                >{{sk}}</span></li>
            </ul>
        </div>
        <div class="form-item">
            <button class="submit-btn">Submit</button>
        </div>
        </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignUpView', 
  data(){
    return{
        data:{
            email:"",
            psw:"",
            role:"",
            terms:false
        },
        // thx to value you can include muliple inp checkbox into names array
        names:[],
        // errors and feedback
        emailError:[],
        pswError:"",
        roleError:"",
        termsError:"",
        checkBoxError:"",
        skill:'',
        skills:[],
        formInValid:true
    }
  },
   methods:{
       addSkill(e){
            if(e.key===","&&this.skill){
                if(!this.skills.includes(this.skill)){
                    this.skills.push(this.skill);
                    this.skill="";
                }else{
                    this.skill="";
                }              
            }
       },
       delSkill(skill){
           this.skills = this.skills.filter((item)=>{
               return item != skill
           })
       },
//     emailValidator(){
//         if(!this.data.email){
//             this.emailError.push("This field is required");
//             console.log("smth wrong with email");            
//         }
//         if(!this.data.email.includes("@")||!this.data.email.includes(".")){
//             this.emailError.push("Enter a valid email")
//         }
//         return this.emailError
//     },
//     pswValidator(){
//         if(this.data.psw.length <3||this.data.psw.length >7){
//             this.pswError = "psw should be >3 and < 7"
//         }
//         return this.pswError
//     }, 
//     checkForm(){
//         this.emailValidator();
//         this.pswValidator();
//         if(!this.emailValidator&&!this.pswValidator){
//             this.formInValid = false
//         }
//     } ,
    sendData(){
        const data = this.data;
        // console.log("data to send",data);
        // this.checkForm()
        // if(!this.formInValid){
        //     console.log("form is valid")
        // }else{
        //     console.log("form is NOT valid")
        // }
    }
   },
  
}
</script>
<style scoped>
.wrapper{
   margin:30px auto;
   max-width:800px;
   text-align: left;
   padding:40px;
   border-radius: 10px;
   border:1px solid black;

}
label{
    color:#aaa;
    font-weight: bold;
    display: inline-block;
    font-size:0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;

}
input,select{
    display: block;
    padding:10px 6px;
    width:100%;
    border:none;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(182, 135, 135);;
    color:#555;
}
input[type="checkbox"]{
    display: inline-block;
    width:16px;
    margin:0 10px 0 0;
    position: relative;
    top:2px;
}
.submit-btn{
    background-color: brown;
    color:white;
    padding:1rem;
    border-radius: 10px;
    margin-top: 2rem;
}
.pill{
    display: inline-block;
    margin:20px 10px 0 0;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: #d99b8b;
    color:rgb(226, 209, 209);
    padding: 6px 12px;
    border:2px solid #722837;
    border-radius: 50px;;
}
</style>

