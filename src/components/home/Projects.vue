<template>
    <section class="py-15 px-8 md:py-25 md:px-20 lg:px-30 md:pb-15" id="projects">
        <div class="text-center">
            <h2 class="relative inline-block text-[36px] font-subtitle tracking-[2px] font-semibold black">Projects
                <span class="w-[160%] border-2 border-black absolute left-1/2 bottom-0 -translate-x-1/2 border-head"></span>
            </h2>
        </div>
        <div class="flex justify-center items-center gap-10 flex-wrap mt-15">
            <div class="w-full md:w-60 lg:w-90" v-for="(item, index) in projects" :key="index">
                <a :href="item.url" class="group" target="_blank">
                    <div class="md:w-full md:h-45 lg:h-65 overflow-hidden">
                        <img :src="item.image" alt="" class="w-full h-full group-hover:scale-[1.1] duration-300 ease-in" />
                    </div>
                    <h3 class="text-[26px] lg:text-[24px] md:text-[20px] mt-3 text-primary font-medium tracking-[.5px]">{{
                        item.title }}</h3>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>

import Amns from '@/assets/images/client/AMNS.webp'
import FinMapp from '@/assets/images/client/FinMapp.webp'
import Hodge from '@/assets/images/client/hodge.webp'
import Lupin from '@/assets/images/client/lupin.webp'
import Mol from '@/assets/images/client/MOL.webp'
import Mtw from '@/assets/images/client/mtw.webp'
import Nayara from '@/assets/images/client/Nayara.webp'
import Sanyo from '@/assets/images/client/sanyo.webp'
import Welspun from '@/assets/images/client/welspun.webp'

const projects = [
    {
        image: Hodge,
        title: "Hodge",
        url: 'https://hodge.pixeldust.app/',
    },
    {
        image: Mtw,
        title: "MTW",
        url: 'https://mumbaitechweek.com/',
    },
    {
        image: Lupin,
        title: "Lupin US",
        url: 'https://www.lupin.com/US',
    },
    {
        image: Mol,
        title: "Mol Same",
        url: 'https://www.mol-same.com/',
    },
    {
        image: Sanyo,
        title: "Sanyo Special Steel",
        url: 'https://www.sanyospecialsteel.in/',
    },
    {
        image: Welspun,
        title: "Welspun Flooring",
        url: 'https://welspunflooring.com/',
    },
    {
        image: FinMapp,
        title: "Airpay Money",
        url: 'https://www.airpay.money/',
    },
    {
        image: Nayara,
        title: "Nayara Energy",
        url: 'https://www.nayaraenergy.com/',
    },
    {
        image: Amns,
        title: "AMNS India",
        url: 'https://www.amns.in/',
    },
]
</script>