<script setup>
</script>

<template>

    <Header/>
    <SocialBar/>
    <div class="h-screen w-full section scroll-section" id="home">
      <Home/>
      <div style="height: 2px;width: 60%;background-color: red;" class="mt-16 ml-32" ></div>
    </div>
    <div class="h-screen w-full section scroll-section" id="about">
      <About/>
      <div style="height: 2px;width: 60%;background-color: red;" class="mt-16 ml-32" ></div>
    </div>
    <div class="h-screen w-full section scroll-section" id="projects">
      <Projects/>
      <div style="height: 2px;width: 60%;background-color: red;" class="mt-16 ml-32" ></div>
    </div>
    <div class="h-screen w-full flex flex-col justify-end gap-24 section scroll-section" id="contact">
      <Contact/>
      <Footer/>
    </div>


</template>

<script>

  import Header from './components/Header.vue'
  import SocialBar from './components/SocialBar.vue'
  import Home from './components/Home.vue'
  import About from './components/About.vue'
  import Contact from './components/Contact.vue'
  import Projects from './components/Projects.vue'
  import Footer from './components/Footer.vue'


  export default {
    name: 'App',
    components: {
      Header,
      SocialBar,
      Home,
      About,
      Contact,
      Projects,
      Footer
    }
  }

</script>

<style scoped>
/*.header{
  max-width: none!important;
  margin: 0!important;
}*/

</style>
