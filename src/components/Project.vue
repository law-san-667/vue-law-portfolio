<template>
    <div class="w-full h-full flex project">
        <div class="w-2/5 h-9/12 flex flex-col justify-center gap-y-4">
            <img :src="imageUrl" class="image" @click="$emit('toggle-modal', imageUrl)" alt="">
            <div v-if="images.length > 1" class="w-full sliders h-12 flex items-start justify-center gap-x-10">
                <span class="text-red-500 text-4xl" @click="changeImageLeft" >&lt;-</span>
                <span class="text-red-500 text-4xl" @click="changeImageRight" >-></span>
            </div>
        </div>
        <div class="flex flex-col justify-center h-full w-1/2"> 
            <div class="w-full h-1/4 text-blue-500 pl-16" style="font-size: 3vw;">{{ project.name }} </div>
            <div class="w-full h-1/2 pl-32 text-red-500 w-11/12" id="des" style="font-size: 1.2vw;"
                v-html="project.description">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Project",
    props: {
        project: {
            type: Object,
            required: true
        },
        images: {
            type: Array,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    computed: {
        imageUrl() {
            return this.images[this.index];
        }
    },
    methods: {
        changeImageRight() {
            this.$emit('change-image-right', this.index);
        },
        changeImageLeft() {
            this.$emit('change-image-left', this.index);
        }
    }
}
</script>

<style scoped>
.image {
    height: fit-content;
    object-fit: contain;
}

.sliders{
    height: 20%;
}

.sliders span:hover{
    cursor: pointer;
}

img:hover{
    cursor: pointer;
    opacity: 0.6;
}
</style>