<template>
    <div class="loading3">
        <span></span>
    </div>
</template>

<script>
export default {
    name: "LoadingAnimation"
    
}
</script>

<style  scoped>
.loading3 {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
span {
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #fff;
    animation: circle-loading 1200ms ease infinite;
}
</style>
