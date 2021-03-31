<template>
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <slot>

                </slot>
            </div>
        </div>
    </div>
</template>
<script>
import ModalBody from "@/modules/modals/components/ModalBody.vue"
import ModalHeader from "@/modules/modals/components/ModalHeader.vue"
import ModalFooter from "@/modules/modals/components/ModalFooter.vue"

export default {
    name:"MyModal",
    components:{
        ModalBody,
        ModalHeader,
        ModalFooter
    }
}
</script>