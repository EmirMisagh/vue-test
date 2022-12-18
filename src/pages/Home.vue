<template>
    <div class="main px-5 py-5">
        <!-- <h1>{{head}}</h1>
        <div v-if="bool">
            <p>{{modal}}</p>
            <p>{{array[1]}}</p>
        </div>
        
        <button @click="change">click</button>
         -->
        <div class="row ">
            <div class="col-12 col-sm-6 col-md-4">
                <div class="main__poster">
                    <img src="../assets/img.jpg" alt="">
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div id="poster1" class="main__poster">
                    <img src="../assets/img.jpg" alt="">
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div id="poster2" class="main__poster">
                    <img src="../assets/img.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="row mt-5 pt-5">
            <div class="col-2 bg-info">
                gsf
            </div>
            <div class="col-2 bg-danger">
                
            </div>
            <div class="col-2 bg-info">
                gsf
            </div>
            <div class="col-2 bg-danger">

            </div>
            <div class="col-2 bg-info">
                gsf
            </div>
            <div class="col-2 bg-danger">

            </div>
        </div>
    </div>
</template>

<script>
import im from '../assets/img.jpg';

export default {
    props: ['head','text'],
    data(){
        return{
            modal: 'my ',
            bool: false,
            array: ['head','hgbhdsf']
    }
    },
    methods: {
        change(){
            this.bool = !this.bool
        }
        
    }
}
</script>


