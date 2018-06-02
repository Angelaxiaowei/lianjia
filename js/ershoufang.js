var ershoufang = new Vue({
	el: "#lianjia",
	data: {
		msg: 0,
		mes: "",
		isShow: false,

	},
	mounted: function(){
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 2000,//可选选项，自动滑动
			loop: true,
			// pagination : '.swiper-pagination',
			observer:true,//修改swiper自己或子元素时，自动初始化swiper 
			observeParents:false,//修改swiper的父元素时，自动初始化swiper 
		});

	},
	methods: {
		showChild: function(){
			this.isShow = !isShow;
		}
	}
})