function yScroll(){pagetop=document.getElementById("pagetop"),menu=document.getElementById("menu"),yPos=window.pageYOffset,yPos>400?(pagetop.style.height="40px",pagetop.style.paddingTop="18px",pagetop.style.background="#212121"):(pagetop.style.height="45px",pagetop.style.paddingTop="30px",pagetop.style.background="transparent")}var pagetop,menu,yPos;window.addEventListener("scroll",yScroll),$("document").ready(function(){$("#btn-about").click(function(){$("html, body").animate({scrollTop:$("#about").offset().top-68},1500)}),$("#btn-home").click(function(){$("html, body").animate({scrollTop:$("#home").offset().top},1500)}),$("#btn-projects").click(function(){$("html, body").animate({scrollTop:$("#projects").offset().top-68},1500)}),$("#btn-team").click(function(){$("html, body").animate({scrollTop:$("#team").offset().top-68},1500)})}),$(window).scroll(function(){var a=$(document).scrollTop();$("#pagetop a").each(function(){var b=$(this),c=$(b.attr("href"));c.offset().top-70<=a&&c.offset().top+c.height()-70>a?($("#pagetop div a").removeClass("active2"),b.addClass("active2")):b.removeClass("active2")})}),$(function(){$("#modal-launcher, #modal-background, #modal-close").click(function(){$("#modal-content,#modal-background").toggleClass("active")})}),$(window).load(function(){$("#pagetop").hide().fadeIn(2e3)}),$(function(){function a(){c=setInterval(function(){i.animate({"margin-left":"-="+d},e,function(){++g===j.length&&(g=1,i.css("margin-left",0))})},f)}function b(){clearInterval(c)}var c,d=720,e=1e3,f=2500,g=1,h=$("#slider"),i=$(".slides",h),j=$(".slide",h);i.on("mouseenter",b).on("mouseleave",a),a()});