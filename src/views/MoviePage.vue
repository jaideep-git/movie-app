<template>
    <div>
        <Hero :featured="item"/>
        <section class="container">
            <Tab>
                <TabItem title="Overview" >
                    <article class="margin-top row">
                        <div class="movie col l3">
                            <img 
                            :src="posterPath"  
                            alt=""
                            class="movie-img">
                        </div>
                        <div class="col l8">
                            <h4>Storyline</h4>
                            <p>{{item.overview}}</p>
                            <div class="movie-info">
                                <div class="labels">
                                    <label>Released</label>
                                    <label>Runtime</label>
                                    <label>Genre</label>
                                    <label>Language</label>
                                    <label>Budget</label>
                                    <label>Revenue</label>
                                    <label>Production</label>
                                    <div class="icons">
                                        <a :href="`https://www.facebook.com/${socialMediaLinks.facebook_id}`" target="_blank"><i class="fab fa-facebook-f icon"></i></a>
                                        <a :href="`https://www.instagram.com/${socialMediaLinks.instagram_id}`" target="_blank"><i class="fab fa-instagram icon"></i></a>
                                        <a :href="`https://www.twitter.com/${socialMediaLinks.twitter_id}`" target="_blank"><i class="fab fa-twitter icon"></i></a>
                                        <a :href="`https://www.imdb.com/title/${item.imdb_id}`" target="_blank" ><i class="fab fa-imdb icon"></i></a>
                                    </div>
                                </div>
                                <div class="value">
                                    <p> {{item.release_date}}</p>
                                    <p> {{item.runtime | runtime}}</p>
                                    <p> {{formatGenres(item.genres)}}</p>
                                    <p> {{fullLanguage(item.spoken_languages)}}</p>
                                    <p> $ {{ item.budget | numberWithCommas }}</p>
                                    <p> $ {{ item.revenue | numberWithCommas }}</p>
                                    <p> {{ productionCompanies(item.production_companies)}}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="cast">
                        <h4>Cast</h4>
                        <ItemList :cast="cast"/>
                    </article>
                    <article class="cast">
                        <h4>Related Movies</h4>
                        <ItemList :cast="similarMovies"/>
                    </article>
                    </TabItem>
                    <TabItem title="Photos"> 
                        <h4>Backdrops</h4>
                        <div class="images">
                            <Images class="image" :key="image.folder_path" :item="image" v-for="image in backdropPhotos"/> 
                        </div>
                        <h4 class="margin-top">Posters</h4>
                        <div class="images">
                            <Images :key="image.folder_path" :item="image" v-for="image in posterPhotos" /> 
                        </div>
                    </TabItem>
                </Tab>
            
        </section>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Tab from '../components/Tab.vue'
import Images from '../components/Images.vue'
import TabItem from '../components/TabItem.vue'
import ItemList from '../components/ItemList.vue'
import axios from 'axios'
export default {
    name:"Movie",
    components: {Hero,ItemList,TabItem,Tab,Images},
    data(){
        return{
            item:{},
            socialMediaLinks:{},
            cast:[],
            similarMovies:{},
            posterPhotos:[],
            backdropPhotos:[]
        }
    },
    computed: {
        posterPath(){
            return "https://image.tmdb.org/t/p/w500/" + this.item.poster_path;
        },
    },
    filters:{
        runtime: function (minutes) {
            const seconds = minutes * 60;
            let secondsLeft = seconds;
            const hours = Math.floor(secondsLeft / 3600);
            secondsLeft = secondsLeft % 3600;
            const mins = Math.floor(secondsLeft / 60);
            secondsLeft = secondsLeft % 60;
            return `${hours ? hours + 'h' : ''} ${mins}min`;
        },
        numberWithCommas: function (number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        
    },
    async activated(){
        await this.getMovie();
        await this.socialMedia();
        await this.getCast();
        await this.getSimilarMovies();
    },
    methods:{
        async getMovie(){
            const getMovieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=37ed43a4f8eaa2abd75f9283692947bc&append_to_response=images,videos`)
            this.posterPhotos = getMovieDetails.data.images.posters
            this.backdropPhotos = getMovieDetails.data.images.backdrops
            this.item = getMovieDetails.data
            console.log(this.item)
            window.scrollTo(0, 0);
        },
        async socialMedia(){
            const getExternalIds = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/external_ids?api_key=37ed43a4f8eaa2abd75f9283692947bc`)
            this.socialMediaLinks = getExternalIds.data
            console.log(this.socialMediaLinks)
        },
        async getCast(){
            const credits = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`)
            this.cast = credits.data.cast
            console.log(this.cast)
        },
        async getSimilarMovies(){
            const similarMovies = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/recommendations?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`)
            this.similarMovies = similarMovies.data.results
            console.log(this.similarMovies)
        },
        formatGenres (genres) {
            return genres.map(genre => `${genre.name}`).join(', ');
        },
        fullLanguage(language) {
            return language.map(language => `${language.english_name}`).join(', ');
        },
        productionCompanies(companines) {
            return companines.map(company => `${company.name}`).join(', ');
        }
    },
}
</script>

<style scoped>
.movie-img{
    width: 100%;
    height: 90%;
}
.margin-top{
    margin-top:5rem;
}
.movie{
    margin-right: 2rem;
}
.movie-info{
    display: flex;
    gap: 2rem;
}
.images{
    display: flex;
    flex-wrap: wrap;
}
h4{
    font-size: 27px;
    margin:0;
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
.cast{
    margin-top: 5rem;
}
h4{
    font-family: Montserrat;
    font-size:27px;
    margin:0 0 2rem 0;
    font-weight: 500;
}
.image{
    margin: 1rem 0;
}
</style>