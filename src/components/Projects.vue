<template>
    <div class=" w-10/12 h-5/6 mt-16 ml-28 flex flex-col items-start pt-32">
        <div class="h-16 w-1/4 text-red-500 text-2xl font-bold" style="font-size: 2vw;">
            <Title location="projects" />
        </div>
        <div class="h-5/6 w-full flex mt-12" data-aos="fade-right">
            <div class="h-full w-full flex justify-center items-center pl-16">
                <div @click="previousProject" id="left" class="slider flex items-center justify-start text-white h-32 w-32">
                    &lt;</div>
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

    <div style="position:absolute; display: none;">
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
            projects: [
                {
                    id: 0,
                    name: "SchoolUp",
                    description: `Another colaborative project. This is a school management app that I made with Java SE and JavaFX. It's a desktop app that allows you to manage students, classes, courses, etc...\n
                    I worked on the backend and my two associates worked on the frontend and files managements`,
                    images: [
                        "../assets/schoolup1-e88827bd.png",
                        "../assets/schoolup2-3adf6ec1.png",
                        "../assets/schoolup3-91c8eb67.png",
                    ],
                    link: "https://github.com/azimari-toure-ikbal/projet-java-gestion-scolarite"
                },

                {
                    id: 1,
                    name: "flutter-law-gpt",
                    description: "This is a mobile app that uses OpenAi API to implement chat functionality with different models that we can choose.",
                    images: [
                        "../assets/law_gpt-3ea59182.png",
                    ],
                    link: "https://github.com/law-san-667/flutter-law-gpt"
                },
                {
                    id: 2,
                    name: "Lawmine shop",
                    description: "An App with laravel to manage products (yeah basically it's like a todolist but with products).<br>This is a collaborative project, I worked on the backend with laravel and my friend worked on the frontend with Tailwind.",
                    images: [
                        "../assets/lawmine-42e05ef6.png",
                        "../assets/lawmine2-8eb3b854.png",
                        "../assets/lawmine3-bf8e8057.png"
                    ],
                    link: "https://github.com/law-san-667/gestion-produits-laravel"
                },
                {
                    id: 3,
                    name: "Plant App",
                    description: "This is an app of presentation of some plant in order to buy them. There is no back so actually you can't really buy anything haha.<br>That for me a good way to learn Flutter basics.",
                    images: [
                        "../assets/plant_app1-e85b2bcc.png",
                        "../assets/plant_app2-13cbc9fd.png"
                    ],
                    link: "https://github.com/law-san-667/flutter-plant-app"
                },
                {
                    id: 4,
                    name: "Booking Law",
                    description: "This is a flight booking app with admin, users & companies interfaces made with PHP.<br>Really cool.",
                    images: [
                        "../assets/booking-66f7e186.png",
                        "../assets/booking2-24791369.png",
                        "../assets/booking3-672a915e.png"
                    ],
                    link: "https://github.com/law-san-667/php-booking-flight-app"
                },
                {
                    id: 5,
                    name: "Vue task tracker",
                    description: "This is a basic task tracker made with VueJS and tailwind. Json server was used for the \"back-end\".",
                    images: [
                        "../assets/vue_todo-ab33f516.png",
                        "../assets/vue_todo2-ca2716a8.png"
                    ],
                    link: "https://github.com/law-san-667/vue-task-tracker"
                },
                {
                    id: 6,
                    name: "Angular todo-list",
                    description: "This is a todo-list app made with Angular & Bootstrap. It's a simple app that allows you once you are logged in to add, delete, update and mark as done your tasks.<br>I used JSON server to simulate a backend.",
                    images: [
                        "../assets/ng_todo1-0f10ae40.png",
                        "../assets/ng_todo2-13a924b4.png",
                    ],
                    link: "https://github.com/law-san-667/angular-todolist-app"
                },

            ],
            index: 0,
            displayedProject: {},
            images: []
        }
    },
    created() {
        this.setDisplayedProject(this.projects[0])
    },
    methods: {
        setDisplayedProject(project) {
            this.displayedProject = project
            this.images = project.images
        },
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
        changeImageLeft(index) {
            if (index == this.images.length - 1) {
                this.index = 0;
            } else {
                this.index = index + 1;
            }
        },
        changeImageRight(index) {
            if (index == 0) {
                this.index = this.images.length - 1;
            } else {
                this.index = index - 1;
            }
        },
        emitToggleModal(imageUrl) {
            this.$emit("toggle-modal", imageUrl);
        },
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


