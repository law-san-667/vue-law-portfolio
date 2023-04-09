<template>
    <div class=" w-10/12 h-5/6 mt-16 ml-28 flex flex-col items-start pt-32">
        <div class="h-16 w-1/4 text-red-500 text-2xl font-bold" style="font-size: 2vw;">
            <Title location="projects" />
        </div>
        <div class="h-5/6 w-full flex mt-12" data-aos="fade-right">
            <div class="h-full w-full flex justify-center items-center pl-16">
                <div @click="previousProject" id="left"
                    class="slider flex items-center justify-start text-white h-32 w-32">&lt;</div>
                <Project :project="displayedProject" :images="displayedProject.images" :index=index
                @toggle-modal="emitToggleModal" @change-image-right="changeImageRight" 
                @change-image-left="changeImageLeft" />

                <div @click="nextProject" id="right" class="slider flex items-center justify-center text-white h-32 w-24">>
                </div>
            </div>
            <div class="h-full flex justify-end">
            </div>
        </div>
    </div>

    <div style="position:absolute; display: none;" >
        <img src="../assets/schoolup1.png" alt="">
        <img src="../assets/schoolup2.png" alt="">
        <img src="../assets/schoolup3.png" alt="">
        <img src="../assets/law_gpt.png" alt="">
        <img src="../assets/lawmine.png" alt="">
        <img src="../assets/lawmine2.png" alt="">
        <img src="../assets/lawmine3.png" alt="">
        <img src="../assets/plant_app1.png" alt="">
        <img src="../assets/plant_app2.png" alt="">
        <img src="../assets/booking.png" alt="">
        <img src="../assets/booking2.png" alt="">
        <img src="../assets/booking3.png" alt="">
        <img src="../assets/vue_todo.png" alt="">
        <img src="../assets/vue_todo2.png" alt="">
        <img src="../assets/ng_todo1.png" alt="">
        <img src="../assets/ng_todo2.png" alt="">
    </div>
</template>

<script>

import Title from "./Title.vue"
import Project from "./Project.vue"

export default {
    name: "Projects",
    components: {
        Title,
        Project
    },
    
    data() {
        return {
            projects: [],
            displayedProject: {},
            images: [],
            index: 0
        }
    },
    methods: {
        nextProject() {
            let project_section = document.querySelector(".project");
            project_section.classList.add("animate__animated", "animate__fadeOutLeft");

            setTimeout(() => {
                if (this.displayedProject.id < this.projects.length - 1) {
                    this.displayedProject = this.projects[this.displayedProject.id + 1];
                } else {
                    this.displayedProject = this.projects[0];
                }
                this.images = this.displayedProject.images;
                this.index = 0;
                setTimeout(() => {
                    project_section.classList.remove("animate__animated", "animate__fadeOutLeft");
                }, 500);
            }, 300);
        },
        previousProject() {
            let project_section = document.querySelector(".project");
            project_section.classList.add("animate__animated", "animate__fadeOutRight");
            
            setTimeout(() => {
                if (this.displayedProject.id > 0) {
                    this.displayedProject = this.projects[this.displayedProject.id - 1];
                } else {
                    this.displayedProject = this.projects[this.projects.length - 1];
                }
                this.images = this.displayedProject.images;
                this.index = 0;

                setTimeout(() => {
                    project_section.classList.remove("animate__animated", "animate__fadeOutRight");
                }, 500);
            }, 300);
        },
        changeImageLeft(index){
            if(index == this.images.length - 1){
                this.index = 0;
            } else {
                this.index = index + 1;
            }
        },
        changeImageRight(index){
            if(index == 0){
                this.index = this.images.length - 1;
            } else {
                this.index = index - 1;
            }
        },
        emitToggleModal(imageUrl){
            this.$emit("toggle-modal", imageUrl);
        }
    }

}



</script>


<style>
.slider {
    font-size: 5vw;
}

#right:hover {
    cursor: pointer;
    transform: translateX(10px);
}

#left:hover {
    cursor: pointer;
    transform: translateX(-10px);
}

.animate__animated {
    animation-duration: 0.9s;
    animation-fill-mode: both;
}

.animate__fadeOutLeft {
    animation-name: fadeOutLeft;
}

@keyframes fadeOutLeft {
    0% {
        opacity: 1;
    }

    40% {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    
    60% {
        opacity: 0;
        transform: translate3d(200%, 0, 0);
    }
    100% {
        opacity: 1;
        transform: translate3d(0%, 0, 0);
    }

}

.animate__fadeOutRight {
    animation-name: fadeOutRight;
}

@keyframes fadeOutRight {
    0% {
        opacity: 1;
    }

    40% {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    60% {
        opacity: 0;
        transform: translate3d(-200%, 0, 0);
    }

    100% {
        opacity: 1;
        transform: translate3d(0%, 0, 0);
    }
}
</style>


