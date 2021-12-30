<template>
    <nav>
        <ul>
            <li>
                <router-link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-7b357a42=""><g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round" data-v-7b357a42=""><path d="M8.5 23.2H1.3V9L12 .8 22.7 9v14.2h-7.2v-5c0-1.9-1.6-3.4-3.5-3.4s-3.5 1.5-3.5 3.4v5z" data-v-7b357a42=""></path></g></svg></router-link>
            </li>
            <li>
				<router-link to="/Movie" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-7b357a42=""><g fill="none" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" data-v-7b357a42=""><path d="M3.2 12.8h19.6v9.5c0 .5-.4.9-1 .9H4.1c-.5 0-1-.4-1-.9v-9.5" data-v-7b357a42=""></path><path d="M3.3 13.1l-2-4.4c-.2-.5 0-1 .5-1.2L18 .8c.5-.2 1.1 0 1.3.5l1.8 4-17.5 7.3" data-v-7b357a42=""></path><path d="M15 2.1l-.9 6M8 4.7l-1.2 6.6" data-v-7b357a42=""></path></g></svg></router-link>
			</li>
            <li id="tv">
                <router-link to="/Shows" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-7b357a42=""><g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" data-v-7b357a42=""><path d="M21.4 23H2.6c-.9 0-1.6-.7-1.6-1.6V8.9c0-.9.7-1.6 1.6-1.6h18.9c.8 0 1.5.7 1.5 1.6v12.6c0 .8-.7 1.5-1.6 1.5zM6.4 1L12 7M17.6 1L12 7" data-v-7b357a42=""></path></g></svg></router-link>
            </li>
        </ul>
        <form>
            <input id="search-bar" type="text" placeholder="search">
            <button><svg xmlns="http://www.w3.org/2000/svg" width="13.688" height="14.625" viewBox="0 0 13.688 14.625"><path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M13.527,13.566,9.72,9.462a6.067,6.067,0,0,0,1.194-3.636A5.649,5.649,0,0,0,5.457,0,5.653,5.653,0,0,0,0,5.829a5.649,5.649,0,0,0,5.457,5.826,5.229,5.229,0,0,0,3.44-1.3l3.782,4.078a.566.566,0,0,0,.424.194.559.559,0,0,0,.4-.171A.661.661,0,0,0,13.527,13.566ZM5.457,10.4a4.124,4.124,0,0,1-3.03-1.34A4.707,4.707,0,0,1,1.173,5.829,4.694,4.694,0,0,1,2.427,2.6a4.095,4.095,0,0,1,6.06,0A4.707,4.707,0,0,1,9.742,5.829,4.694,4.694,0,0,1,8.487,9.062,4.125,4.125,0,0,1,5.457,10.4Z" transform="translate(0 0)"/></svg></button>
        </form>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
	margin: 0;
    width: 100%;
    height: 4rem;
    background-color: black;
	padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.1px solid #807B7B;
}
ul{
	display: flex;
	margin: 0;
	gap: 4rem;
}
a{
	color: white;
}
.router-link-exact-active svg path {
    stroke:#FD7014;
}
.router-link-exact-active svg g {
    stroke:#FD7014; 
}
button{
    height:2.1rem;
    width:2.5rem;
    background-color:#FD7014 !important;
    border:none;
    margin: 0;
}
.search-icon{
    margin: 0;
    font-size:15px
}
#search-bar{
    padding-left: 10px;
    height: 2rem;
    width: 20rem;
    border:none;
}  
::placeholder{
    color: #807B7B;
} 
input:focus{
    border:none;
}
</style>