<template>
	<div id="app">
        <Navbar/>
        <div class="container">
            <router-view/>
        </div>
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
body{
    background-color: #141414;
}
</style>
