<template>
    <div>
        <VueSlickCarousel v-bind="slickOptions" ;swipe="true" :draggable="true" :swipeToSlide="true" v-if="cast.length" >
            <ItemCard :key="movie.id" v-for="movie in cast"  :movie="movie"/>
        </VueSlickCarousel>
    </div>
</template>

<script>
import ItemCard from './ItemCard.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
components: {ItemCard, VueSlickCarousel},
name:'ItemList',
props:{
    cast:{}
},
data(){
    return {
        slickOptions:{
            "lazyLoad":"ondemand",
            infinite: false,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 4,
            initialSlide: 0,
            swipeToSlide:true,
            arrows:true,
            swipe:true,
            touchMove:true,
            },
        }
    },
    methods: {
    }
        
}
</script>

<style scoped>
h4{
    font-family: Montserrat;
    font-size:32px;
    margin:4rem 0 2rem 0;
    font-weight: 500;
}
</style>