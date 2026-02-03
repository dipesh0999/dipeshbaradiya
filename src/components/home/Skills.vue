<template>
  <section
    class="md:py-25 md:px-20 lg:px-30 lg:pb-25 md:pb-15 bg-[url(@/assets/images/skills-bg.png)] bg-no-repeat bg-cover"
    id="skills">
    <div class="text-center">
      <h2 class="relative inline-block text-[36px] font-subtitle tracking-[2px] font-semibold black">Skills
        <span class="md:w-[160%] border-2 border-black absolute left-1/2 bottom-0 -translate-x-1/2 border-head"></span>
      </h2>

      <p class="md:text-[20px] md:mt-5">I am striving to never stop learning and improving</p>

      <div class="md:mt-8 flex justify-center items-center">
        <div
          class="bg-black20 rounded-[10px] relative md:py-5 md:px-10 group text-center font-code before:w-2 before:h-full before:bg-black before:absolute before:left-0 before:top-0 overflow-hidden hover:before:w-full before:duration-300 before:ease-in">
          <div class="relative z-1">
            <img src="@/assets/images/icons/code.svg" alt=""
              class="md:w-15 mx-auto invert-0 group-hover:invert duration-300 ease-in" />
            <div class="md:text-[20px] md:mt-3 text-primary group-hover:text-white duration-300 ease-in">Web Development
            </div>
            <!-- <div class="md:text-[12px] md:mt-3 text-primary group-hover:text-white duration-300 ease-in">
              HTML · CSS · JS · jQuery · SCSS · VUE · GIT
            </div> -->
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center flex-wrap gap-5 md:mt-10 lg:mx-25">
        <div v-for="(item, index) in skills" :key="index" class="mb-8 relative text-center md:w-40 group">
          <div :class="[
            item.class,
            'flex justify-center items-center border-2 rounded-xl  w-full md:h-25  duration-300 ease-in bg-white relative z-1'
          ]">
            <img :src="item.image" :alt="item.title" class="w-10 h-10 group-hover:brightness-0 group-hover:invert" />
          </div>
          <p
            :class="[item.titleClass, 'text-[16px] font-semibold tracking-[1px] uppercase absolute left-1/2 -translate-x-1/2 bottom-1/2 group-hover:-bottom-8 duration-300 ease-in']">
            {{
              item.title }}</p>
        </div>
      </div>


    </div>
  </section>
</template>
<script setup>
import Html from '@/assets/images/icons/code/html.svg'
import Css from '@/assets/images/icons/code/css.svg'
import Tailwind from '@/assets/images/icons/code/tailwind.svg'
import Sass from '@/assets/images/icons/code/sass.svg'
import Js from '@/assets/images/icons/code/js.svg'
import Jquery from '@/assets/images/icons/code/jquery.svg'
import VueIcon from '@/assets/images/icons/code/vue.svg'
import Git from '@/assets/images/icons/code/git.svg'
import Ps from '@/assets/images/icons/code/ps.svg'
import Figma from '@/assets/images/icons/code/figma.svg'

const skills = [
  {
    class: 'border-orange group-hover:bg-orange',
    image: Html,
    title: 'HTML',
    // titleClass: 'group-hover:text-orange',
  },
  {
    class: 'border-blue group-hover:bg-blue',
    image: Css,
    title: 'CSS',
    // titleClass: 'group-hover:text-blue',
  },
  {
    class: 'border-skyBlue group-hover:bg-skyBlue',
    image: Tailwind,
    title: 'Tailwind',
    // titleClass: 'group-hover:text-skyBlue',
  },
  {
    class: 'border-pink group-hover:bg-pink',
    image: Sass,
    title: 'Sass',
    // titleClass: 'group-hover:text-pink',
  },
  {
    class: 'border-lightOrange group-hover:bg-lightOrange',
    image: Js,
    title: 'JavaScript',
    // titleClass: 'group-hover:text-lightOrange',
  },
  {
    class: 'border-midBlue group-hover:bg-midBlue',
    image: Jquery,
    title: 'jQuery',
    // titleClass: 'group-hover:text-midBlue',
  },
  {
    class: 'border-lightGreen group-hover:bg-lightGreen',
    image: VueIcon,
    title: 'Vue',
    // titleClass: 'group-hover:text-lightGreen',
  },
  {
    class: 'border-fire group-hover:bg-fire',
    image: Git,
    title: 'Git',
    // titleClass: 'group-hover:text-fire',
  },
  {
    class: 'border-darkBlue group-hover:bg-darkBlue',
    image: Ps,
    title: 'Photoshop',
    // titleClass: 'group-hover:text-darkBlue',
  },
  {
    class: 'border-purple group-hover:bg-purple',
    image: Figma,
    title: 'Figma',
    // titleClass: 'group-hover:text-purple',
  },
]
</script>

<style></style>
