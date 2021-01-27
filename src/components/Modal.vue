<template>    
    <!-- <div class="backdrop" :class="show ? 'invisible':'red'" ref="mod"> -->
    <div class="back"  @click.self="hideModal">
        <div class="modal">            
            <slot></slot> 
            <div class="actions">
                <slot name="signItUp"></slot>
                <slot name="logItIn"></slot>
            </div>                  
        </div>
    </div>
    
</template>

<script>
export default {
    props:{        
        // show:Boolean,
              
    },  
    methods:{
        hideModal(){
            // problem: click on backdrop(div) includes event on modal div
            // because midal div is a child(nested in parent == backdrop)
            // click event needs modifier
            this.$emit('closeModal')
        }
    }
  
}
</script>

<style>
.modal{
    width:400px;
    padding:20px;
    margin:100px auto;
    background-color: bisque;
    border-radius: 10px;;
}

.back{
    top:0;
    position:fixed;
    background: rgba(0,0,0,0.5);
    width:100%;
    height:100%;    
} 
.modal .actions{
    text-align: center;
    margin:30px 0 10px 0;
    color:#333;
}
/* check it: no styles applied */
/* .rexmodal .actions a   { */
.modal .actions a {
    color:green;
    padding:8px;
    border:1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin:10px;
    font-size: 2rem;
}

</style> 
