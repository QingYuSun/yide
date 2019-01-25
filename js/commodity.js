   //全部分类的点击效果
  function showDefault(){
        if ($api.hasCls($api.byId("hidden"),"according")) {
            $api.removeCls($api.byId("hidden"),"according");
            $api.removeCls($api.byId("block"),"according");
            $api.addCls($api.byId("lw-sort-list"),"according");
            $api.addCls($api.byId("lock"),"lock");
            $api.removeCls($api.byId("lw-triangleone"),"according");
            $api.addCls($api.byId("lw-triangletwo"),"according");
        }else{
            $api.addCls($api.byId("hidden"),"according");
            $api.addCls($api.byId("lw-sort-list"),"according");
            $api.addCls($api.byId("block"),"according");
            $api.removeCls($api.byId("lock"),"lock");
            $api.addCls($api.byId("lw-triangleone"),"according");
        }
    }
    //即将揭晓的点击效果
    function showannounce(){
        if ($api.hasCls($api.byId("lw-sort-list"),"according")) {
            $api.removeCls($api.byId("lw-sort-list"),"according");
            $api.removeCls($api.byId("block"),"according");
            $api.addCls($api.byId("hidden"),"according");
            $api.addCls($api.byId("lock"),"lock");
            $api.removeCls($api.byId("lw-triangletwo"),"according");
            $api.addCls($api.byId("lw-triangleone"),"according");
            
        }else{
            $api.addCls($api.byId("lw-sort-list"),"according");
            $api.addCls($api.byId("hidden"),"according");
            $api.addCls($api.byId("block"),"according");
            $api.removeCls($api.byId("lock"),"lock");
            $api.addCls($api.byId("lw-triangletwo"),"according");
        }
    }
    //黑幕的点击效果
    function block(){
        $api.addCls($api.byId("hidden"),"according");
        $api.addCls($api.byId("lw-sort-list"),"according");
        $api.addCls($api.byId("block"),"according");
        $api.addCls($api.byId("lw-triangletwo"),"according");
        $api.addCls($api.byId("lw-triangleone"),"according");
    }
    //全部分类的里面分类点击效果
    var c =document.getElementsByName('cutclassify');
    var t = document.getElementById('titlecut');
    function cutclassify(obj){
        for (var i = 0; i < c.length; i++) {
            if (c[i].className="cutred") {
                c[i].className="";
            }
            if (c[i]==obj) {
                t.innerHTML=c[i].innerText+'<span></span><cite id="lw-triangleone"><em></em></cite>';
                c[i].className="cutred";
            }
        }
    }
    //即将揭晓的里面分类的点击效果
    var d =document.getElementsByName('detail');
    var p = document.getElementById('dropdown');
    function cutdetail(obj){
        for (var i = 0; i < d.length; i++) {
            if (d[i].className="hover") {
                d[i].className="";
            }
            if (d[i]==obj) {
                p.innerHTML=d[i].innerText+'<span></span><cite id="lw-triangleone"><em></em></cite>';
                d[i].className="hover";
            }
        }
    }