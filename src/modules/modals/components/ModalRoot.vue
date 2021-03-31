<template>
    <div class="modal-root">
        <slot/>
    </div>
</template>

<script>
import ModalService from "../services/modal.service";
import Modal from "@/modules/modals/components/Modal.vue"
export default {
    name:"ModalRoot",
    components:{
        Modal
    },
    data(){
        return {
            modal:{}
        }
    },
    created(){
        //listening for events (like eventListener) with two callback functions
        ModalService.$on('open',({component,props,resolve,reject}))
    }
}
</script>