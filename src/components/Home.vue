<template>
    <div class=" w-10/12 h-4/6 mt-24 ml-28 flex flex-col items-start home" >
        <div class="h-10 w-1/4 text-red-500 text-2xl font-bold" style="font-size: 2vw;">
            <Title location="home" />
        </div>
        <div class="h-full w-full flex mt-12 ">
            <div class="h-full w-4/6 flex flex-col pl-16">
                <span class="text-red-800 h-1/6 font-bold text-xl">Hello, my name is</span>
                <span class="text-white w-5/6 h-4/6" id="first_name" style="font-size: 4vw;" >
                    <span id="cursor" class="text-white h-full w-3/
                
                    flex pt-16 flex-col justify-start" >█</span>
                </span>     
                <span class="text-xl h-1/6 text-blue-400">console.log("I'm a web & mobile full stack developer.");</span>
            </div>
            <div class="h-full flex w-3/6 justify-center">
                <img src="../assets/programming.svg" alt="programming" id="program" class="w-11/12 h-full">
            </div>
        </div>
        <button 
          class="header relative bottom-0 text-white rounded-lg left-1/2 bg-red-600
           text-2xl py-3 px-8 translate-y-1/2 hover:bg-red-800" >
            <a href="#about">more();</a>
        </button>
    </div>
</template>

<script>

import Title from "./Title.vue"

export default {
    name: "Home",
    components: {
        Title
    },
}

</script>

<style>
#cursor {
  animation: blink 1s infinite;
  animation-iteration-count: 3;
  display: inline;
  font-size: 3.5vw;
  margin-bottom: 10px;
}

@keyframes blink {
  50% {
    color: transparent ;
  }
}

@media only screen and (max-width: 950px) {
    .home{
        margin-top: 0;
        margin-left: 0;
        width: 100%;
        height: 100%;
    }
    #program{
        width: 50%;
        height: 50%;
    }
  }

</style>