<template>
    <div>
        <Hero :featured="item"/>
        <div class="container">
            <h5>{{item.title}}</h5>
        </div>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import axios from 'axios'
export default {
    name:"Movie",
    components: {Hero},
    data(){
        return{
            item:{},
        }
    },
    async activated(){
        await this.getMovie();
    },
    methods:{
        async getMovie(){
            const getMovieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`)
            this.item = getMovieDetails.data
            console.log(this.item)
        },
    },
}
</script>

<style>

</style>