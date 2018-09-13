<template>
	<yd-layout id="app">
        <router-view class="container"></router-view>

        <yd-tabbar slot="tabbar">
            <yd-tabbar-item title="首页" link="/index" :active="active[0]" @click.native="changeTab(0)">
				<yd-icon name="home-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="/mycart" :active="active[1]" @click.native="changeTab(1)">
                <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="我的订单" link="/myorder" :active="active[2]" @click.native="changeTab(2)">
                <yd-icon name="feedback" slot="icon"></yd-icon>
            </yd-tabbar-item>
			<yd-tabbar-item title="会员中心" link="/user" :active="active[3]" @click.native="changeTab(3)">
                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>

    </yd-layout>
</template>

<script>
export default {
	name: 'app',
	components: {},
	data(){
		return{
			active:[
				false,false,false,false
			]
		}
	},
	methods:{
		changeTab(current){
			for(let i in this.active){
				this.active[i] = false;
			}

			this.active[current] = true
		}
	},
	created:function(){
		let path = this.$route.path
		if(path == "/index"){
			this.active[0] = true
			return
		}
		if(path == "/mycart"){
			this.active[1] = true
			return
		}
		if(path == "/myorder"){
			this.active[2] = true
			return
		}
		if(path == "/user"){
			this.active[3] = true
			return
		}
		this.active[0] = true
	}
}

</script>

<style lang="scss">
.yd-scrollview{
	overflow-y: hidden !important;
}
</style>