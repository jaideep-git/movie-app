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

import Moviecard from '../components/Moviecard.vue'
export default {
    name: 'Search',
    components:{Moviecard},
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