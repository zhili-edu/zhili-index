<template>
  <div id="app">
    <Header/>
    <div class="px-6 sm:mx-auto sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl">
      <Nuxt />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";

export default {
  name: "app",
  components: {
    Footer,
    Header
  }
}
</script>
