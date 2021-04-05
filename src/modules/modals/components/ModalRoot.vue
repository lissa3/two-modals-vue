<template>


</template> 

<script>
//import ModalService from "@/modules/modals/services/modal.service";
//import Modal from "@/modules/modals/components/Modal.vue"
//export default {
    //name:"ModalRoot",
    //components:{
    //    Modal
    //},
    //data(){
    //    return {
    //        modal:{}
    //    }
    //},
    //created(){ -->
        //listening for events (like eventListener) with two callback functions
        //2. what to do when this event + услышан event = 'open'|=> render a component
        // promise resolve: user fills the payment => OK pressed save |=> resolve
        // promise reject: user messes with the form(payment)=> change his mind=> close the modal
        // ModalService.$on('open',({component,props,resolve,reject})=>{
        //    this.modal ={
       //         component,
        //        props,
        //        close:value=>{
        //            this.modal={}
        //            resolve(value);

        //        },
        //        dismiss:reason=>{
                    // here you can do a warning: "You can lose your data"
        //            this.modal={}
        //            reject(reason)
        //        }
        //    }
        //})
    //}
//} 

</script>
<style>
.modal-root {
    position: fixed;
    top:0;
    z-index: 100;
    width:100vw;
    height:100vh;
    background-color: rgba(1,1,1,0.2);
}
/* let op: .xyz (== here modal) should correspond with the name
transition name + enter <=> leave отлито в граните Vue.js  */
.modal-enter-active,
.modal-leave-active{
    transition: all 0.25s ease-out;
}
.modal-enter,
.modal-leave{
    transform: translateY(25px);
    opacity: 0;
}
</style>