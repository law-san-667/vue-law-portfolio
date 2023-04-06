import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')

//navbar scroll effect
var header = document.querySelector(".header");
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }
    lastScrollTop = scrollTop;
})


//just for fun
console.log("I'm a web & mobile full stack developer.");
console.log("Click on 'Law' in the footer");

//text animation
const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');
const text = 'Mouhamed Lawal DAN AZOUMI';
let index = 0;

function displayText() {
  if (index < text.length) {
    textElement.removeChild(cursorElement);
    textElement.textContent += text.charAt(index);
    textElement.appendChild(cursorElement);
    index++;
    setTimeout(displayText, 100); // Change this value to adjust the speed
  } else {
    cursorElement.style.display = 'inline';
  }
}

displayText();

//scroll reveal

const sections = document.querySelectorAll('.scroll-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // start animating the title
      animateTitle(entry.target.querySelector('.title_'));
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

function animateTitle(title) {
  // split the title into individual characters
  //first remove the semicolon
    title.innerHTML = title.innerHTML.replace(';', '');
  const characters = title.textContent.split('');
  title.textContent = '';

  // animate each character in sequence
  characters.forEach((char, i) => {
    setTimeout(() => {
      title.textContent += char;
      //add a semicolon with white color after the last character
      //only the semi colon is white
        if (i === characters.length - 1) {
            title.innerHTML += '<span class="text-white semicolon">;</span>';
        }
    }, i * 100); // adjust the delay time to control the animation speed
  });
}



//smooth scroll
const headerLinks = document.querySelectorAll('.header a[href^="#"]');

for (let link of headerLinks) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
}



document.getElementById("troll").addEventListener("click", function() {
    alert("Look at the logs !");
});
