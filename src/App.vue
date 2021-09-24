<template>
  <div id="app">
    <Header/>
    <div class="px-6 sm:mx-auto sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/footer.vue";
import Header from "./components/header.vue";

export default {
  name: "app",
  components: {
    Footer,
    Header
  }
}
</script>
