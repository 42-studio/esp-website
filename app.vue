<script setup>

onBeforeMount(() => {

  // window.addEventListener('scroll', () => {
  //   document.body.style.setProperty('--scroll', String(window.scrollY / (document.body.offsetHeight - window.innerHeight)));
  // }, false);

  const options = {
    root: document.el,
    rootMargin: '0px',
    threshold: 0.5
  }

  const callback = ( entries, observer ) => {
    entries.forEach(( entry ) => {
      console.log('ENTRY', entry)
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
console.log('entry')
      console.dir(entry)
      if(entry.isIntersecting === true) {
        entry.target.classList.add('animate__animated')
      } else {
        entry.target.classList.remove('animate__animated')
      }

    });
  };

  const observer = new IntersectionObserver(callback, options)

  provide('intersectionObserver', observer)

})

</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
