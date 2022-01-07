<template>
    <div class="movie-card">
        <img 
        :src="posterPath" alt="">
        <h5 class="movie-name">{{movie.title}}</h5>
        <h6><i class="fas fa-star star"> </i><span class="rating">{{movie.vote_average}}</span></h6>
    </div>
</template>

<script>
export default {
    props:{
        movie: {
            required: true,
        }
    },
    computed:{
        posterPath(){
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
        }
    }
}
</script>

<style scoped>
.movie-card {
    width: 250px;
    padding:5px
}
img{
    width:100%;
}
.movie-name{
    margin-top:10px;
    margin-bottom:0;
    font-size:17px;
}
h6{
    font-size:15px
}
.rating{
    color:#AAA3A3;
}
.star{
    margin-right:9px;
}
</style>