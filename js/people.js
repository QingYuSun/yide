//"参与记录"和"获得产品"和"晒单"的点击切换效果
function part(){
	$api.removeCls($api.byId("lw-people-loading"),"pphidden");
	$api.removeCls($api.byId("lw-shift-one"),"pphidden");
   $api.addCls($api.byId("lw-shift-two"),"pphidden");
   $api.addCls($api.byId("lw-shift-three"),"pphidden");

   $api.addCls($api.byId("lw-red-one"),"lw-people-border");
   $api.removeCls($api.byId("lw-red-two"),"lw-people-border");
   $api.removeCls($api.byId("lw-red-three"),"lw-people-border");

}
function win(){
	$api.removeCls($api.byId("lw-shift-two"),"pphidden");
	$api.addCls($api.byId("lw-shift-one"),"pphidden");
	$api.addCls($api.byId("lw-shift-three"),"pphidden");
	$api.addCls($api.byId("lw-people-loading"),"pphidden");

	$api.addCls($api.byId("lw-red-two"),"lw-people-border");
	$api.removeCls($api.byId("lw-red-one"),"lw-people-border");
   $api.removeCls($api.byId("lw-red-three"),"lw-people-border");
}
function flaunt(){
	$api.removeCls($api.byId("lw-shift-three"),"pphidden");
	$api.addCls($api.byId("lw-shift-one"),"pphidden");
	$api.addCls($api.byId("lw-shift-two"),"pphidden");
	$api.addCls($api.byId("lw-people-loading"),"pphidden");

	$api.addCls($api.byId("lw-red-three"),"lw-people-border");
	$api.removeCls($api.byId("lw-red-two"),"lw-people-border");
   $api.removeCls($api.byId("lw-red-one"),"lw-people-border");
}