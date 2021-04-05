<template>
<Modal>
    <ModalHeader>
        <h3>Hi,Tata</h3>
    </ModalHeader>
    <ModalBody>
        <p>Nice weather!</p>
    </ModalBody>
    <ModalFooter>
        <button @click="close('closing')" class="btn-sm success">close Modal</button>
        <button @click="dismiss('dismissing')" class="btn-sm primary">Desmiss Modal</button>
    </ModalFooter>
</Modal>
    
</template>

<script>
import ModalBody from "@/modules/modals/components/ModalBody.vue"
import ModalHeader from "@/modules/modals/components/ModalHeader.vue"
import ModalFooter from "@/modules/modals/components/ModalFooter.vue"
import Modal from "@/modules/modals/components/Modal.vue"
import ModalMixin from "@/modules/mixins/ModalMixin"
export default {
    components:{
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter
    },
    mixins:[ModalMixin]
    
}
</script>