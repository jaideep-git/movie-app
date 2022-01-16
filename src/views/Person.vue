<template>
    <div>
        <section class="container">
            <article class="margin-bottom row">
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
        </section>
        <div class="tab-container">
                <Tab>
                    <TabItem title="Known For" >
                        <article class="margin-top col" v-if="credits.length">
                            <div class="known-for">
                                <Moviecard :key="item.id" v-for="item in credits" :movie="item"/>
                            </div>
                        </article>
                    </TabItem>
                    <TabItem title="Photos"> 
                        <article class="margin-top col" v-if="personImages.length">
                            <div class="images-flex">
                                <Images :key="image.folder_path" :item="image" v-for="image in personImages"/> 
                            </div>
                        </article>
                    </TabItem>
                </Tab>
            </div>
    </div>
</template>

<script>
import Moviecard from '../components/Moviecard.vue'
import Tab from '../components/Tab.vue'
import Images from '../components/Images.vue'
import TabItem from '../components/TabItem.vue'
import axios from 'axios'
export default {
    name:"Movie",
    components: {Moviecard,Tab,TabItem,Images},
    data(){
        return{ 
            item:{},
            credits:{},
            movieCredits:{},
            socialMediaLinks:{},
            personImages:[],
        }
    },
    computed: {
        posterPath(){
            return "https://image.tmdb.org/t/p/w500/" + this.item.profile_path;
        },
    },
    async mounted(){
        await this.getPerson();
        await this.getCredits();
        await this.socialMedia();
        await this.images()
        
    },
    methods:{
        async getPerson(){
            const getPersonDetails = await axios.get(`https://api.themoviedb.org/3/person/${this.$route.params.id}?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`)
            this.item = getPersonDetails.data
            window.scrollTo(0, 0);
        },
        async getCredits(){
            const getCredit = await axios.get(`https://api.themoviedb.org/3/person/${this.$route.params.id}/combined_credits?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`)
            this.credits = getCredit.data.cast
        },
        async socialMedia(){
            const getExternalIds = await axios.get(`https://api.themoviedb.org/3/person/${this.$route.params.id}/external_ids?api_key=37ed43a4f8eaa2abd75f9283692947bc`)
            this.socialMediaLinks = getExternalIds.data
        },
        async images(){
            const getImages = await axios.get(`https://api.themoviedb.org/3/person/${this.$route.params.id}/images?api_key=37ed43a4f8eaa2abd75f9283692947bc`)
            this.personImages = getImages.data.profiles
        },
        
    },
}
</script>

<style scoped>
.images-flex{
    width: 100% ;
    display: flex;
    flex-wrap: wrap;
    justify-content:stretch;
    margin-top: 2rem;
    padding: 0 2rem;
    gap:1rem
}
.margin-bottom {
    margin-bottom:5rem;
}
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
h4{
    font-size: 27px;
    margin-top:1rem;
}
.centre{
    display: flex;
    justify-content: center;
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
    margin-top:3rem
}
.tab-container{
    margin-top:2rem;
    margin: 0;
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
    padding: 0 2rem;
    width: 100% ;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 1rem;
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