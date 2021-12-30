<template>
	<div id="app">
        <Navbar/>
        <router-view/>
    </div>
</template>

<script>
import M from "materialize-css";
import Navbar from './components/Navbar.vue';

export default {
    components: { Navbar },
	mounted() {
		M.AutoInit();
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap');
body{
    background-color: #141414;
    color: white;
    font-family:Montserrat;
    
}
.star{
    color: #FD7014;
}
</style>
