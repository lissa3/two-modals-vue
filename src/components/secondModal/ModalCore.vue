<template>
<div class="modal-wrapper" @click.self="close">
    <div class="modal-core">
    <h3>I'm a second modal</h3>
    <slot name="slotTitle"></slot>
    <slot name="slotBody"></slot>
    <button class="close-modal" @click="close">X</button>
    </div>
</div>
</template>
<script>
export default {
    name:"ModalCore",
    methods:{
        close(){
            console.log("core modal closing modal.... ")
            this.$emit("close")
        }
    }
}
</script>
<style scoped>
.modal-wrapper{
    position: relative;
    width:100vw;
    min-height:100vh;
    overflow: hidden;
    background-color: rgb(238, 231, 231);
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgb(238, 231, 231);
    display: flex;
    justify-content: center;
    align-items: center; */
}
/* let op: attr name matter! */
.modal-core{
    width: 500px;
    height:500px;
    background-color: rgba(253, 154, 61, 0.658);
    position:relative;
    color:black;
    
}
.close-modal{
    position:absolute;
    top:0;
    right:0;
    width:35px;
    height:35px;
}
</style>