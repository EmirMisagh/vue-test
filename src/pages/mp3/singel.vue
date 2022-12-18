<template>
    <div>
        <!-- <form>
            <label for="">Name:</label>
            <input class="m-2" type="text" v-model="email" @keyup="addskill">
            <div>
                {{email}}
            </div>
            <div v-for="skill in skills" :key="skill">
                <span @click="deleteskill(skill)">{{skill}}</span>
            </div>
        </form> -->

    </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            skills: []
        }
    },
    methods : {
        addskill(e){
            if(e.key === ',' && this.email){
                if(!this.skills.includes(this.email)){
                    this.skills.push(this.email)

                }
                this.email = ''
            }
        },
        deleteskill(skill){
            this.skills = this.skills.filter(item =>{
                if(item != skill){
                    return item;
                }
            })
        }
    }
    
}
</script>

<style>
    input{
        border: 0;
        border-bottom: 1px solid #000 ;
        outline: none;
    }
    span{
        display: inline-block;
        background-color: rgb(141, 141, 141);
        margin: 5px;
        padding: 9px;
        border-radius: 25%;
        color: aliceblue;
        cursor: pointer;
    }
</style>

