<template>
        <span class="text-blue-500" >
            this.</span>
        <span class="title_">{{location}}()</span>
        <span class="cursor_title text-transparent h-96 w-2 flex pt-16 flex-col justify-start" >_</span>
</template>

<script>

    export default{
        name: "Title",
        props:{
            location: String,
        }
    }

</script>


<style scoped>
.cursor_title {
  animation: blink 1s infinite;
  animation-iteration-count: 3;
  display: inline;
  margin-bottom: 10px;
}

@keyframes blink {
  50% {
    color: white ;
  }
}

</style>