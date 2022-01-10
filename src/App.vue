<template>
	<div id="app">
        <Navbar/>
        <keep-alive>
            <router-view/>
        </keep-alive>
        <Footer/>
    </div>
</template>

<script>
import M from "materialize-css";
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import axios from 'axios'

export default {
    components: { Navbar, Footer },
    data(){
        return {
            trendingShows:[],
            trendingMovies:[],
            featured:{},
            randomMovie:{},
            randomShow:{},
            searchResults:[]
        }
    },
	async mounted() {
        try{
            //fetching data from API
            const getTrendingMovies = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=a93f8793bb3827d67a7363fc0fff2ec2`)
            const getTrendingShows = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=a93f8793bb3827d67a7363fc0fff2ec2`)
            const getTrending = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=a93f8793bb3827d67a7363fc0fff2ec2`)
            const randomId= getTrending.data.results[Math.floor(Math.random()*getTrending.data.results.length)]
            const randomMovieId = getTrendingMovies.data.results[Math.floor(Math.random()*getTrendingMovies.data.results.length)]
            const getRandomMovie = await axios.get(`https://api.themoviedb.org/3/movie/${randomMovieId.id}?api_key=a93f8793bb3827d67a7363fc0fff2ec2&language=en-US`)
            const randomShowId = getTrendingShows.data.results[Math.floor(Math.random()*getTrendingShows.data.results.length)]
            const getRandomShow = await axios.get(`https://api.themoviedb.org/3/tv/${randomShowId.id}?api_key=a93f8793bb3827d67a7363fc0fff2ec2&language=en-US`)
            const getRandom = await axios.get(`https://api.themoviedb.org/3/${randomId.media_type}/${randomId.id}?api_key=a93f8793bb3827d67a7363fc0fff2ec2&language=en-US`)
            // using fetched data
            this.trendingMovies= getTrendingMovies.data.results
            this.trendingShows = getTrendingShows.data.results
            this.featured = getRandom.data
            this.randomMovie = getRandomMovie.data
            this.randomShow = getRandomShow.data
        }catch(error){
            console.log(error)
    }
        M.AutoInit();
	}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap');
body{
    background-color: #141414;
    color: white;
    font-family:Montserrat;
}
.star{
    color: #FD7014;
}
</style>
