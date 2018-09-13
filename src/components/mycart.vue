<template>
    <div class="mycart_class">
        <header>
            <p class="title grey">购物车（{{num}}）</p>
        </header>
        <section v-if="list.length > 0">
            <table>
                <thead>
                    <th>产品名称</th>
                    <th>规格</th>
                    <th>数量</th>
                </thead>
                <tbody>
                    <tr v-for="l in list">
                        <td>{{l.name}}</td>
                        <td>{{l.standard}}</td>
                        <td>
                            <yd-spinner ref="spinner" unit="1" min="0" v-model="l.size" class="flex flex_align_center"></yd-spinner>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <div class="noData" v-else>
            <img src="../../static/image/nodata.png">
        </div>
        <div class="footer" v-if="list.length > 0">
            <button @click="submit">确认下单</button>
        </div>
    </div>
</template>
<script>
import {addCart} from '@/api/api'

export default {
    created:function(){
            this.loadData()
		},
		mounted: function() {
		},
		data: function() {
			return {
                 list: []
			}
		},
		methods: {
			loadData(){
                this.list=JSON.parse(sessionStorage.getItem(this.$myCart)) || []
            },
            submit:function(){
                if(this.list == 0){
                    this.$dialog.toast({
                    mes: '您的购物车还没有商品',
                    timeout: 1500
                    })
                }
                let param = {
                    list:sessionStorage.getItem(this.$myCart)
                }
                this.$dialog.loading.open("正在下单...");
                addCart(param).then(d =>{
                    this.$dialog.loading.close();
                    if(d.code == this.$responseStatus.success){
                        this.$dialog.toast({mes:d.result});
                        sessionStorage.removeItem(this.$myCart)
                        this.list = []
                    }else{
                        this.$dialog.toast({mes:d.message});
                    }
                })
            }
            
		},
		watch:{
		  	list:{
                handler:function(val,odlval){
                    for(let i in val){
                        if(val[i].size <= 0){
                            val.splice(i,1)

                            let refs = this.$refs.spinner
                            for(let ref of refs){
                                
                                ref.setDefalutValue()
                            }

                        }
                    }
                    sessionStorage.setItem(this.$myCart,JSON.stringify(val))
                    return val;
                },
                deep: true
              }
		},
        components:{

        },
        computed:{
            num:function(){
                return this.list.length
            }
        }
}
</script>
<style lang="scss">
.mycart_class{
    height: 100%;
    section{
        background-color: #fff;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    table{
        width: 100%;
        text-align: left;
        thead{
            font-size: .3rem;
        }
        td{
            height: .8rem;
            vertical-align: middle;
            font-size: .28rem;
        }
        td:nth-child(3){
            width: 33%;
        }
    }
}
</style>
