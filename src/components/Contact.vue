<template>
    <div class=" w-10/12 h-4/6 mt-16 ml-28 flex flex-col items-start"  >
        <div class="h-16 w-1/4 text-red-500 text-2xl font-bold" style="font-size: 2vw;">
            <Title location="contact" />
        </div>
        <div class="h-5/6 w-full flex mt-12" data-aos="fade-up">
            <div class="h-full w-5/6 flex flex-col pl-32">
                <span class="text-blue-500" style="font-size: 4vw;" >
                    Get in touch !
                </span>
                <span class="text-white text-2xl w-4/5 mt-12">
                    "Although I’m currently looking for any new opportunities, my inbox is always open.\n <br> Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
                </span>
            </div>
             <div class="h-11/2 flex flex-col justify-start mb-24 items-center pl-4">
                <!--display programming.svg from assets/-->
                <img src="../assets/contact.svg" alt="programming" class="w-9/12 h-full">
                <button 
                class="bottom-0 text-white rounded-lg bg-blue-600
                py-5 px-10 hover:bg-blue-800 font-bold" style="font-size: 1.7vw;" >
                    <a href="mailto:lawdanazoumi@gmail.com">send_mail();</a>
                </button>
            </div>
        </div>
        <div style="height: 2px;width: 60%;background-color: red;" ></div>
    </div>
</template>

<script>

import Title from "./Title.vue"

export default {
    name: "Contact",
    components: {
        Title
    },
}
    
</script>