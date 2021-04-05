export default ({
  state: {
    prodItems:[
      {       
        id: 1,
        name: "Golden Snitch ",
        price:100,
        num:1,
        image:'@/assets/geit.jpg'        
      },
      {       
        id: 2,
        name: "Unicorn Hair",
        price:100,
        num:1,
        image:'@/assets/geit.jpg'        
      },
      {       
        id: 3,
        name: "Wand",
        price:100,
        num:1,
        image:'@/assets/geit.jpg'        
      },
      {       
        id: 4,
        name: "Numbus 2000",
        price:100,
        num:1,
        image:'@/assets/geit.jpg'        
      },
      
    ]
  },
  getters:{
    getProds(state){return state.prodItems},   
  },
  mutations: {
    changeProdList(state,newProdList){
      state.prodItems = newProdList
      }
  },  
  // actions: {
  //   removeProdFromList(context){

  //     context.commit('changeProdList',newList)
  //   }
  // },  
})
