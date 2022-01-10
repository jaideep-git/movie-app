<template>
	<div>
		<Hero :featured="this.$parent.randomMovie"/>
		<div class="container">
			<CardList :media="item" :key="index" v-for="(item, index) in listInfo"/>
		</div>
	</div>
</template>

<script>
import Hero from '../components/Hero.vue'
import CardList from '../components/CardList.vue'
export default {
	name:'Movies',
	components:{Hero,CardList},
	data(){
		return {
			listInfo:[
				{ type: "movie", title: "Action", genreId: 28 },
				{ type: "movie", title: "Adventure", genreId: 12 },
				{ type: "movie", title: "Animation", genreId: 16 },
				{ type: "movie", title: "Comedy", genreId: 35 },
				{ type: "movie", title: "Crime & Thrillers", genreId: 80 },
				{ type: "movie", title: "Drama", genreId: 18 },
				{ type: "movie", title: "Documentry", genreId: 99 },
				{ type: "movie", title: "Horror", genreId: 27 },
				{ type: "movie", title: "Mystery", genreId: 9648},
				{ type: "movie", title: "Romance", genreId: 10749 },
				{ type: "movie", title: "Science Fiction", genreId: 878 },
			],

		}
	}
	
}
</script>

<style>

</style>