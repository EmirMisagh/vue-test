<template>
  <div>
    <Navbar />
    <Home head='Hello World' :text='text' />
    <h1>dsfsdf</h1>
    <Singel />
  </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import Home from './pages/Home.vue';
    import Singel from './pages/mp3/singel.vue';
    import { BootstrapVue } from 'bootstrap-vue-3'


export default {
  name: 'App',
  components: { Navbar,Home,Singel },
  data(){
        return{
            title: 'this a test',
            text: 'give mi'
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
