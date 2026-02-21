<template>
  <section class="pt-20 pb-15 px-8 md:pt-30 md:px-20 lg:px-30 md:pb-25 md:h-[100vh] overflow-hidden">
    <div class="flex flex-col md:flex-row gap-10 md:gap-20 items-end md:items-start">
      <div class="md:w-120 lg:w-200 text-primary mt-5">
        <div
          class="relative pl-8 md:pl-10 text-[26px] md:text-[32px] leading-[1.2] before:absolute before:w-6 md:before:w-7 before:h-[2px] before:bg-primary before:left-0 before:top-1/2 before:-translate-y-1/2">
          Hello
        </div>
        <h1 class="text-[24px] md:text-[34px] lg:text-[40px] leading-[1.2] mt-4 mb-3 md:mt-2 md:mb-4">
          I'm <span class="font-title font-semibold text-[28px] md:text-[38px] lg:text-[46px] text-black">Dipesh
            Baradiya</span>
        </h1>
        <p class="text-[12px] md:text-[14px] lg:text-[18px]">
          As a dedicated Frontend Developer with 3 years of experience, I specialize in developing
          responsive, user-friendly interfaces for web development. Leveraging expertise in HTML,
          CSS, SCSS, jQuery, JavaScript and Vue Js. I transform innovative design concepts into
          functional. My collaborative approach allows me to work effectively with designers,
          backend developers to build high-performing websites. Committed to enhancing user
          experience, I focus on optimizing performance, scalability, and cross-device compatibility
          to deliver seamless digital solutions.
        </p>
        <p class=""></p>
      </div>
      <div class="w-75 sm:w-65 md:w-100 relative pt-5">
        <img src="@/assets/images/profile.png" alt=""
          class="w-[80%] relative z-1 filter drop-shadow-[0px_10px_15px_#000000]" />
        <img src="@/assets/images/geomatric.svg" alt="" class="w-45 md:w-50 lg:w-70 absolute right-3 top-0" />
      </div>
    </div>
    <div class="hidden md:block text-center mt-10">
      <div class="w-4 md:w-6 lg:w-10 mx-auto mb-2">
        <svg width="100%" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" style="
            fill-rule: evenodd;
            clip-rule: evenodd;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 1.5;
          ">
          <path id="wheel" d="M123.359,79.775l0,72.843" style="fill: none; stroke: #313131; stroke-width: 20px" />
          <path id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style="fill: none; stroke: #313131; stroke-width: 20px" />
        </svg>
      </div>
      <p class="text-[20px] animate_Up">Scroll down</p>
    </div>
  </section>
</template>

<style>
@keyframes scroll {
  0% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(120px);
  }
}

svg #wheel {
  animation: scroll ease 2s infinite;
}

@keyframes animateUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.animate_Up {
  animation: animateUp 2.5s ease 500ms infinite;
}
</style>
