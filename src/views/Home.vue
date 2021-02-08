<template>
  <div class="container">
      <h1>I'm a home page</h1>
      <h2>Welcome</h2>      
      <p>All posts: (from child component)</p>
      <Posts :posts="getPosts" @deletePost="deletePost"></Posts>
      <!-- <Posts :posts="posts" @deletePost="deletePost(event)"></Posts> -->
      
  </div>
</template>

<script>
import Posts from '@/components/Posts'
import {mapGetters} from 'vuex'
export default {
  name: 'Home',
  components:{
    Posts
  },
  data(){
    return {
      posts_original:[
        {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      ],
           
    }
  },
  computed:{
    ...mapGetters(['getPosts'])

  },
  methods:{
    // deletePost(postId){
    //   this.posts = this.posts.filter((item)=>{  
    //     console.log("id on iteration",item.id)      
    //     return item.id !== postId;
    //   });      
    //   return this.posts;
    // },
    deletePost(postId){
      let index = this.posts.findIndex((item)=>{
        return item.id === postId;
      })
      // works without return
      this.posts.splice(index,1);       
    }
  }
  
} 
</script>

<style scoped>
.posts {
  max-width: 500px;
  margin: 1rem auto;
}
</style>

