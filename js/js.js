$(function() {

		//	banner图轮播
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			spaceBetween: 10,
			centeredSlides: true,
			autoplay: 3000,
			autoplayDisableOnInteraction: false
		});
	
	//侧边栏特效

var times = 1;
$("#doclick").click(function() {
	//侧边栏展开
	if(times == 1) {
		console.log("aa");
		$(".slide_right").animate({
			"right": "0"
		}, 500);
		
		$(".slide_left").animate({
			"right": "3rem"
		}, 500);
		$("#doclick").attr("src", "images/ico_btn2.png");
		$("#doclick").bind('touchmove', function(event) {
			event.preventDefault();
		});
		times = 2;
	}
	//侧边栏收缩
	else if(times == 2) {
		$(".slide_right").animate({
			"right": "-3rem"
		}, 500);
		$(".slide_left").animate({
			"right": "0"
		}, 500);
		$("#doclick").attr("src", "images/ico_btn2_hov.png");
		times = 1;
	}
});
//留学头条
 function autoPlay() {
                    $(".headnews_up li:first").animate({
                        "margin-top": "-0.4rem"
                    }, 1000, function() {
                        $(this).css("margin-top", 0).appendTo(".headnews_up");
                    })
                }
                var timer = setInterval(autoPlay, 1000);

                // //去除定时器
                $(".headnews_up li").hover(function() {
                    clearInterval(timer);
                }, function() {
                    timer = setInterval(autoPlay, 1000);
                })

// 选项卡 切换
    // 通过查找 .toubu 下的li 元素 遍历 循环
    $(".dibu .slide:gt(0)").hide();
    $("#diqu .toubu ul").find("li").each(function(index) {
        // $(this) 当前选中的元素 鼠标移动
        $(this).click(function() {
            // $(this) 当前选中的元素 增加 on 样式 ，但是 其同胞元素 移除 on 样式
            //$(this).addClass("on").siblings().removeClass("on");

            $("#diqu .toubu").find("li").removeClass("on").eq(index).addClass("on");

            // .slide 通过 eq(index) 选择器 来显示隐藏
            $(".dibu .slide").hide().eq(index).show();
        })
    })
    
    
    var mark=1;
	$(".PathMain").click(function(){
		if(mark==1){//把他展开
			$(this).addClass("PathMain1");
			$(this).siblings('.Menu1').animate({"left":"4.8em"},500);
			$(this).siblings('.Menu2').animate({"left":"8.7em"},500);
			$(this).siblings('.Menu3').animate({"left":"12.6em"},500);
			$(this).siblings('.Menu4').animate({"left":"16.5em"},500);
			$(this).siblings('.Menu5').animate({"left":"20.4em"},500);
			mark=2;
		}else if(mark==2){//收缩
			$(this).removeClass("PathMain1");
			$(this).siblings('.Menu1').animate({"left":"0.6em"},500);
			$(this).siblings('.Menu2').animate({"left":"0.6em"},500);
			$(this).siblings('.Menu3').animate({"left":"0.6em"},500);
			$(this).siblings('.Menu4').animate({"left":"0.6em"},500);
			$(this).siblings('.Menu5').animate({"left":"0.6em"},500);
			mark=1;
		}
	});
	$("#gotop").click(function(){
		$('body,html').animate({scrollTop:0},800);
		return false;
	});
	
				
});
//15秒弹出
	$(document).ready(function(){
		setTimeout(function(){
			
			$("#TB_overlayBG").css({
				display:"block",height:$(document).height()
			});
			doShowGuangGao();
		},100000);
		function doShowGuangGao(){
			$(".PopLayer").css({
				top:($(window).height()-$(".layer").height())/5+$(window).scrollTop()+"px",
				display:"block"
			});
		}
		
		$(".popclose").click(function(){
			$(".PopLayer").css("display","none");
			$("#TB_overlayBG").css("display","none");
		})
		setInterval(doShowGuangGao, 100000);
		

		
		
		
		
		
		
		
	});
	//优选方案的下拉菜单
	var nums=1;
$(function() {
	$(".fangan").click(function() {
		if(nums == 1) {
			$(".content-youxuan-list").slideDown().show();
			nums = 2;
		} else if(nums == 2) {
			$(".content-youxuan-list").slideUp().hide();
			nums = 1;
		}
	})
})