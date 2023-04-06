<template>
    <div data-aos="fade-left" class="bg-red-800 rounded-3xl w-14 flex flex-col items-center justify-between h-56 pt-4 pb-4 fixed top-1/3 right-3">
      <div>
        <!--display github.svg from assets/-->
        <a href="https://github.com/law-san-667">
          <img src="../assets/github.svg" alt="github" class="w-7 h-7">
        </a>
      </div>
      <div>
        <!--display linkedin.svg from assets/-->
        <a href="https://www.linkedin.com/in/mouhamed-lawal-dan-azoumi-597975206/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B2z40lck6Q0WdOXJ5bG2sig%3D%3D&original_referer=">
          <img src="../assets/linkedin.svg" alt="linkedin" class="w-7 h-7">
        </a>
      </div>  
      <div>
        <!--display twitter.svg from assets/-->
        <a href="https://twitter.com/DanMouhamed">
          <img src="../assets/twitter.svg" alt="twitter" class="w-7 h-7">
        </a>
      </div>
      <div>
        <!--display instagram.svg from assets/-->
        <a href="https://www.instagram.com/mo_lawdaz/">
          <img src="../assets/instagram.svg" alt="instagram" class="w-7 h-7">
        </a>
      </div>
    </div>
</template>

<script>

export default {
    name: "SocialBar",
}

</script>

<style scoped >

img:hover{
  /* width: 2rem;
  height: 2rem; */
  transform: translateX(-5px);
}



</style>