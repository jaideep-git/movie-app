<template>
    <section>
        <div class="hero">
            <img 
            :src="backdropPath" alt="">
            <div class="black-overlay"></div>
            <div class="hero-info">
                <h1>{{featured.title  || featured.name }}</h1>
                <div class="movie-info">
                    <h5><i class="fas fa-star star"></i>{{featured.vote_average}}</h5>
                    <h5>{{yearStart}}</h5>
                    <h5 v-if="featured.number_of_seasons"> Season {{ featured.number_of_seasons }}</h5>
                    <h5 v-if="featured.runtime">{{featured.runtime| runtime}}</h5>
                </div>
                <div class="movie-story">
                    <p>{{featured.overview | truncate(200, '...')}}</p>
                </div>
                <button><i class="fa fa-play"> </i> Watch Trailer</button>
                <button id="infoBtn"><i class="fas fa-info-circle"></i> More Info</button>
            </div>
        </div>
    </section>
    
</template>

<script>
export default {
    name:'Hero',
    props:{
        featured:{
            required:true,
        }
    },
    computed:{
        backdropPath(){
            return "https://image.tmdb.org/t/p/original" + this.featured.backdrop_path;
        },
        yearStart(){
            const date = this.featured.release_date ? this.featured.release_date : this.featured.first_air_date;
            return date.split('-')[0];
            
        }
    },
    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
        runtime: function (minutes) {
            const seconds = minutes * 60;
            let secondsLeft = seconds;
            const hours = Math.floor(secondsLeft / 3600);
            secondsLeft = secondsLeft % 3600;
            const mins = Math.floor(secondsLeft / 60);
            secondsLeft = secondsLeft % 60;
            return `${hours ? hours + 'h' : ''} ${mins}min`;
        }
    
    }
}
</script>

<style scoped>
section{
    margin-bottom:5rem;
}
.hero{
    color: white;
    width:100%;
    height:55rem;
    display: flex;
    flex-direction: column;
}
.hero img{
    object-fit: cover;
    width:100%;
    height:100%;
}
.black-overlay{
    position: absolute;
    z-index: 9;
    height:55rem;
    width: 100%;
    background-color:rgba(0,0,0,0.6);
}

.hero-info{
    margin: 17rem 0 0 3rem;
    z-index: 10;
    position: absolute;
}
h1{
    font-family: Montserrat;
    color: white;
    margin:0;
    margin-bottom:20px;
    font-size:35px !important;
    font-weight: 600
}
h5{
    font-family:Montserrat;
    margin:0;
    font-size: 17px;
}
.movie-info{
    display: flex;
    gap: 1.3rem;
}
.movie-story{
    width:70%;
    font-family:Montserrat;
    font-size:17px;
    margin-bottom:2rem;
}
button{
    background-color:white !important;
    width: 11rem;
    height:2.5rem;
    border: none;
    font-weight: 600;
    margin-right: 2rem;
    font-size:17px
}
i{
    margin-right:10px;
}
#infoBtn{
    background-color: rgba(127, 138, 145, 0.7) !important;
    color: white;
    font-weight: 600;
}
</style>