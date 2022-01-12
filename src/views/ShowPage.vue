<template>
    <div>
        <Hero :featured="this.item"/>
        <div class="container">
            {{item.name}}
        </div>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import axios from 'axios'
export default {
    name:"Show",
    components: {Hero},
    data(){
        return{
            item:{},
        }
    },
    async activated(){
        await this.getShow();
    },
    methods:{
        async getShow(){
            const getShowDetails = await axios.get(`https://api.themoviedb.org/3/tv/${this.$route.params.id}?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`)
            this.item = getShowDetails.data
        },
    },
}
</script>

<style>

</style>