<template>
    <footer class="bg-black flex justify-center items-center gap-5 md:gap-10 py-5 pb-10 px-8 md:py-5 md:px-20 lg:px-30">
        <div class="text-white" v-for="(item, index) in social" :key="index">
            <a :href="item.url" class="" target="_blank">
                <img :src="item.image" alt="" class="w-9 md:w-8 invert-50 hover:invert-100 duration-300 ease-in" />
            </a>
        </div>
    </footer>
</template>
<script setup>
import Email from '@/assets/images/social/email.svg'
import Github from '@/assets/images/social/github.svg'
import Linkedin from '@/assets/images/social/linkedin.svg'

const social = [
    {
        url: 'mailto:dipeshbr25@gmail.com',
        image: Email,
    },
    {
        url: 'https://github.com/dipesh0999',
        image: Github,
    },
    {
        url: 'https://www.linkedin.com/in/dipesh-baradiya/',
        image: Linkedin,
    },
]
</script>
<style></style>
