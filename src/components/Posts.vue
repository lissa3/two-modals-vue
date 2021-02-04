<template>
  <div class="posts" >
        <div class="card-group" v-for="post in posts" :key="post.id">
          <div class="card">
              <div class="card-header">
                User Id: {{post.userId}}
              </div>
            <div class="card-body">
              <h5 class="card-title">Title{{post.title}}</h5>
              <p class="card-text">Text: {{post.body}}</p>
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-success">Edit </a>
                <a href="#" @click="$emit('deletePost',post.id)"
                class="btn btn-danger">
                Delete
                </a>
              </div>
            </div>
          </div>          
        </div>        
  </div>     
</template>
<script>
export default {
  name:'Posts',
  props:['posts'],
  methods:{
    // see altrnative for emit (inside templ)
    // deletePost(postId){
    //   this.$emit('deletePost',postId)
    // }
  }  

}
</script>