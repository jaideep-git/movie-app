<template>
    <div class="movie-card">
        <img 
        :src="posterPath" alt="">
        <h5 class="movie-name">{{movie.title || movie.name}}</h5>
        <h6><i class="fas fa-star star"> </i><span class="rating">{{movie.vote_average}}</span><span class="space">|</span> <span class="rating"> {{yearStart}}</span></h6>
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
            
        },
        yearStart(){
            const date = this.movie.release_date ? this.movie.release_date : this.movie.first_air_date;
            return date.split('-')[0];
            
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
    margin-top:13px;
    margin-bottom:0;
    font-size:17px;
}
.space{
    color:#AAA3A3;
    margin: 0 5px;
}
h6{
    margin-top:12px;
    font-size:15px
}
.rating{
    color:#AAA3A3;
    margin-right: 5px;
}
.star{
    margin-right:9px;
}
</style>