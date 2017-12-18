$(document).ready(function(){
	$(".btn-nav").on("click", function(){
		var target = $(this).data("target");
		$(target).toggleClass("menu--open");
	});

});

var canvas = document.getElementById('umb');
var ctx = canvas.getContext('2d');
var pi = Math.PI;

    ctx.beginPath();
    ctx.lineWidth=1.5;
    ctx.strokeStyle="white";
    ctx.moveTo(32,8);
    ctx.lineTo(32,12);
    ctx.lineTo(8,32);
    ctx.lineTo(16,28);
    ctx.lineTo(32,12);
    ctx.lineTo(24,32);
    ctx.lineTo(16,28);
    ctx.moveTo(24,32);
    ctx.lineTo(32,28);
    ctx.lineTo(32,12);
    ctx.lineTo(40,32);
     ctx.lineTo(32,28);
     ctx.moveTo(40,32);
     ctx.lineTo(48,28);
     ctx.lineTo(32,12);
     ctx.lineTo(56,32);
     ctx.lineTo(48,28);
     ctx.moveTo(32,28);
     ctx.lineTo(32,58);
     ctx.stroke();
     ctx.beginPath();
     ctx.arc(32,48,8,0,pi/2,false);

     
    ctx.stroke();


