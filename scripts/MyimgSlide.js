/* 品牌活动模块横向滚动 */
$(document).ready(function(){
    $("#brandTab li a").click(function(){ 
		$(this).parent().addClass("chos").siblings().removeClass("chos");
		var idx = $("#brandTab li a").index(this);
		showBrandList(idx);
		return false;
   }).eq(0).click();
});
//显示不同的模块
function showBrandList(index){
	var $rollobj = $("#jnBrandList");
    var rollWidth = $rollobj.find("li").outerWidth();/*outerWidth()函数用于获取当前匹配元素的外宽度。外宽度默认包括元素的内边距(padding)、边框(border)，但                                                       不包括外边距(margin)部分的宽度。*/
	rollWidth = rollWidth * 4; //一个版面的宽度
	$rollobj.stop(true,false).animate({ left : -rollWidth*index},1000);
}