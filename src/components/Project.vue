<template>
    <div class="w-2/5 h-full flex items-center">
        <img :src="project.image" class="image" alt="">
    </div>
    <div class="flex flex-col justify-center h-full w-1/2">
        <div class="w-full h-1/4 text-blue-500 pl-16" style="font-size: 3vw;">{{ project.name }} </div>
        <div class="w-full h-1/2 pl-32 text-red-500 w-11/12" id="des" style="font-size: 1.2vw;" v-html="project.description" >
        </div>
    </div>
</template>

<script>

export default {
    name: "Project",
    props: {
        project : {
            type: Object,
            required: true
        },
    },
    computed: {
        imageUrl(){
            return this.project.image
        }
    }
}

</script>

<style scoped>

.image{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

</style>

