<template>
  <div>
        <div class="container">
            <h4>search results for "{{this.$route.params.name}}"</h4>
            <div class="search-container">
                <Moviecard class="movie-card" :key="show.id" v-for="show in this.$parent.searchResults"  :movie="show" />
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import Moviecard from '../components/Moviecard.vue'
export default {
    name: 'Search',
    components:{Moviecard},
    methods:{
        async getSearch(){
            const getSearchItems = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1&query=${this.$route.params.name}`)
            this.$parent.searchResults=getSearchItems.data.results
            console.log(getSearchItems.data.results)
        }
    },
    updated(){
        this.getSearch()
    },
    unmounted(){
        this.$route.params.name=""
    }
}
</script>

<style scoped>
.search-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
}
.container {
    margin-top:3rem
}
.movie-card{
    margin: 1.7rem 0;
}
</style>