<script setup>
</script>

<template>
    <div class="header h-20 w-screen flex items-center justify-end fixed top-0 left-0 right-0 font-bold text-gray-400">
        <ul class="w-1/3 flex justify-between items-center mr-28 text-lg">
            <li class="inline-block mr-4">
                <a href="#home">home()</a>
            </li>
            <li class="inline-block mr-4">
                <a href="#about">about_me()</a>
            </li>
            <li class="inline-block mr-4">
                <a href="#projects">projects()</a>
            </li>
            <li class="inline-block mr-4 ">
                <a href="#contact">contact()</a>
            </li>
        </ul>
    </div>

</template>

<script>

export default {
    name: "Header",
    props: {
        msg: String
    }
}
</script>

<style scoped >

li:hover{
  color: #f2f2f2;
  cursor: pointer;
  transform: translateY(-2px);
}

.header{
    z-index: 9998;
    box-shadow: 0 2px 6px black ;
    transition: transform 0.3s ease-in-out;
    background-color: #000621;
}

.header-hidden {
  transform: translateY(-100%);
}

</style>