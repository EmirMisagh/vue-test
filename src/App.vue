<template>
   <div>
    <Navbar />
    <Home />
</div>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import Home from './components/Home.vue';
    import { BootstrapVue } from 'bootstrap-vue-3'


export default {
  name: 'App',
  components: { Navbar,Home },
  data(){
        return{
            title: 'this a test'
        }
  },
  methods: {
    handle(){
        console.log('dfd');
        console.log(this.$refs.name.value);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
