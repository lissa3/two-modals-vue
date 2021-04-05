<template>
<div class="movie-detail">
    <h3>Movie title: {{movie.Title}}</h3>
    <p v-for="rate in movie.Ratings" :key="rate.id">
        Rating: {{rate}}
    </p>
    <img :src="movie.Poster" alt="" class="featured-img">
    <p>{{movie.Plot}}</p>
    


</div>
</template>

<script>
import {ref,onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';
import env from '@/env.js'
export default {
    name:"MovieDetail",
    setup(){
        const movie = ref({});
        const route = useRoute()
        onBeforeMount(()=>{
            
            fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
            .then(resp=> resp.json())
            .then((data)=>{
                console.log(data);
                movie.value = data;
            })
        })
        return {
            movie
        }
    }
}
</script>
<style scope>
.movie-detail{
    padding:16px;

}
.movie-detail h2{
    color:white;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 16px;
}
.featured-img{
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
}
p{
    color:#FFF;
    font-size:18px;
    line-height: 1.4;

}
</style>