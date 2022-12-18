<template>
    <div class="navic ">
        <div class="row navic__top ">
            <div class="col-6 col-md-3 c1 ">
                 <router-link to="/"><h3>RaceCity</h3></router-link>
            </div>
            <div class="col-6 col-md-6 c2">
                <input type="text" placeholder="search">
                <button>search</button>
            </div>
            <div class="col-0 col-md-3 c3">
                <router-link to="/"><button class="btn ">Log In</button></router-link>
                <router-link to="/"><button class="btn ">Sign Up</button></router-link>
            </div>
        </div>
        <div class="navic__bottom row">
            <div class="col-11 col-md-6 c1">
                    <router-link to="/"><li>Music</li></router-link>
                    <router-link to="/about"><li>Playlists</li></router-link>
                    <router-link to="/"><li>Videos</li></router-link>
                    <router-link to="/"><li id="nav-foul">Padkst</li></router-link>
                    <router-link to="/"><li id="nav-foul">Padkst</li></router-link>
                    <router-link to="/"><li class="" id="btn-login">Log in</li></router-link>
            </div>
           
            <div class="col-1 col-md-6 c3">
                <li><router-link to="./">Music</router-link></li>
                <li>Playlists</li>
                <li>Videos</li>
                <li id="btn-menu"><button @click="menuhandler">men</button></li>
            </div>
        </div>
        <div class="navic__menu">
            ghf
        </div>
        <router-view></router-view>
    </div>
    <!-- <ul class="d-flex ">
        <router-link to="./">Go to Home</router-link>
        <router-link to="./about">Go to About</router-link>
        <router-link to="/player/:id">Go to About</router-link>
    </ul> -->
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { LaSearchSolid } from "oh-vue-icons/icons";

addIcons(LaSearchSolid)

window.onscroll = function(){
    if(window.pageYOffset > 55){
        const nav = document.querySelector('.navic__bottom');
        nav.classList.add('fix');
    }else {
        const nav = document.querySelector('.navic__bottom');
        nav.classList.remove('fix');
    }
}
export default {
    props: [],
    data(){
        return{
            menu : 0
    }
    },
    methods: {
        menuhandler(){
            if(this.menu == 0){
                document.querySelector('.navic__menu').classList.add('navic__active');
                this.menu = 1
            }else{
                document.querySelector('.navic__menu').classList.remove('navic__active');
                this.menu = 0
            }
        }
        
    }
}
</script>

