<template>
    <div>
        <h1>{{head}}</h1>
        <div v-if="bool">
            <p>{{modal}}</p>
            <p>{{array[1]}}</p>
        </div>
        
        <button @click="change">click</button>
        
    </div>
</template>

<script>
import '../assets/home.css';
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


