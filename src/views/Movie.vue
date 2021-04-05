<template>
<div class=home>
    <h1><span>Greet from movie</span></h1>
    <!-- content of div=feature-card in router-link == a tag -->
    <div class="feature-card">
        <router-link to="/movie/tt0409591">
        <img src="@/assets/geit.jpg" alt="featured-image" class="featured-img">
        <div class="detail">
            <h3>Naruto</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas nemo omnis minima in aspernatur optio nisi tenetur officia, asperiores, repellat assumenda unde at? Corrupti iusto eligendi similique! Quis, labore?</p>
        </div>
        </router-link>
    </div>
    <div class="search-form">
        <form action="#" class="search-form-box" @submit.prevent="startSearch()">
            <input type="text"  v-model="search" class="inp-box" placeholder="What are you looking for?">
            <input type="submit" value="Search">
        </form>
    </div>
    <div class="movies-list">
        <h3>Movies here...</h3>
       
        <div class="movie" v-for="movie in movies" :key="movie.imdbID">
            <router-link :to="'/movie/'+ movie.imdbID"  class="movie-link">
                <div class="product-image">
                    <img :src="movie.Poster" alt="movie poster" />
                    <div class="type">
                        Type: {{movie.Type}}
                    </div>
                </div>
                <div class="detail">
                    <p class="y">
                        Year: {{movie.Year}}
                    </p>
                    <h3>
                        Title: {{movie.Title}}
                    </h3>
                </div>
            </router-link>
        </div>
        <hr>
    </div>
    
</div>
</template>

<script>
import {ref} from 'vue';
import env from '@/env.js'
export default {
    setup(){
        const search =ref("");
        const movies = ref([]);
        const startSearch = ()=>{
            if(search.value !=""){
                // this is not search of the button, but const search via ref
                console.log(search.value);
                fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${env.apikey}&s=${search.value}`)
                .then(resp=>resp.json())
                .then((data)=>{
                    console.log("data from the server",data);
                    movies.value = data.Search;
                    console.log("movies val:",movies.value)
                    search.value="";
                })                
                .catch(err=>console.log(err))
            }
        }
        return {
            search,
            movies,
            startSearch
        }

    }
    
    
}
</script>

<style>
.search-form{
    margin-top:2rem;
}
.search-form-box{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin:0.5rem;
}
/* style for input */
/* in general */
input[type=text] {
  padding: 10px 16px;
  border-radius:8px;
  margin: 8px 0 16px;
  font-size: 20px;;
  transition: width 0.4s ease-in-out;
  
}
/* in particular */
.inp-box{
    margin:1rem;
    appearance: none;
    display: block;
    border:none;
    outline: none;
    background:none;
}
input[type=text]:focus {
  box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
  border-radius:12px;
  width: 100%;
  /* border: 2px solid #1b4925;
   */
}
input[type=text]::placeholder{
    color:#d6d8db;
}
input[type=button], input[type=submit] {
  background-color: rgb(197, 168, 107);
  border: none;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  text-transform: uppercase;
  padding: 16px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  width:100%;
  max-height: 300px;
  transition:0.4s;
}
input[type=submit]:active{
    background-color: rgb(101, 102, 45);
}


h1 span{
    color:#42B883;
}
.home .feature-card{
    position: relative;
}
.home .feature-card .featured-img{
    display: block;
    width:100%;
    height:300px;
    object-fit: cover;
    position: relative;
    z-index:0;
}
.detail{
    /* position: absolute; */
    left:0;
    right:0;
    bottom:0;
    background-color: rgb(0,0,0,0.5);
    border-radius: 0 0 8px 8px;
    padding: 16px;
    z-index:1;
}
.detail h3{
    color:#FFF;
    margin-bottom: 16px;
}
.detail p{
    color:white;
}
/* list of movies */
.movies-list{
    display: flex;
    flex-wrap: wrap;
    margin:0 8px;
}
/* each movie alone */
.movie{
    max-width:50%;
    flex: 1 1 50%;
    padding:16px 8px;
}
/* router-link == tag a */
.movie-link{
    display:flex;
    flex-direction: column;
    height:100%;
}
.product-image{
    position:relative;
    display: block;
}
.product-image img{
   width:100%;
   height: 280px;
    display: block;
    object-fit: cover;
}
.y{
    color:#EEE;
    font-size: 14px;
}
.type{
    position: absolute;
    padding:8px 16px;
    color:white;
    background-color: rgb(231, 225, 220);
    bottom:1px;
    left:0px;
    text-transform: capitalize;
}
.detail h3{
    color:#FFF;
    font-weight: 600;
    font-size: 17px;
}


</style>