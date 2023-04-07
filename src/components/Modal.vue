<template>

<div class="modal">
      <div class="absolute top-8 right-10 text-white text-4xl hover:cursor-pointer" @click="hideModal">X</div>
        <div class="modal-content">
          <img src="/src/assets/imgs/no_image.png" id="modal-image" class="w-full" alt="">
        </div>
    </div>


</template>

<script>

export default {
    name: "Modal",
    props: {
        image: {
            type: String,
            required: true,
        }
    },
    methods: {
        hideModal() {
            this.$emit("hide-modal");
        }
    }
}
</script>


<style scoped>
.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  z-index: 9999;
  display: none;
}

.modal-content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 88%;
  border-radius: 10px;
  overflow: hidden;
}

</style>