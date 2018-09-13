<template>
    <div class="order_tab_class">
        <div  v-if="tabData && tabData.length > 0">
            <div class="tab_item" v-for="l in tabData">
                <slot name="title">
                    <p class="time">{{l.createTime}}</p>
                    <button class="title_button yellow_background" v-if="l.status == 0" @click.stop="concel(l.id)">取消订单</button>
                </slot>
                <slot>
                    <table class="item_table">
                        <tbody>
                            <tr v-for="g in l.goods">
                                <td>{{g.name}}</td>
                                <td>{{g.standard}}</td>
                                <td v-if="g.price != '0.00'">{{g.price}}元</td>
                                <td v-else>待商议</td>
                            </tr>
                            <tr>
                                <td v-if="l.totalPrice != '0.00'" class="total_class" colspan="3">实收总价:{{l.totalPrice}}元</td>
                                <td v-else class="total_class" colspan="3">实收总价: 待商议</td>
                            </tr>
                        </tbody>
                    </table>
                </slot>
            </div>
        </div>
        <div class="noData" v-else>
                <img src="../../static/image/nodata.png">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        tabData:{
            required:true,
            type:Array,
            default:[]
        }
    },
    data:function(){
        return{
        }
    },
    methods:{
        concel:function(id){
            this.$emit('concel',id)
        }
    },
    watch:{
        tabData:{
            handler(newValue, oldValue) {
        　　},
        　　deep: true
        }
    }
}
</script>

<style lang="scss">
.order_tab_class{
    padding: 15px;
    .tab_item{
        border: 1px solid #aaa;
        border-radius: 10px;
        padding-right: 15px;
        padding-top: 15px;
        padding-bottom: 15px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        position: relative;
        margin-bottom: 30px;
        font-size: 10px;
    }
    .time{
        position: absolute;
        top: -10px;
        left: 15px;
        font-size: 15px;
        background-color: #fff;
    }
    .title_button{
        position: absolute;
        top: -10px;
        right: 15px;
        border-radius: 10px;
        width: 70px;
        height: 25px;
        border: none;
        border-right: 2px solid #aaa;
        border-bottom: 2px solid #aaa;
    }
    .title_button:active{
        border:none
    }
    .total_class{
        text-align: right
    }
    .item_table{
        width: 100%;
        text-align: right;

        td{
            height: 40px;
            font-size: 15px;
        }
    }
}
</style>
