<template>
    <div>
        <section class="container">
            <article class=" row">
                <div class="movie col l3">
                    <img 
                    :src="posterPath"  
                    alt=""
                    class="movie-img">
                </div>
                <div class="col l8">
                    <h4>{{item.name}}</h4>
                    <p>{{item.biography}}</p>
                    <div class="movie-info">
                        <div class="labels">
                            <label>Known For</label>
                            <label>Born</label>
                            <label>Place of Birth</label>
                            <div class="icons">
                                <a :href="`https://www.facebook.com/${socialMediaLinks.facebook_id}`" target="_blank"><i class="fab fa-facebook-f icon"></i></a>
                                <a :href="`https://www.instagram.com/${socialMediaLinks.instagram_id}`" target="_blank"><i class="fab fa-instagram icon"></i></a>
                                <a :href="`https://www.twitter.com/${socialMediaLinks.twitter_id}`" target="_blank"><i class="fab fa-twitter icon"></i></a>
                                <a :href="`https://www.imdb.com/name/${item.imdb_id}`" target="_blank" ><i class="fab fa-imdb icon"></i></a>
                            </div>
                            
                        </div>
                        <div class="value">
                            <p>{{item.known_for_department}}</p>
                            <p>{{item.birthday}}</p>
                            <p>{{item.place_of_birth}}</p>
                        </div>
                    </div>
                </div>
            </article>
            <article class="margin-top col" v-if="tvCredits.length || movieCredits.length">
                <h4>Known For </h4>
                <div class="known-for">
                    <ItemCard class="movie-card" :key="item.id" v-for="item in tvCredits" :movie="item"/>
                    <ItemCard class="movie-card"  :key="item.id" v-for="item in movieCredits" :movie="item"/>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
import ItemCard from '../components/ItemCard.vue'
import axios from 'axios'
export default {
    name:"Movie",
    components: {ItemCard},
    data(){
        return{
            item:{},
            tvCredits:{},
            movieCredits:{},
            socialMediaLinks:{},
        }
    },
    computed: {
        posterPath(){
            return "https://image.tmdb.org/t/p/w500/" + this.item.profile_path;
        },
    },
    async activated(){
        await this.getPerson();
        await this.getCredits();
        await this.socialMedia()
    },
    methods:{
        async getPerson(){
            const getPersonDetails = await axios.get(`https://api.themoviedb.org/3/person/${this.$route.params.id}?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`)
            this.item = getPersonDetails.data
            console.log(this.item)
            window.scrollTo(0, 0);
        },
        async getCredits(){
            const getTvCredits = await axios.get(`https://api.themoviedb.org/3/person/${this.$route.params.id}/tv_credits?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`)
            const getMovieCredits = await axios.get(`https://api.themoviedb.org/3/person/${this.$route.params.id}/movie_credits?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`)
            this.movieCredits= getMovieCredits.data.crew
            this.tvCredits = getTvCredits.data.crew
            console.log(this.movieCredits)
            console.log(this.tvCredits)
        },
        async socialMedia(){
            const getExternalIds = await axios.get(`https://api.themoviedb.org/3/person/${this.$route.params.id}/external_ids?api_key=37ed43a4f8eaa2abd75f9283692947bc`)
            this.socialMediaLinks = getExternalIds.data
            console.log(this.socialMediaLinks)
        },
        
    },
}
</script>

<style scoped>
.movie-img{
    width: 100%;
    height: 90%;
}
.movie{
    margin-right: 2rem;
}
.movie-info{
    display: flex;
    gap: 2rem;
}
.movie-card{
    margin: 1.3rem 0;
}
h4{
    font-size: 27px;
    margin-top:1rem;
}
p{
    font-size:16px;
}
.icons{
    display: flex;
    gap: 1rem;
}
label{
    font-size: 18px;
    color:white;
}
.margin-top{
    margin-top:6rem
}
.labels{
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    gap: 0.88rem;
}
.icon{
    margin-top: 20px;
    font-size: 21px;
}
a{
    color: white !important;
}
.known-for{
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
}
h4{
    font-family: Montserrat;
    font-size:30px;
    margin:0;
    font-weight: 600;
}
.container {
    margin: 4rem 2rem 2rem 2rem;
}
</style>