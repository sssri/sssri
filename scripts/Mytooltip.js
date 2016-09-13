$(document).ready(function(){
	var x=10;
	var y=20;
	$(".tooltip").mouseover(function(e){             /*　function(e)中的参数e是事件对象，根据事件的不同，具有对应的子属性，比如键盘事件和鼠标事件等，你的代                                                         码中对应的是鼠标事件。*/
		this.mytitle=this.title;
		this.title="";
		var tooltip="<div id='tooltip'>"+this.mytitle+"</div>";  /*创建div元素*/
		$("body").append(tooltip);
		$("#tooltip").css({
			               "top":(e.pageY+y)+"px",
						   "left":(e.pageX+x)+"px"   /*鼠标在页面上的位置。x是光标离左边的位置  y是离上边的位置  单位是像素*/
			             }).show("slow");
	}).mouseout(function(){		
		 this.title = this.mytitle;
		 $("#tooltip").remove();   //移除 
    }).mousemove(function(e){
		 $("#tooltip")
		    .css({
		    	"top": (e.pageY+y) + "px",
		    	"left": (e.pageX+x)  + "px"
		    	});  /*让提示效果跟随鼠标一起移动*/
	});
})

 