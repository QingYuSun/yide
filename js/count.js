    apiready = function(){
        api.parseTapmode();
    }
//计算详情里面展开和收缩的效果
function onunfold(){
        if($api.hasCls($api.byId("lw-count-unfold"),"hidden")) {
            $api.removeCls($api.byId("lw-count-unfold"),"hidden");
            $api.html($api.byId("lw-a-span"),'收缩∧');
        }else{
            $api.addCls($api.byId("lw-count-unfold"),"hidden");
            $api.html($api.byId("lw-a-span"),'展开∨');
    }
}