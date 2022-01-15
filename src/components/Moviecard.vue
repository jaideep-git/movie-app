<template>
    <div class="movie-card" v-if="this.movie.poster_path || this.movie.profile_path">
        <img 
        :src="posterPath" alt="" @click="goToPage">
        <h5 class="movie-name">{{movie.title || movie.name || movie.known_for}}</h5>
        <h6><i v-if="this.movie.vote_average" class="fas fa-star star"> </i><span class="rating">{{movie.vote_average}}</span><span class="spacer"><span v-if="this.movie.vote_average" class="space">|</span></span> <span class="rating"> {{yearStart}}</span></h6>
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
            if(this.movie.poster_path){
                return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
            }else{
                return "https://image.tmdb.org/t/p/w500/" + this.movie.profile_path;
            }
        },
        yearStart(){
            if(! this.movie.known_for_department){
                const date = this.movie.release_date ? this.movie.release_date : this.movie.first_air_date;
                return date.split('-')[0];
                
            }else{
                return this.movie.known_for_department
            }
        }
    },
    methods: {
        goToPage(){
            if(this.movie.title){
                this.$router.push({name:"Movie", params:{id:this.movie.id}})
            }else if(this.movie.first_air_date){
                this.$router.push({name:"Show", params:{id:this.movie.id}})
            }else{
                this.$router.push({name:"Person", params:{id:this.movie.id}})
            }
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
    margin-right: 0px;
}
.star{
    margin-right:9px;
}
</style>