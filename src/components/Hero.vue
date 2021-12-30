<template>
    <section>
        <div class="hero">
            <img 
            :src="backdropPath" alt="">
            <div class="black-overlay"></div>
            <div class="hero-info">
                <h1>{{featured.title}}</h1>
                <div class="movie-info">
                    <h5><i class="fas fa-star star"></i>{{featured.vote_average}}</h5>
                    <h5>{{yearStart}}</h5>
                    <h5>{{featured.runtime | runtime}}</h5>
                </div>
                <div class="movie-story">
                    <p>{{featured.overview | truncate(200, '...')}}</p>
                </div>
                <button><i class="fa fa-play"> </i> Watch Trailer</button>
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
            const date = this.featured.release_date;
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
  // seconds
  const seconds = minutes * 60;
  let secondsLeft = seconds;

  // hours
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  // mins
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  return `${hours ? hours + 'h' : ''} ${mins}min`;
}
    
}
}
</script>

<style scoped>
.hero{
    color: white;
    width:100%;
    height:45rem;
    display: flex;
    flex-direction: column;
}
.hero img{
    object-fit:cover;
    width:100%;
    height:100%;
}
.black-overlay{
    position: absolute;
    z-index: 9;
    height:45rem;
    width: 100%;
    background-color:rgba(0,0,0,0.7);
}

.hero-info{
    margin: 10rem 0 0 3rem;
    z-index: 10;
    position: absolute;
}
h1{
    font-family: Montserrat;
    color: white;
    margin:0;
    margin-bottom:20px;
    font-size:35px !important;
}
h5{
    font-family:Montserrat;
    margin:0;
    font-size: 17px;
}
.movie-info{
    display: flex;
    gap: 1.5rem;
}
.movie-story{
    width:50%;
    font-family:Montserrat;
    font-size:17px;
    margin-bottom:2rem;
}
button{
    background-color:white !important;
    width: 9rem;
    height:2.5rem;
    border: none;
}
i{
    margin-right:10px;
}
</style>