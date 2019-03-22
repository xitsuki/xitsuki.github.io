var w = $(window).width();

$(window).on("resize", function () {
	w = $(window).innerWidth();
	if ($(".global_nav").css('display') == 'none') {
		
		//SP繝｡繝九Η繝ｼ縺ｫ蛻�ｊ譖ｿ縺�
		$(".sp_menu .global_nav").show();
		
		//繝医ヴ繝�け繧ｹ繧帝幕縺�
		$(".topics .frame_middle").css({
			'height': '180px'
		});
		$(".topics_box").css({
			'margin-top': '10px'
		});
	} else {
		
		//繝医ヴ繝�け繧ｹ繧帝哩縺倥ｋ
		$(".topics .frame_middle").css({
			'height': '20px'
		});
		$(".topics_box").css({
			'margin-top': '0px'
		});

		//繝医ヴ繝�け繧ｹ縺ｮ髢矩哩
		$(".topics .topics_frame").mouseenter(function () {
			if(w > 751){
				$(".topics .frame_middle").css({
					'height': '140px'
				});
				$(".topics_box").css({
					'margin-top': '10px'
				});
			}
		});
		$(".topics").mouseleave(function () {
			if(w > 751){
				$(".topics .frame_middle").css({
					'height': '20px'
				});
				$(".topics_box").css({
					'margin-top': '0px'
				});
			}
		});
	}
});

$(window).on("load", function () {

	$(".wrap,.topics").css({
		'opacity': '1'
	});

	setTimeout(function () {
		$(".load_overlay").fadeOut(1000);
	}, 400);

	setTimeout(function () {
		$(".catch_bg").css({
			'transform': 'translateY(0px)',
			'opacity': '1'
		});
		setTimeout(function () {
			$(".catch1").css({
				'transform': 'translateY(0px)',
				'opacity': '1'
			});
			setTimeout(function () {
				$(".catch2").css({
					'transform': 'translateY(0px)',
					'opacity': '1'
				});
			}, 100);
		}, 100);
	}, 1500);

	var sub = $("div").hasClass("sub");

	$(".act_p").css({
		'opacity': '1'
	});

	$(".menu").hover(function () {
		$(this).find(".menu_active_icon").css({
			'opacity': '1'
		});
		if (sub) {
			$(this).find(".menu_line").css({
				'width': '90%'
			});
		} else {
			$(this).find(".menu_line").css({
				'width': '115%'
			});
		}
	}, function () {
		$(this).find(".menu_active_icon:not(.act_p)").css({
			'opacity': '0'
		});
		$(this).find(".menu_line").css({
			'width': '0%'
		});
	});

	if (w > 751) {
		$(".topics .frame_middle").css({
			'height': '20px'
		});
		$(".topics_box").css({
			'margin-top': '0px'
		});

		$(".topics .topics_frame").mouseenter(function () {
			if(w > 751){
				$(".topics .frame_middle").css({
					'height': '140px'
				});
				$(".topics_box").css({
					'margin-top': '10px'
				});
			}
		});
		$(".topics").mouseleave(function () {
			if(w > 751){
				$(".topics .frame_middle").css({
					'height': '20px'
				});
				$(".topics_box").css({
					'margin-top': '0px'
				});
			}
		});

	} else {
		$(".topics .frame_middle").css({
			'height': '180px'
		});
		$(".topics_box").css({
			'margin-top': '10px'
		});
	}

	$(".inline").modaal({});

	$(".menu_btn_close").click(function () {

		var count = 1;
		var slideout = function () {
			$(".sp_menu .menu:nth-of-type(" + count + ")").css({
				'transform': 'translateX(-100%)'
			});
			count = count + 1;
		}

		var id = setInterval(function () {
			slideout();
			if (count > 11) {
				clearInterval(id);
				$(".sp_menu .global_nav").css({
					'transform': 'translateX(-100%)'
				});
				$(".menu_btn").css({
					'transform': 'translateX(0%)'
				});
				$('.wrap').css({
					'overflow-x': 'unset'
				});
			}
		}, 50);
	});

	$(".menu_btn").click(function () {
		var h = $(document).height();

		$('.wrap').css({
			'overflow-x': 'hidden'
		});
		$(".menu_btn").css({
			'transform': 'translateX(100%)'
		});
		$(".sp_menu .global_nav").css({
			'transform': 'translateX(0%)',
			'height': h
		});

		var count = 1;
		var slideout = function () {
			$(".sp_menu .menu:nth-of-type(" + count + ")").css({
				'transform': 'translateX(0%)'
			});
			count = count + 1;
		}

		var id = setInterval(function () {
			slideout();
			if (count > 12) {
				clearInterval(id);
			}
		}, 50);
	});

	setTimeout(function () {
		$(".sp_menu .global_nav").show();
	}, 150);

	$(".sp_menu .menu").on('touchstart', function () {
		$(this).find(".sp_menu_bg").css({
			'opacity': '1'
		});
	}).on('touchend', function () {
		$(this).find(".sp_menu_bg").css({
			'opacity': '0'
		});
	});

	$(".nav li,.article.nav,.comment").hover(function () {
		$(this).find(".hover:not(.nav_act_p)").css({
			'opacity': '1'
		});
	}, function () {
		$(this).find(".hover").css({
			'opacity': '0'
		});
	});

	$(".icon_act_p").css({
		'animation': 'flashing 4s infinite'
	});

	var storypage = $("div").hasClass("storypage");

	if (storypage) {
		$('.story_slide01').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.story_slide02',
			infinite: false,
			dots: false,
			arrows: true,
			focusOnSelect: true,
			swipeToSlide: true,
			centerMode: true,
			centerPadding: '0px',
			initialSlide: 10,

		});
		$('.story_slide02').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.story_slide01',
			arrows: false,
			dots: false,
			fade: true,
			pauseOnHover: false,
			touchMove: false,
			swipeToSlide: false,
			infinite: false,
			draggable: false,
			initialSlide: 10,
		});

		$('.story_slide03').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			asNavFor: '.story_slide03_thm',
			infinite: false,
			dots: false,
			arrows: false,
			focusOnSelect: true,
			swipeToSlide: false,
			draggable: false,
		});
		$('.story_slide03_thm').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.story_slide03',
			arrows: false,
			dots: false,
			fade: false,
			focusOnSelect: true,
			swipeToSlide: false,
		});
	}

	var cmtgt = 0;

	$(".comment").click(function () {
		var ch = $(document).height();
		var target = $(event.target);
		cmtgt = ".cmt" + target.attr("class").slice(-2);
		$(".modal," + cmtgt).fadeIn();
		$(".modal").css({'height':ch});
	});

	$(".comment_close").click(function () {
		$(".modal," + cmtgt).fadeOut();
	});

	$(".modal").click(function(evnet){
		if(!$(event.target).closest('.comment_frame').length) {
			$(".modal," + cmtgt).fadeOut();
		}
	})
	
	var l = $(".nav li").length - 2;
	var navFlag = 0;
	$(".nav li").click(function () {
		
		var index = $(".nav li").index(this);
		var actIndex = Number($("img").parent().find(".nav_act_p").parent().parent().attr("class").slice(-2));

		if(index != actIndex){
			$("img").parent().find(".nav_act_p").parent().parent().css({'cursor':'pointer'});
			if(index == 0){
				index = actIndex - 1;
			}else if(index == (l + 1)){
				index = actIndex + 1;
			}
			$(".act_np").fadeOut(500, function () {
				$(".act_np").removeClass("act_np");
				$(".nav_act_p").removeClass("nav_act_p");
				$(".content ul:nth-of-type(" + index + ")").fadeIn(500, function () {
					$(".content ul:nth-of-type(" + index + ")").addClass("act_np");
					$(".nav li:nth-of-type(" + (index + 1) + ") .active").addClass("nav_act_p");
					$(".nav li:nth-of-type(" + (index + 1) + ")").css({'cursor':'default'});
					if (index == l) {
						$(".nav li:last-child").css({'opacity':'0','cursor':'default','pointer-events':'none'});
						navFlag = 2;
					} else {
						$(".nav li:last-child").css({'opacity':'1','cursor':'pointer','pointer-events':'auto'});
						if(l > 5){
							navFlag = 1;
						}else{
							navFlag = 0;
						}
					}
					if(index == 1){
						$(".nav li:first-child").css({'opacity':'0','cursor':'default','pointer-events':'none'});
						navFlag = 0;
					}else{
						$(".nav li:first-child").css({'opacity':'1','cursor':'pointer','pointer-events':'auto'});
						if(l > 5){
							navFlag = 1;
						}else{
							navFlag = 2;
						}
					}
				});
			});
		}

	});
	
	$(".btn_d").click(function(){
		var w = $(window).width();
		if(w < 751){
			var st = $(window).scrollTop() + 'px';
			var test = $(".main_frame");
			var h = $(document).height() + 'px';
			$(".main_frame").css({'top':st});
			$(".daughter_popup").css({'height':h});
		}
		$(".daughter_popup").fadeIn();
	});
	
	$(".d_close").click(function(){
		$(".daughter_popup").fadeOut(1000,function(){
			$(".main_frame").css({'top':'50%'});
			$(".daughter_popup").css({'height':'100%'});
		});
	});
	
	$(".daughter_popup").click(function(event){
		if(!$(event.target).closest('.main_frame').length){
			$(".daughter_popup").fadeOut(1000,function(){
				$(".main_frame").css({'top':'50%'});
				$(".daughter_popup").css({'height':'100%'});
			});
		}
	});
});
