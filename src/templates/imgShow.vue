<template>
    <div class="img_show_class" @click="imgHide" :name="name">
        <div class="imgContent">
            <h1>{{title}}</h1>
            <img :src="url">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        url:{
            required:true,
            type:String,
            default:""
        },
        title:{
            required:true,
            type:String,
            default:""
        },
        name:{
            required:true,
            type:String,
            default:""
        }
    },
    data:function(){
        return{
        }
    },
    methods:{
        imgHide:function(){
           $(`[name='${this.name}']`).hide()
        },
        show:function(){
            $(`[name='${this.name}']`).show()
        }
    },
    watch:{
       
    }
}
</script>

<style lang="scss">
.img_show_class{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    padding: .5rem;

    h1{
        font-size: 20px;
    }
    .imgContent{
        text-align: center;
        background-color: #ffffff;
    }
    img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
}
</style>
