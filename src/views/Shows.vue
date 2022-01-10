<template>
	<div>
		<Hero :featured="this.$parent.randomShow"/>
		<div class="container">
			<CardList :media="item" :key="index" v-for="(item, index) in listInfo"/>
		</div>
	</div>
</template>

<script>
import Hero from '../components/Hero.vue'
import CardList from '../components/CardList.vue'
export default {
	name:'Shows',
	components:{Hero,CardList},
	data(){
		return {
			listInfo:[
				{ type: "tv", title: "Action &  Adventure", genreId: 10759},
				{ type: "tv", title: "Comedy", genreId: 35},
				{ type: "tv", title: "Crime", genreId: 80 },
				{ type: "tv", title: "Drama", genreId: 18 },
				{ type: "tv", title: "Sci-Fi & Fantasy", genreId: 10765 },
				{ type: "tv", title: "Family", genreId: 10751 },
				{ type: "tv", title: "Kids", genreId: 10762 },
				{ type: "tv", title: "Mystery", genreId: 9648 },
				{ type: "tv", title: "War & Politics", genreId: 10768 },
			],

		}
	}
	
}
</script>

<style>

</style>