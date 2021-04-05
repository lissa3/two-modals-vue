<template>
    <div>
        <h1>Second Modal for training</h1>        
        <modal-core v-if="showMod" @close="shutModal">
            <template v-slot:slotTitle>
                <a href="#">potential link</a>
                <p>Sun shines!</p>
            </template>
            <template v-slot:slotBody>                
                <p>just body</p>
            </template>
            
        </modal-core>
        <button class="fuji" @click="showModal">Show Modal</button>
    </div>
</template>
<script>
import ModalCore from '@/components/secondModal/ModalCore'
export default {
    name:"ModalWrap",
    components:{
        'modal-core':ModalCore
    },
    data(){
        return {
            showMod:false
        }
    },
    methods:{
        showModal(){
            this.showMod = true;
        },
        shutModal(){
            console.log("modal parent closing modal")
            this.showMod = false
        }
    }
}
</script>
<style>
.fuji{
    /* default independ browser */
    appearance: none;
    outline:none;
    border:none;
    cursor: pointer;
    background-color: coral;
    display: inline-block;
    padding: 15px 25px;
    background-image: linear-gradient(to right,#ee5b87,#CC2E5D);
    color:white;
    font-size: 18px;
    font-weight: 700;
    border-radius: 8px;
    box-shadow: 3px 3px rgba(0,0,0,0.2);
    transition: 0.4s ease-out;
}
.fuji:hover{
    box-shadow: 6px 6px rgba(0,0,0,0.6);
}
</style>