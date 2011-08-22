/*
 * jQuery Plus Slider 1.3
 * By Jamy Golden
 * http://css-plus.com
 *
 * Copyright 2011
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(a){a.plusSlider=function(b,c){var d=this;d.$el=a(b);d.el=b;d.$el.data("plusSlider",d);d.init=function(){d.options=a.extend({},a.plusSlider.defaults,c);d.$el.wrap('<div class="plusSlider '+d.$el.attr("id")+'" />');d.$wrap=d.$el.parent();d.$slides=d.$el.children();d.$totalSlides=d.$slides.length;d.$slides.addClass("child");d.$slides.eq(0).addClass("current");if(d.options.sliderType=="slider"){d.$wrap.addClass("plusTypeSlider");d.$slideWidth=d.$el.find(":first").outerWidth(true);d.$sliderWidth=d.$slideWidth*d.$totalSlides;d.$stopPosition=d.$sliderWidth-d.$slideWidth;d.$el.width(d.$sliderWidth);d.$slides.show()}else{d.$wrap.addClass("plusTypeFader");d.$slides.eq(0).show()}if(d.$totalSlides===1){d.options.autoPlay=false;d.options.createArrows=false;d.options.createPagination=false}if(d.options.width)d.$wrap.width(d.options.width);if(d.options.height)d.$wrap.height(d.options.height);if(d.options.createPagination){if(d.options.paginationBefore){a("<div />",{"class":"plusSlider-controls"}).prependTo(d.$wrap);d.$sliderControls=d.$el.prev(".plusSlider-controls")}else{a("<div />",{"class":"plusSlider-controls"}).appendTo(d.$wrap);d.$sliderControls=d.$el.next(".plusSlider-controls")}d.$sliderControls.wrap('<div class="plusSlider-controls-wrapper" />');for(var b=0;b<d.$totalSlides;b++){a("<a />",{href:"#",rel:b,text:b+1}).appendTo(d.$sliderControls)}if(d.options.paginationTitle){for(var b=0;b<d.$totalSlides;b++){d.$sliderControls.find('a[rel="'+b+'"]').text(d.$slides.eq(b).attr("data-title"))}}if(d.options.paginationWidth){d.$sliderControls.width(d.$sliderControls.find("a").outerWidth(true)*d.$totalSlides)}d.$sliderControls.find("a").click(function(){d.toSlide(a(this).attr("rel"));return false}).eq(0).addClass("current")}d.$el.data("slides",{current:d.$el.children(".current").index()});d.toSlide=function(a){if(a=="next"||a==null)a=d.$el.data("slides").current+1;if(a=="prev")a=d.$el.data("slides").current-1;if(a>=d.$totalSlides)a=0;if(a<=-1)a=d.$totalSlides-1;if(d.options.sliderType=="slider"){if(!d.$el.is(":animated")){if(d.options.createPagination){d.$sliderControls.find('a[rel="'+a+'"]').addClass("current").siblings().removeClass("current")}d.$el.animate({left:d.$slideWidth*a*-1+"px"},d.options.speed,d.options.sliderEasing);d.$el.children(".current").removeClass("current").parent().children().eq(a).addClass("current")}}else{if(!d.$slides.is(":animated")){if(d.options.createPagination){d.$sliderControls.find('a[rel="'+a+'"]').addClass("current").siblings().removeClass("current")}d.$slides.eq(a).css("zIndex",100).addClass("current").fadeIn(d.options.speed,function(){d.$slides.not(".current").hide()}).siblings().css("zIndex",50).removeClass("current")}}if(d.options.autoPlay){d.clearTimer();d.beginTimer()}if(d.options.onSlide&&typeof d.options.onSlide=="function"){d.options.onSlide(d.$slides.filter(".current").index())}d.$el.data("slides",{current:d.$el.children(".current").index()})};if(d.options.autoPlay){d.clearTimer=function(){if(d.timer){window.clearInterval(d.timer)}};d.beginTimer=function(){d.timer=window.setInterval(function(){d.toSlide("next")},d.options.displayTime)};d.beginTimer();if(d.options.pauseOnHover){d.$el.hover(function(){d.clearTimer()},function(){d.beginTimer()})}}if(d.options.createArrows){a("<a />",{"class":"arrow next",href:"#",text:d.options.nextText}).prependTo(d.$wrap);a("<a />",{"class":"arrow prev",href:"#",text:d.options.prevText}).prependTo(d.$wrap);d.$el.siblings(".next").click(function(){d.toSlide("next");return false}).siblings(".prev").click(function(){d.toSlide("prev");return false})}if(d.options.keyboardNavigation){d.$el.click(function(){a(".activePlusSlider").removeClass("activePlusSlider");a(this).addClass("activePlusSlider")});a(window).keyup(function(a){if(d.$el.is(".activePlusSlider")){if(a.keyCode==39){d.toSlide()}else if(a.keyCode==37){d.toSlide("prev")}}})}if(d.options.paginationThumbnails){if(a.browser.msie?a.browser.version>=9:true==true){for(b=0;b<d.$slides.length;b++){var e=d.$slides.eq(b);if(!e.attr("id")){e.attr("id","plusSlider-slide-"+e.index())}}d.$el.after(a("<div />",{"class":"plusSlider-thumbnails"}));var f=d.$el.next(".plusSlider-thumbnails");d.$slides.clone().removeAttr("style").appendTo(f);d.$sliderControls.children().hover(function(){f.addClass("plusSlider-active").children().hide().eq(a(this).index()).show()},function(){f.removeClass("plusSlider-active").children()})}}};d.init()};a.plusSlider.defaults={createArrows:true,nextText:"Next",prevText:"Previous",createPagination:true,paginationBefore:false,paginationWidth:true,paginationTitle:false,paginationThumbnails:false,displayTime:4e3,speed:500,autoPlay:true,keyboardNavigation:true,pauseOnHover:true,sliderEasing:"linear",sliderType:"slider",width:false,height:false,onSlide:null};a.fn.plusSlider=function(b){return this.each(function(){new a.plusSlider(this,b)})}})(jQuery)