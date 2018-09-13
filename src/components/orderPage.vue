<template>
    <div class="orderpage_class">
        <yd-cell-group>
            <yd-cell-item>
                <p class="flex flex_align_center" slot="left"><yd-icon name="search" size=".5rem" color="#AAAAAA"></yd-icon>
                    <span>订单日期：</span></p>
                <yd-datetime ref="dataTime" type="date" v-model="datetime" :value="datetime" :init-emit="false" slot="right" confirm-text="搜索" start-date="2017-01-01" :callback="search"></yd-datetime>
            </yd-cell-item>
        </yd-cell-group>
        <yd-tab  active-color="#09bb07" :callback="toload">
            <yd-tab-panel label="待处理" :tabkey="Number(0)">
                <order-content v-bind:tab-data="tabData" v-on:concel="concel"></order-content>
            </yd-tab-panel>
            <yd-tab-panel label="处理中" :tabkey="Number(1)">
                <order-content v-bind:tab-data="tabData" v-on:concel="concel"></order-content>
            </yd-tab-panel>
            <yd-tab-panel label="已完成" :tabkey="Number(2)">
                <order-content v-bind:tab-data="tabData" v-on:concel="concel"></order-content>
            </yd-tab-panel>
        </yd-tab>
    </div>
</template>
<script>
import orderContent from '@/templates/orderContent'

import {getOrderList,concelOrder} from '@/api/api'

export default {
    components:{orderContent},
    data(){
        return{
            tabData:[],
            datetime:"",
            key:0,
            searchDate:""
        }
    },
    created:function(){
        this.loadData();
    },
    methods:{
        loadData(){
            this.tabData = [];
            let param = {
                status : this.key,
                dateTime:this.searchDate || ""
            }
            this.$dialog.loading.open("加载中...");
            getOrderList(param).then(d =>{
                this.$dialog.loading.close();
                if(d.code == this.$responseStatus.success){
                        this.tabData = d.result
                    }else{
                        this.$dialog.toast({mes:d.message});
                    }
            })
        },
        toload(label,key = 0){
            this.searchDate = ""
            this.key = key

            let time = this.datetime.trim()
            if(time == ""){
                this.loadData()
                
            }else{
                this.datetime = ""
                this.$refs.dataTime.currentValue=""
                this.loadData()
            }
            
        },
        search(){
            this.searchDate = this.datetime
            this.loadData()
        },
        concel:function(id){
            this.$dialog.confirm({
                    title:'取消订单',
                    mes: '确定取消该订单吗？',
                    opts: [{
                        txt: '再考虑考虑',
                        color: false, 
                        stay: false, //是否保留提示框
                        callback: () =>{} //按钮回调函数
                        },
                        {
                        txt: '取消订单',
                        color: '#bd9707', 
                        stay: false, //是否保留提示框
                        callback: () =>{
                            let param = {
                                orderId:id
                            }
                            this.$dialog.loading.open("正在取消...");
                            concelOrder(param).then(d =>{
                                this.$dialog.loading.close();
                                if(d.code == this.$responseStatus.success){
                                    this.$dialog.toast({
                                        mes: '取消成功',
                                        timeout: 1500,
                                        icon: 'success'
                                    });
                                    this.loadData();
                                }else{
                                    this.$dialog.toast({mes:d.message});
                                }
                            })
                        }
                    }] 
                });
        }
    }
}
</script>

<style lang="scss">
.orderpage_class{
    height: 100%;
    overflow-y: auto;
    
    .yd-tab-panel,.yd-tab{
        height: 100%;
        overflow-y: auto;
    }
    .yd-tab-panel{
        margin-top: .85rem;
    }
    .yd-tab-nav-nomal{
        margin-bottom: .1rem;
        position: absolute;
        top: 1rem;
        z-index: 100;
        width: 100%;
    }
    .yd-cell-box{
        margin-bottom: 0px;
    }
    .yd-cell-item{
        height: 1rem;
    }
}
</style>
