<template>
    <div>
        <Hero :featured="this.$parent.featured"/>
        <div class="container">
            <h4>Trending Movies <router-link to="/Movies"> <span class="link"> Explore All</span></router-link></h4>
            <VueSlickCarousel v-bind="settings" v-if="this.$parent.trendingMovies.length">
                <Moviecard :key="movie.id" v-for="movie in this.$parent.trendingMovies"  :movie="movie" />
            </VueSlickCarousel>
            <h4>Trending Shows<router-link to="/Shows"> <span class="link"> Explore All</span></router-link></h4>
            <VueSlickCarousel v-bind="settings" v-if="this.$parent.trendingShows.length">
                <Moviecard :key="show.id" v-for="show in this.$parent.trendingShows"  :movie="show" />
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Moviecard from '../components/Moviecard.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
components: { Hero,Moviecard, VueSlickCarousel},
name:'Home',
data(){
    return {
        settings:{
            "infinite": false,
            "speed": 1000,
            "slidesToShow": 6,
            "slidesToScroll": 6,
            "initialSlide": 0,
            "swipeToSlide":true,
            "swipe":true,
            "touchMove":true
            },
        }
    },
    mounted() {
		window.scrollTo(0, 0);
	}
}
</script>

<style scoped >
h4{
    font-family: Montserrat;
    font-size:25px;
    margin:2rem 0;
}
.link{
    font-size: 13px;
    color: #FD7014;
}
</style>