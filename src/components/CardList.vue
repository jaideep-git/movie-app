<template>
    <div>
        <h4>{{media.title}}</h4>
        <VueSlickCarousel v-bind="settings" v-if="listItems.length" >
            <Moviecard :key="movie.id" v-for="movie in listItems"  :movie="movie"/>
        </VueSlickCarousel>
    </div>
</template>

<script>
import Moviecard from '../components/Moviecard.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import axios from 'axios'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
components: {Moviecard, VueSlickCarousel},
name:'CardList',
props:{
    media:{
        required: true,
    },
},
data(){
    return {
        settings:{
            infinite: false,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 6,
            initialSlide: 0,
            swipeToSlide:true,
            draggable: true,
            arrows:true,
            swipe:true,
            touchMove:true
            },
        listItems:{}
        }
    },
    async mounted(){
        await this.getList();
    },
    methods:{
        async getList(){
                const getLists = await axios.get(`https://api.themoviedb.org/3/discover/${this.media.type}?api_key=a93f8793bb3827d67a7363fc0fff2ec2&include_adult=false&with_genres=${this.media.genreId}`)
                this.listItems = getLists.data.results
                console.log(this.listItems)
            
        },
        
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