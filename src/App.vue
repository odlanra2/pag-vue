<template>
  <div id="app">
    <Menu/>  
     <router-view/>
   <Footer/> 
  </div>
</template>

<script>
import Menu from './components/layout/Menu.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Footer
  }
}
</script>

<style>

</style>
