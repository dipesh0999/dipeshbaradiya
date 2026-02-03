<template>
  <header class="py-5 md:px-20 lg:px-30 flex justify-between items-center fixed w-full bg-white z-9 shadow-[0px_8px_5px_rgba(0,0,0,0.04)]
">
    <img src="../assets/images/logo.svg" class="md:w-40" />
    <div class="flex items-center gap-10">
      <a href="/" class="text-primary hover:text-black text-nav duration-300 ease-in md:text-[18px] font-medium">Home</a>
      <a href="#skills"
        class="text-primary hover:text-black text-nav duration-300 ease-in md:text-[18px] font-medium">Skills</a>
      <a href="#projects"
        class="text-primary hover:text-black text-nav duration-300 ease-in md:text-[18px] font-medium">Projects</a>
      <a href="#contact" class="md:text-[16px] font-medium rounded-full ml-[10px]">
        <!-- From Uiverse.io by Itskrish01 -->
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
  </header>
</template>
<script setup></script>
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
</style>
