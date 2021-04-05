<template>
    <form class="form-content">
        <label>Tel number</label>
        <input type="numbers"
        @keydown="checkValid">
        <button class="but-pos">Send</button>
    </form>
</template>

<script >
const numString="0123456789"
    export default{
        name:'ContactForm',
        data(){
            return {
                telVal:"",
                formInValid:true
            }
        },
        methods:{
            checkValid(e){
                // let op: MD warnign not to use
                // keyCode => number
                // для цифр: 0-9: numbers 48-57
                // <48 or >57
                if(e.keyCode<48 ||e.keyCode>57){
                    e.preventDefault()
                    // default= show what i typed
                }
                // if(!numString.includes(e.key) ){
                //     console.log("he-he")
                // }
            }
        }
    }
</script>

<style>
.form-content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.but-pos{
    margin-top: 2rem;
}
</style>