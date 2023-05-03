<script setup>
</script>

<template>
  <div id="message">
    <p>
      Sorry, your screen is too small to display this content<br>
    😥
    <br>
    Try to open it on your laptop.
    <br>
    We are currently working on the mobile version^^

    </p>
  </div>

  <Header />
  <SocialBar />
  <div class="h-screen w-full section scroll-section" id="home">
    <Home />
    <div style="height: 2px;width: 60%;background-color: red;" class="mt-16 ml-32"></div>
  </div>
  <div class="h-screen w-full section scroll-section" id="about">
    <About />
    <div style="height: 2px;width: 60%;background-color: red;" class="mt-16 ml-32"></div>
  </div>
  <div class="h-screen w-full section scroll-section" id="projects">
    <Projects @toggle-modal="toggleModal" />
    <div style="height: 2px;width: 60%;background-color: red;" class="mt-16 ml-32"></div>
  </div>
  <div class="h-screen w-full flex flex-col justify-end gap-24 section scroll-section" id="contact">
    <Contact />
    <Footer />
  </div>

  <Modal @hide-modal="hideModal" :image="image" />
</template>

<script>

import Header from './components/Header.vue'
import SocialBar from './components/SocialBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Header,
    SocialBar,
    Home,
    About,
    Contact,
    Projects,
    Footer,
    Modal
  },
  data() {
    return {
      image: '/src/assets/imgs/no_image.png'
    }
  },
  methods: {
    toggleModal(imageUrl) {
      const modal = document.querySelector('.modal');
      modal.style.display = 'block';
      let img = document.querySelector('#modal-image');
      img.src = imageUrl + '';
    },
    hideModal() {
      const modal = document.querySelector('.modal');
      modal.style.display = 'none';
    }
  }

}

</script>

<style scoped>
/*.header{
  max-width: none!important;
  margin: 0!important;
}*/

#message {
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,1);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  display: none;
}

#message p{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 70%;
  transform: translateY(-50%);
}


  @media only screen and (max-width: 920px) {
    #message {
      display: block; /* display the message when screen size is smaller than 600px */
    }
  }
</style>
