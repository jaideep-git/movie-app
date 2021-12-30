<template>
    <div>
        <Hero :featured="featured"/>
        <div class="container">
            <h4>Trending Movies <span class="link"> Explore All</span> </h4>
            <VueSlickCarousel v-bind="settings" v-if="trendingMovies.length">
                <Moviecard :key="movie.id" v-for="movie in trendingMovies"  :movie="movie" />
            </VueSlickCarousel>
            <h4>Trending Shows <span class="link"> Explore All</span></h4>
            <VueSlickCarousel v-bind="settings" v-if="trendingShows.length">
                <Showcard :key="show.id" v-for="show in trendingShows"  :show="show" />
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Moviecard from '../components/Moviecard.vue'
import Showcard from '../components/Showcard.vue'
import axios from 'axios'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
components: { Hero,Moviecard, VueSlickCarousel,Showcard},
name:'Home',
data(){
    return {
        settings:{
            "infinite": false,
            "speed": 500,
            "slidesToShow": 6,
            "slidesToScroll": 4,
            "initialSlide": 0,
            },
        trendingMovies:[],
        trendingShows:[],
        featured:{}
        }
    },
async mounted(){
    try{
        const movieData = axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=a93f8793bb3827d67a7363fc0fff2ec2`)
        const showData = axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=a93f8793bb3827d67a7363fc0fff2ec2`)
        const random = await movieData
        const movieResult = await movieData
        const showResult = await showData
        this.featured = random.data.results[Math.floor(Math.random()*random.data.results.length)]
        this.trendingMovies = movieResult.data.results
        this.trendingShows = showResult.data.results
        console.log(this.trendingShows);
        console.log(this.featured)
    }catch(error){
        console.log(error)
    }
},

}

</script>

<style scoped >
h4{
    font-family: Montserrat;
    font-size:25px;
    margin:3rem 0;
}
.link{
    font-size: 13px;
    color: #FD7014; 
}
</style>