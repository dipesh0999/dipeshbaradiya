<template>
  <header class="py-5 px-5 md:py-5 md:px-20 lg:px-30 flex justify-between items-center fixed w-full bg-white z-9 shadow-[0px_8px_5px_rgba(0,0,0,0.04)]
">
    <img src="../assets/images/logo.svg" class="w-30 md:w-40" />
    <div class="fixed bg-black/50 menuList md:bg-transparent md:relative w-full h-screen md:h-auto md:w-auto md:relative pt-5 md:pt top-18 md:top-auto md:left-auto -left-[100%] 
         " :class="[
           'menu',
           { active: isMenuOpen }
         ]">
      <div class=" bg-white md:bg-transparent flex flex-col md:flex-row items-center gap-10 py-15 md:p-0">
        <a href="/"
          class="text-primary hover:text-black text-nav duration-300 ease-in text-[24px] md:text-[18px] font-medium">Home</a>
        <a href="#skills"
          class="text-primary hover:text-black text-nav duration-300 ease-in text-[24px] md:text-[18px] font-medium">Skills</a>
        <a href="#projects"
          class="text-primary hover:text-black text-nav duration-300 ease-in text-[24px] md:text-[18px] font-medium">Projects</a>
        <a href="#contact" class="text-[22px] md:text-[16px] font-medium rounded-full ml-[10px]">
          <div
            class="relative flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-black50 rounded-md group">
            <span
              class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span
              class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white">
              </span>
            </span>
            <span
              class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-black50 rounded-md group-hover:translate-x-0">
            </span>
            <span
              class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Let's Talk
            </span>
          </div>
        </a>
      </div>
    </div>
    <div class="md:hidden inline-flex">
      <a href="#" class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span class="hamburger_line"></span>
        <span class="hamburger_line"></span>
        <span class="hamburger_line"></span>
      </a>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
<style>
.text-nav {
  position: relative;
}

.text-nav::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #313131;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-in-out;
}

.text-nav:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}



.hamburger {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 30px;
  height: 20px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 7px);
}

.hamburger.active span:nth-child(2) {
  display: none;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -8px);
}

.hamburger_line {
  display: block;
  width: 100%;
  height: 2px;
  background: #313131;
  transition: all 0.4s ease-in-out;
}

.menuList {
  transition: all .3s ease-in;
}

.menuList.active {
  left: 0;
}
</style>
