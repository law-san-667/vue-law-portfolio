<template>

    <div class=" w-10/12 h-4/6 mt-16 ml-28 flex flex-col items-start pt-24"  >
        <div class="h-16 w-1/4 text-red-500 text-2xl font-bold" style="font-size: 2vw;">
            <Title location="about_me" />
        </div>
        <div class="h-5/6 w-full flex mt-12"  data-aos="fade-left">
            <div class="h-full w-5/6 flex flex-col pl-16">
                <span class="text-white" style="font-size: 1.5vw;" >
                    "Hi ! My name is Mouhamed Lawal DAN AZOUMI. I am a passionate developer.
                    I fell in love with programming in 2020 while writing my first code lines
                    with <span class="text-red-600" >HTML/CSS</span> & >><span id="troll" class="text-red-600 hover:cursor-pointer" >JavaScript</span>&lt;&lt;.\n
                        <br><br>
                    After that I found out how development is a large world and I got more
                    and more passionate learning new technologies and I have a special 
                    attraction for <span class="text-red-600" >web</span>  and 
                    <span class="text-red-600" >mobile</span> technologies, I will probably
                    have to make a choice but for now I am just enjoying building new apps
                    and stacking skills."
                </span>
            </div>
            <div class="h-full flex justify-center">
                <!--display programming.svg from assets/-->
                <img src="../assets/profile.svg" alt="programming" id="info" class="w-3/4 h-full">
            </div>
        </div>
    </div>
</template>

<script>

import Title from "./Title.vue"

export default {
    name: "About",
    components: {
        Title
    },
}
    
</script>

<style scoped>

@media only screen and (max-width: 950px) {
    #info{
        width: 50%;
        height: 50%;
    }
  }

</style>