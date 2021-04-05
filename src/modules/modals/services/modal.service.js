// for access to abstract logic
// models могут вообще не знать о логике close<=> dismiss
// import { Promise } from 'core-js';
// import Vue from 'vue'


// new Vue({
//     methods:{
//         // default props={}
//         open(component,props={}){
//             //внутри всё, что мы слушаем в  ModelRoot component
//             // we emitting an object with all these data
//             return new Promise((resolve,reject)=>{
//                 this.$emit('open',{component,props,resolve,reject})
//             })
//         }
//     }
// })