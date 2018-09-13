<template>
    <div class="user_page_class">
        <div class="user_head">
            <img :src="imgurl">
            <input v-model="name" :disabled="!isEdit" :class="[{'edit':isEdit == true}]">
        </div>
        <div class="user_content">
            <p>
                <span>手机号：</span>
                <input v-model="mobile" :disabled="!isEdit" :class="[{'edit':isEdit == true}]">
            </p>
            <p>
                <span>单位名称：</span>
                <input v-model="company" :disabled="!isEdit" :class="[{'edit':isEdit == true}]">
            </p>
            <p class="address_class">
                <span>送货地址：</span>
                <textarea rows="5" cols="30" v-model="address" :disabled="!isEdit" :class="[{'edit':isEdit == true}]"></textarea>
            </p>
        </div>
        <div class="footer">
            <button v-if="!isEdit" @click="isEdit = !isEdit">修改信息</button>            
            <button v-if="isEdit" @click="update">确认</button>
        </div>
    </div>
</template>
<script>
import {getUserInfo,setUserInfo} from '@/api/api'

export default {
    data:function(){
        return{
            imgurl:"",
            name:"",
            mobile:"",
            address:"",
            company:"",
            isEdit:false
        }
    },
    created(){
        this.loadData()
    },
    methods:{
        update:function(){
            let param = {
                name:this.name,
                mobile:this.mobile,
                company:this.company,
                address:this.address
            }
            this.$dialog.loading.open("更新中...");
            setUserInfo(param).then(d =>{
                this.$dialog.loading.close();
            
                this.isEdit = false
                if(d.code == this.$responseStatus.success){
                    this.$dialog.toast({mes:d.result});
                }else{
                    this.$dialog.toast({mes:d.message});
                }
            })
        },
        loadData(){
            this.$dialog.loading.open();
            getUserInfo().then(d =>{
                this.$dialog.loading.close();
                if(d.code == this.$responseStatus.success){
                    this.imgurl = d.result.imgUrl
                    this.name = d.result.nickName
                    this.mobile = d.result.mobile
                    this.address = d.result.address
                    this.company = d.result.company
                }else{
                    this.$dialog.toast({mes:d.message});
                }
            })
        }
    }
}
</script>
<style lang="scss">
.user_page_class{
    padding: 10px 20px;
    background-color: #fff;
    font-size: .32rem;
    height: 100%;
    .user_head{
        img{
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 100%;
            margin-right: .5rem;
        }
        p{
            display: inline;
        }
    }
    .user_content{
        display: block;
        height: 100%;
        p{
           margin-top: .2rem;
        }

    }
    input,textarea{
        border: none;
        font-size: .32rem;

        &:disabled{
            color: #333
        }
    }

    input[disabled],input:disabled,input.disabled{
        color: #333;
        -webkit-text-fill-color:#333;
        -webkit-opacity:1;
        opacity: 1;
    }
    textarea[disabled],textarea:disabled,textarea.disabled{
        color: #333;
        -webkit-text-fill-color:#333;
        -webkit-opacity:1;
        opacity: 1;
    }
    textarea{
        background-color: #fff;
    }
    .edit{
        border: 1px solid #c5c5c5fc;
        border-radius: 5px;
    }
    .address_class{
        span:nth-child(1){
            float: left;
            line-height: initial;
        }
    }
}
</style>
