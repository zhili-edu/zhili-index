<template>
  <div id="app">
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Main from './components/index';
import Footer from './components/footer';
export default {
  name: 'App',
  components: {
    Main,
    Footer
  }
}
</script>

<style>
</style>
