<template>
  <div class="container-fluid p-0">
    
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';   
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: { Navbar, Footer },
  data(){
        return{
            title: 'this a test',
            text: 'give mi'
        }
  },
  methods: {
    handle(){
        console.log('dfd');
    }
  }
}
</script>

<style>

</style>
