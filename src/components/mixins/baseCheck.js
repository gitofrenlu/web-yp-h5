	export const base =  {
		beforeCreate:function () {
			  //设定标准rem
				// document.documentElement.style.fontSize = window.innerWidth/3.75 + 'px'
				function is_weixin(){
					var ua = navigator.userAgent.toLowerCase(); //判断浏览器的类型
					if(ua.match(/MicroMessenger/i)=="micromessenger") {
							return true;
					} else {
							return false;
					}
			}
			
			if (!is_weixin()) { // 如果不是微信内置浏览器，就动态跳转到以下页面
					window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7dc0e033fa0b8d9d&redirect_uri=http://172.28.81.39:8095/business/redirectToPage?response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect';
			}
		},
    created:function(){
            
		},
		mounted: function() {

		},
		data: function() {
		},
		methods: {
			
		},
		watch:{
		  	
		}
	}

