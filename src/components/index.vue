<template>
    <div class="page_index">
        <header>
            <p class="title grey">店铺推荐<span @click="routeTo()"><yd-icon name="shopcart-outline" class="mycart" size="0.5rem"></yd-icon></span></p>
        </header>
        <div class="scroll" v-if="list.length > 0">
            <yd-scrollnav>
                <yd-scrollnav-panel :label="item.label" v-for="(item, index) in list" :key="index">
                    <p class="scrollnav-title">{{item.label}}</p>
                    <yd-list :theme="1">
                        <yd-list-item v-for="g in item.goods" :key="g.id">
                            <img slot="img" :src="$baseimgurl + g.imgUrl" @click.stop="showImg(g)" :alt="g.name +' - '+g.standard">
                            <span slot="title">{{g.name}} - {{g.standard}}</span>
                            <yd-list-other slot="other">
                                <yd-spinner unit="1" v-model="g.size" class="flex flex_align_center"></yd-spinner>
                                <button class="button yellow_background" @click="addToShopCart($event, g)">加入购物车</button>
                            </yd-list-other>
                        </yd-list-item>
                    </yd-list>
                </yd-scrollnav-panel>
            </yd-scrollnav>
        </div>
        <div class="noData" v-else>
            <img src="../../static/image/nodata.png">
        </div>
        <div class="cartroll">
            <img :src="cartImg">
        </div>
        <imgshow ref="imgshow" :title="imgShowData.title" :name="imgShowData.name" :url="imgShowData.url"></imgshow>
    </div>
</template>
<script>
    import {getGoods} from '@/api/api'
    import imgshow from '@/templates/imgShow'

	export default {
        created:function(){
            let isredirect = this.$route.query.redirect
            if(isredirect){
                let openid = this.$route.query.openId
                let msg = this.$route.query.message
                if(!openid){
                    this.$dialog.alert({mes: msg});
                    return
                }
                this.$localStorage.set("yp-openid",openid);

            }
            
            this.loadData()
		},
		mounted: function() {
		},
		data: function() {
			return {
                 list: [],
                 cartImg:"../../static/image/rice.jpeg",
                 imgShowData:{
                     url:"",
                     title:"",
                     name:""
                 }
			}
		},
		methods: {
			loadData(){
                this.list=[];
                this.$dialog.loading.open('加载中...');
                getGoods().then(d =>{
                    this.$dialog.loading.close();
                    if(d.code == this.$responseStatus.success){
                        this.list = d.result
                    }else{
                        this.$dialog.toast({mes:d.message});
                    }
                })
            },
            addToShopCart($event,item){
                // let left_now = $event.pageX;
                // let top_now = $event.pageY - 40; //保证购物车从按钮上方开始移动
                // let left = window.screen.width - 40;//获取屏幕宽度
                // let top = 10

                // let $roll = $(".cartroll")
                // let $cart = $(".mycart")
                // $roll.css({top:top_now,left:left_now}).show()

                // let speedY = (top - top_now) / 60
                // let speenX = (left - left_now) / 60
                // let interval = setInterval(() =>{
                //     if(top_now <= top && left_now >= left){
                //         $roll.hide();
                //         clearInterval(interval)
                //     }
                //     if(top_now > top){
                //         top_now+= speedY;
                //     }
                //     if(left_now < left){
                //         left_now+= speenX;
                //     }
                //     $roll.css({top:top_now,left:left_now})

                // },10)

                this.$dialog.toast({mes:"添加购物车成功"})

                let cartGoods_json = sessionStorage.getItem(this.$myCart)
                let cartGood = JSON.parse(cartGoods_json)
                if(!cartGood){
                    cartGood = []
                }
                let flag = true
                cartGood.forEach(good => {
                    if(good.id == item.id){
                        good.size = Number(good.size) + Number(item.size)
                        flag = false
                    }
                });
                if(flag){
                    cartGood.push({
                        id:item.id,
                        name:item.name,
                        standard:item.standard,
                        size:item.size
                    })
                }
                
                sessionStorage.setItem(this.$myCart,JSON.stringify(cartGood))

            },
            showImg:function(good){
                this.imgShowData = {
                     url:this.$baseimgurl + good.imgUrl,
                    //  url:"http://5b0988e595225.cdn.sohucs.com/images/20170906/58cdb24be3624488ad3e8d3d00b4585f.jpeg",
                     title:`${good.name} - ${good.standard}`,
                     name: 'imgshow'
                }
                this.$refs.imgshow.show()
            },
            routeTo:function(){
                let APP = this.$root.$children[0]
                APP.active = [false,true,false,false]
                this.$router.push("/mycart")
            }
		},
		watch:{
		  	
		},
        components:{
            imgshow
        }
	}
</script>
<style lang="scss">
.page_index{
    height: 100%;

    .scroll{
        position: relative;
        overflow: auto;
        height: 100%;
    }
    .scrollnav-title{
        height: .7rem;
        line-height: .7rem;
        font-size: .3rem;
        color: #666666;
        text-align: center;
    }
    .yd-icon-shopcart-outline{
        position: absolute;
        right: 0.3rem;
    }
    .button{
        height: .6rem;
        margin-left: .3rem;
        border-radius: 5px;
        width: 2rem;
        font-size: .26rem;
        border: none;
        border-right: 2px solid #aaa;
        border-bottom: 2px solid #aaa;
    }
    .button:active{
        border: none;
    }
    .cartBall{
        display: none;

    }
    .yd-scrollnav-tab-item{
        padding-left: .1rem;
    }
    .cartroll{
        position: fixed;
        display: none;
        border:none;
        z-index: 2;
        img{
            width: .6rem;
            height: .6rem;
            border-radius: 100%;
        }
    }
}

    .yd-spinner>a{
        height: .5rem !important;
        width: .5rem !important;
        border-radius: 100%;
        border: 1px solid #f0d940;
        background-color: #f5e78c !important;
    }
     .yd-spinner>input{
        width: .55rem !important;
    }
     .yd-spinner{
        border: none !important;

        a:nth-child(1){
            background-color: #ffffff !important;
        }
    }
</style>
