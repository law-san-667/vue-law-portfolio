<template>
    <div class=" w-10/12 h-5/6 mt-16 ml-28 flex flex-col items-start pt-32">
        <div class="h-16 w-1/4 text-red-500 text-2xl font-bold" style="font-size: 2vw;">
            <Title location="projects" />
        </div>
        <div class="h-5/6 w-full flex mt-12" data-aos="fade-right">
            <div class="h-full  w-full flex justify-center items-center pl-16">
                <div @click="previousProject" id="left" class="slider flex items-center justify-center text-white h-32 w-24">&lt;</div>
                <Project :project="displayedProject" />
                <div @click="nextProject" id="right" class="slider flex items-center justify-center text-white h-32 w-24">></div>
            </div>
            <div class="h-full flex justify-end">
            </div>
        </div>
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
                    image: "/src/assets/imgs/projects/schoolup.png",
                    link: "https://github.com/azimari-toure-ikbal/projet-java-gestion-scolarite"
                },

                {
                    id: 1,
                    name: "flutter-law-gpt",
                    description: "This is a mobile app that uses OpenAi API to implement chat functionality with different models that we can choose.",
                    image: "/src/assets/imgs/projects/flutter_gpt.png",
                    link: "https://github.com/law-san-667/flutter-law-gpt"
                },
                {
                    id: 2,
                    name: "Lawmine shop",
                    description: "An App with laravel to manage products (yeah basically it's like a todolist but with products).<br>This is a collaborative project, I worked on the backend with laravel and my friend worked on the frontend with Tailwind.",
                    image: "/src/assets/imgs/projects/laravel_products.png",
                    link: "https://github.com/law-san-667/gestion-produits-laravel"
                },
                {
                    id: 3,
                    name: "Plant App",
                    description: "This is an app of presentation of some plant in order to buy them. There is no back so actually you can't really buy anything haha.<br>That for me a good way to learn Flutter basics.",
                    image: "/src/assets/imgs/projects/plant_app.png",
                    link: "https://github.com/law-san-667/flutter-plant-app"
                },
                {
                    id: 4,
                    name: "Booking Law",
                    description: "This is a flight booking app with admin, users & companies interfaces made with PHP.<br>Really cool.",
                    image: "/src/assets/imgs/projects/booking1.png",
                    link: "https://github.com/law-san-667/php-booking-flight-app"
                },
                {
                    id: 5,
                    name: "Vue task tracker",
                    description: "This is a basic task tracker made with VueJS and tailwind. Json server was used for the \"back-end\".",
                    image: "/src/assets/imgs/projects/vue_task_tracker.png",
                    link: "https://github.com/law-san-667/vue-task-tracker"
                },
                {
                    id: 6,
                    name: "Angular todo-list",
                    description: "This is a todo-list app made with Angular & Bootstrap. It's a simple app that allows you once you are logged in to add, delete, update and mark as done your tasks.<br>I used JSON server to simulate a backend.",
                    image: "/src/assets/imgs/projects/angular-todolist.png",
                    link: "https://github.com/law-san-667/angular-todolist-app"
                },

            ],
            displayedProject: {
                id: 0,
                name: "SchoolUp",
                description: "Another colaborative project. This is a school management app that I made with Java SE and JavaFX. It's a desktop app that allows you to manage students, classes, courses, etc...<br>I worked on the backend and my two associates worked on the frontend and files managements",
                image: "/src/assets/imgs/projects/schoolup.png",
                link: "https://github.com/azimari-toure-ikbal/projet-java-gestion-scolarite"
            },
        }
    },
    methods: {
        nextProject() {
            if (this.displayedProject.id < this.projects.length - 1) {
                this.displayedProject = this.projects[this.displayedProject.id + 1];
            } else {
                this.displayedProject = this.projects[0]
            }
        },
        previousProject() {
            if (this.displayedProject.id > 0) {
                this.displayedProject = this.projects[this.displayedProject.id - 1]
            } else {
                this.displayedProject = this.projects[this.projects.length - 1]
            }
        }
    }

}



</script>


<style scoped>
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
</style>