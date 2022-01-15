<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div >
                    <div class="modal-container">
                        <button class="modal-default-button" @click="$emit('close')">X</button>
                        <iframe
                            class="video-frame"
                            :src="videoLink"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen />
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props:{
        videoLink:{
            required: true
        }
    }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 70rem;
  height: 50rem;
  margin: 3rem auto;
  padding: 0 10px 5rem 10px;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}


.modal-body {
  width:90%;
  height:80%;
}
.modal-default-button {
    background-color: black !important;
    border: none;
    cursor: pointer;
    margin: 1.5rem 1rem 2rem 0;
    float: right;
    font-size:20px;
    color:white;
}

.modal-enter {
  opacity: 0;
}

.video-frame{
    width:100%;
    height:90%
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>