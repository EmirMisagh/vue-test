import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../pages/Home.vue';
import Singel from '../pages/mp3/singel.vue';
import Player from '../pages/mp3/player.vue';

const routes = [
    { 
      path: '/', 
      name: 'Home',
      component: Home 
    },
    { 
      path: '/about', 
      name: 'Singel',
      component: Singel 
    },
    { 
      path: '/player/:id', 
      name: 'player',
      component: Player 
    },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
  })

  export default router;