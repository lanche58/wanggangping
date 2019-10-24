var isMobile = false,
	w_width =  0,
	w_height = 0,
	$mtoph = 0;

var $menuBtn = $('.menuBtn'),
    $menuBox = $('.menuBox'),
    navItem = 0;
    	
//移动端事件和PC事件的切换	
var _mousemove;
var _click;
var _mousedown;
var _mouseup;

if (Modernizr.touch) {
    _mousemove = "touchmove";
    _click = "touchend";
    _mousedown = "touchstart";
    _mouseup = "touchend";
    _mouseenter = "touchend";
} else {
    _mousemove = "mousemove";
    _click = "click";
    _mousedown = "mousedown";
    _mouseup = "mouseup";
    _mouseenter = "mouseenter";
}; 

function pageBox() {
	
   	w_width = $(window).width();
    w_height = $(window).height();	
	$mtoph = $('.mtop').height();
	
    if (w_width <= 1024) {
        isMobile = true;
    } else if (w_width > 1024) {
        isMobile = false;
    };

    if (isMobile) {
        $('.pnav li').each(function() {
            var _act = $(this).find('a').hasClass('act');
            if (_act) {
                $('.pnav').scrollLeft($(this).position().left);
            }
        });
    }
};

pageBox();

$(window).resize(function () {
    pageBox();
});

$(function () {
    setListDelay('.back-wrap2 li');
    setListDelay('.feature-nav li');
    setListDelay('.cul-back li');
    setListDelay('.pnav li');
    setLastClass('.f-nav li');
    setLastClass('.f-service li');


    // $('.header .pro').mouseenter(function() {
    //     $('.pull-nav').stop().fadeIn().addClass('active');
    //     $(this).addClass('show');
    // });
    // $('.pro-nav-list li').each(function(i, e) {
    //     $(this).css({ 'transition-delay': 200*i + 'ms' });
    // });
    // $('.header').mouseleave(function() {
    //     $('.pull-nav').stop().fadeOut(function() {
    //         $(this).removeClass('active');
    //     });
    //     $('.header .pro').removeClass('show');
    // });
    $('.navMobile dd').each(function(i, e) {
        $(this).css({ 'transition-delay': 300 + 100*i + 'ms' });
    }); 
    $('.navMobile dd p a').bind(_click, function (e) {
        if($(this).parent().next('.mtnav').size() >= 1){
            if(!$(this).hasClass('act')){
                e.preventDefault();
                $('.navMobile dd p a').removeClass('act');
                $('.mtnav').stop().slideUp(300);
                $(this).addClass('act');
                $(this).parent().next('.mtnav').stop().slideDown(300);
            }else{
                $(this).removeClass('act');
                $(this).parent().next('.mtnav').stop().slideUp(300);
            }
        }
    });
    $menuBtn.bind(_click, function () {
        console.log(1);
        if (navItem == 0) {
            $(this).addClass("active");
            $menuBox.show().stop(false,false).animate({top:0}).addClass('show');
            navItem = 1;
        } else {
            $(this).removeClass("active");
            $menuBox.stop(false,false).animate({top:-100+"%"},function(){
                $(this).hide().removeClass('show');
            });
            navItem = 0;
        }
    });

    if ($('.splwo').length !== 0) {
        $('.splwo').each(function(i) {
            splitWords($(this));
        });
    }

    $('.go-btns a').bind(_click, function(e) {
        e.preventDefault();
        $(this).toggleClass('act');
    });
	
	


    // 友情链接
    // var isopen = 0;
    // $('.friendship-link').bind(_click, function(){
    //     if(isopen==0){
    //         isopen = 1;
    //         $(this).addClass('act');
    //         $('.friendship-link .k').stop().slideDown(300);
    //     }else{
    //         isopen = 0;
    //         $(this).removeClass('act');
    //         $('.friendship-link .k').stop().slideUp(300);
    //     }
    // });
    // $('.friendship-link').mouseleave(function(){
    //     isopen = 0;
    //     $('.friendship-link').removeClass('act');
    //     $('.friendship-link .k').stop().slideUp(300);
    // });




	// 手机导航
	// $('.navMobile dd > a').bind(_click, function (e) {
	// 	if($(this).next('.mtv').size() >= 1){
	// 		if(!$(this).hasClass('act')){
	// 			e.preventDefault();
	// 			$('.navMobile dd > a').removeClass('act');
	// 			$('.mtv').stop().slideUp(300);
	// 			$(this).addClass('act');
	// 			$(this).next('.mtv').stop().slideDown(300);
	// 		}else{
	// 			$(this).removeClass('act');
	// 			$(this).next('.mtv').stop().slideUp(300);
	// 		}
	// 	}
	// });
	// $menuBtn.bind(_click, function () {
 //        var w = $menuBox.width();
 //        if (navItem == 0) {
 //            $('html').addClass('open');
 //            $('.menuBlack').stop().fadeIn(600);
 //            $(this).addClass('active');
 //            $menuBox.show().stop(false,false).animate({right:0});
 //            navItem = 1;
 //        } else {
 //            $('html').removeClass('open');
 //            $('.menuBlack').stop().fadeOut(600);
 //            $(this).removeClass('active').stop(false,false).animate({right:0});
 //            $menuBox.stop(false,false).animate({right:-w+"px"},function(){
 //                $(this).hide();
 //            });
 //            navItem = 0;
 //        };
 //    });
 //    $('.menuBlack').bind(_click, function () {
 //        var w = $menuBox.width();
 //        $('html').removeClass('open');
 //        $menuBtn.removeClass('active');
 //        $('.menuBlack').stop().fadeOut(600);
 //        $menuBox.stop(false,false).animate({right:-w+"px"},function(){
 //            $(this).hide();
 //        });
 //        navItem = 0;
 //    });
    
 
	$(window).scroll(function() {
        // page banner
        var windowTop = $(window).scrollTop();
        if (windowTop < w_height && !isMobile) {
            $('.pbanner .pic2 img').css('transform', "translate(0px," + (windowTop) / 1.5 + "px)");
        }

        intoShowLeaveHide('.pnav', '.container', '.footer');
        intoShowLeaveHide('.feature-nav', '.container', '.footer');
        intoShowLeaveHide('.back-wrap2', '.container', '.footer');
        intoShowLeaveHide('.cul-back', '.container', '.footer');
    });


    
 
	// Imitation placeholder function
	$('.s-input').bind({
        focus:function(){
        if (this.value == this.defaultValue){
            this.value="";
        }
        },blur:function(){
        if (this.value == ""){
            this.value = this.defaultValue;
        }
        }
    });

    // Back to top
    $('#top').bind(_click, function(){
    	$('html,body').stop().animate({scrollTop: 0}, 800);
    });

    // Scroll a screen
    $('#mouse').bind(_click, function(){
        $('html,body').stop().animate({scrollTop: w_height}, 800);
    });

    // video play
    $('.vwrap .close, .vwrap .videobtg').bind(_click, function(){
        objplay.stop(); 
        $('.vwrap').hide();
        $('#videobox').html('');
    });
    $('.vi-btn').bind(_click, function(e){
        e.stopPropagation();
        e.preventDefault();
        var img = $(this).attr('data-video-image');
        var video = $(this).attr('data-video-url');
        Video.load({
            vcontainer: 'videobox',
            vfimg: img,
            vfiles: video,
            isautoplay: 'true'
        });
        $('.vwrap').fadeIn();
    });

	// weixin
    setPopUp($('.weixin'), "请扫描二维码");
	function setPopUp(obj, title) {
        obj.bind(_click, function(e) {
            e.preventDefault();
            var str = '<div class="ly-box ly-anim ly-weixin"><div class="ly-cont ly-common weixin-wrap"><div class="pic"><img src="' + obj.attr('href') + '" alt=""></div><p class="name">' + title + '</p><a class="ly-close close1 icon iconfont iconguanbi"></a></div></div>';
            $('body').append(str);
            setTimeout(function() {
                $('.ly-weixin').addClass('show');
            }, 0);
        })
    };

    $('.btn-tel').bind(_click, function() {
        $('.ly-tel').show(function() {
            $('.ly-tel').addClass('show');
        });
    });

    // hash
	function setScroll(anchorCur){
		if(jQuery(anchorCur).length>=1){
			jQuery("html,body").animate({ scrollTop: jQuery(anchorCur).offset().top-$mtoph}, 0);
		}
	};
	window.onload = function () {
		var hash = location.href.split("#")[1];
		if (hash) {
			setScroll("#" + hash);
		}
	};
});

// 视频播放
var objplay;
var Video = {
	load: function (objs) {
		objplay = jwplayer(objs.vcontainer).setup({
			flashplayer: 'js/video/flashplay.swf',
			html5player: 'js/video/html5player.js',
			file: objs.vfiles,
			image: objs.vfimg,
			width: '100%',
			height: '100%',
			aspectratio: '16:9',
			stretching: 'fill',
			controls: 'true',
			autostart: objs.isautoplay
		});
		return objplay;
	}
};

// 图片全屏
function setImgMax(img, imgW, imgH, tW, tH) {
    var tWidth = tW || w_width;
    var tHeight = tH || w_height;
    var coe = imgH / imgW;
    var coe2 = tHeight / tWidth;
    if (coe < coe2) {
        var imgWidth = tHeight / coe;
        img.css({ height: tHeight, width: imgWidth, left: -(imgWidth - tWidth) / 2, top: 0 });
    } else {
        var imgHeight = tWidth * coe;
        img.css({ height: imgHeight, width: tWidth, left: 0, top: -(imgHeight - tHeight) / 2 });
    };
};

// 弹出层
function setLayer(addr){
    $.ajax({
        url: addr,
        dataType: 'html',
        success: function(data){
            if (data == "" || data == null) {
                return;
            } else {
                $('body').append(data);
                $('html').addClass('open'); 
                setTimeout(function(){
                    $('.ly-box').addClass('show');
                }, 100);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){ $('.ly-box').remove(); }
    });
    
};
$(document).on(_click, '.ly-close', function(e) {
    e.preventDefault();
    if (!$('.ly-tel').length) {
        $('.ly-box').remove();
    } else {
        $('.ly-tel').hide().removeClass('show');
    }
    $('html').removeClass('open');
});
$(document).on(_click, '.ly-box', function(e) {
    if ($(e.target).hasClass('ly-box')) {
        if (!$('.ly-tel').length) {
            $('.ly-box').remove();
        } else {
            $('.ly-tel').hide().removeClass('show');
        }
        $('html').removeClass('open');
    }
});
$(document).on(_click, '.ly-btn', function(e){
    e.preventDefault();
    setLayer($(this).attr('href'));
});

// 截图文字段为一个一个
function splitWords(el, time) {
    if (!time) { time = 100; }
    var _test = el.html().split('<br>');
    el.html('');
    for (var i = 0; i < _test.length; i++) {
        el.append('<span></span>');
        _test[i] = _test[i].split('');
        var _span = el.find('span');
        for (var j = 0; j < _test[i].length; j++) {
            _span.eq(i).append('<i></i>');
            var _i = _span.eq(i).find('i');
            if (_test[i][j] === " ") {
                _test[i][j] = "&nbsp;";
            }
            _i.eq(j).html(_test[i][j]).css({
                'animation-delay': time*j + 'ms',
                '-webkit-animation-delay': time*j + 'ms'
            });
        }
    }
}

function getAnchorPointPosition(ele) {
    var points = [];
    ele.each(function(i, e) {
        points.push($(this).offset().top - w_height * 0.5);
    });
    return points;
}
function scrollHandle(pointEle, targetEle) {
    var st = $(window).scrollTop();
    var points = getAnchorPointPosition(pointEle);
    for (var i = 0; i < points.length; i++) {
        if (st > points[i]) {
            targetEle.find('a').removeClass('act');
            targetEle.eq(i).find('a').addClass('act');
        }
    }
}
function getUrlParams() {
    var query = window.location.search.substring(1);
    var queryArr = query.split('&');
    var newQuery = [];
    for (var i = 0; i < queryArr.length; i++) {
        var itemArr = queryArr[i].split('=');
        newQuery.push(itemArr);
    }
    return newQuery;
}
function getParamValue(name) {
    var params = getUrlParams();
    for (var i = 0; i < params.length; i++) {
        if (params[i][0] === name) {
            return params[i][1];
        }
    }
    return;
}
// 设置list每一元素延迟时间
function setListDelay(ele, time, startTime) {
    time = time || 100;
    startTime = startTime || 0;
    var len = $(ele).length;
    if (len) {
        $(ele).each(function(i, e) {
            $(this).css({ 'transition-delay': startTime + time*i + 'ms' });
        });
    }
}
// 为list最后一个元素添加class
function setLastClass(ele) {
    var len = $(ele).length;
    if (len) {
        $(ele).eq(len - 1).addClass('last');
    }
}
// 进入某个区间出现，离开消失
function intoShowLeaveHide(ele, startEle, endEle, st, et) {
    var wst = $(window).scrollTop();
    var len = $(ele).length;
    var slen = $(startEle).length;
    var elen = $(endEle).length;
    if (len && slen && elen) {
        var nst = st || $(startEle).offset().top - $mtoph;
        var net = et || $(endEle).offset().top - w_height * 0.7;
        var active = $(ele).hasClass('active');
        if (wst > nst && wst < net) {
            !active && $(ele).addClass('active');
        } else {
            active && $(ele).removeClass('active');
        }
    }
}