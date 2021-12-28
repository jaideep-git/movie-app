<template>
    <section>
        <div class="hero">
            <img src="../assets/hero.png" alt="">
            <div class="black-overlay"></div>
            <div class="hero-info">
                <h1>Venom: Let There Be Carnage</h1>
                <div class="movie-info">
                    <h5><i class="fas fa-star star"></i>7.3</h5>
                    <h5>2021</h5>
                    <h5> 1h 37min</h5>
                </div>
                <div class="movie-story">
                    <p>
                        After finding a host body in investigative reporter Eddie Brock, the alien 
                        symbiote must face a new enemy, Carnage, the alter ego of serial killer 
                        Cletus Kasady.
                    </p>
                </div>
                <button><i class="fa fa-play"> </i> Watch Trailer</button>
            </div>
        </div>
    </section>
    
</template>

<script>
export default {
    name:'Hero'
}
</script>

<style>
.hero{
    color: white;
    width:100%;
    height:40rem;
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
    height:40rem;
    width: 100%;
    background-color:rgba(0,0,0,0.7);
}

.hero-info{
    margin: 5rem 0 0 3rem;
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