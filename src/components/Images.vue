<template>
    <div class="movie-card">
        <img 
        :src="imagePath" alt="">
    </div>
</template>

<script>
export default {
    props:{
        item: {
            required: true
        }
    },
    computed: {
        imagePath(){
            return "https://image.tmdb.org/t/p/w500/" + this.item.file_path;
        },
    }
}
</script>

<style>
.movie-card {
    width: 300px;
    padding:5px
}
img{
    width:100%;
}
</style>