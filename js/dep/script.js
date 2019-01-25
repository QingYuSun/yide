function randomnum(smin, smax) {// 获取2个值之间的随机数
    var Range = smax - smin;
    var Rand = Math.random();
    return (smin + Math.round(Rand * Range));
}

function runzp() {
    var data = '[{"id":1,"prize":"590大洋","v":1.0},{"id":2,"prize":"100RMB","v":2.0},{"id":3,"prize":"安慰奖","v":48.0}]';// 奖项json
    var obj = eval('(' + data + ')');
    var result = randomnum(1, 100);
    var line = 0;
    var temp = 0;
    var returnobj = "0";
    var index = 0;

    //alert("随机数"+result);
    for ( var i = 0; i < obj.length; i++) {
        var obj2 = obj[i];
        var c = parseFloat(obj2.v);
        temp = temp + c;
        line = 100 - temp;
        if (c != 0) {
            if (result > line && result <= (line + c)) {
                index = i;
                // alert(i+"中奖"+line+"<result"+"<="+(line + c));
                returnobj = obj2;
                break;
            }
        }
    }
    var angle = 330;
    var message = "";
    var id="";
    var myreturn = new Object;0

        message = "恭喜中奖了获得:";
        var angle0 = [ 347, 393 ];//一等奖圆盘坐标
        var angle1 = [ 233, 280 ];//二等奖圆盘坐标
        var angle2 = [ 103, 160 ];//三等奖圆盘坐标
        var angle3 = [ 49, 93 ]; //四等奖圆盘坐标
        var angle4 = [ 169, 220 ];//五等奖圆盘坐标
        var angle5 = [ 293, 340 ];//六等奖圆盘坐标
        switch (index) {
        case 0:// 一等奖
            var r0 = randomnum(angle0[0], angle0[1]);
            angle = r0;
            break;
        case 1:// 二等奖
            var r1 = randomnum(angle1[0], angle1[1]);
            angle = r1;
            break;
        case 2:// 三等奖
            var r2 = randomnum(angle2[0], angle2[1]);
            angle = r2;
            break;
        case 3 ://四等奖
            var r3 = randomnum(angle3[0], angle3[1]);
            angle = r3;
            break;
        case 4 ://五等奖
            var r4 = randomnum(angle4[0], angle4[1]);
            angle = r4;
            break;
        case 5 ://六等奖
            var r5 = randomnum(angle5[0], angle5[1]);
            angle = r5;
            break;
        }
    myreturn.angle = angle;
    myreturn.message = message;
    return myreturn;
}// JavaScript Document

/*function randomnum(smin, smax) {// 获取2个值之间的随机数
    var Range = smax - smin;
    var Rand = Math.random();
    return (smin + Math.round(Rand * Range));
}
  function runzp() {
      var index;
      var prize;
      var boo;
      $.ajax({
        url: '',
        type: '',
        async: false,
        success: function(result){
          // var result = eval('(' + result + ')');
          var result = JSON.parse(result);
              index=result.yes;
              prize=result.prize;
              boo=result.josn;
           }
         });
    var angle = 330;
    var message = "";
    var id="";
    var myreturn = new Object;

        message = "恭喜中奖了获得:";
        var angle0 = [ 347, 393 ];//一等奖圆盘坐标
        var angle1 = [ 233, 280 ];//二等奖圆盘坐标
        var angle2 = [ 103, 160 ];//三等奖圆盘坐标
        var angle3 = [ 49, 93 ]; //四等奖圆盘坐标
        var angle4 = [ 169, 220 ];//五等奖圆盘坐标
        var angle5 = [ 293, 340 ];//六等奖圆盘坐标
        switch (index) {
        case 0:// 一等奖
            var r0 = randomnum(angle0[0], angle0[1]);
            angle = r0;
            break;
        case 1:// 二等奖
            var r1 = randomnum(angle1[0], angle1[1]);
            angle = r1;
            break;
        case 2:// 三等奖
            var r2 = randomnum(angle2[0], angle2[1]);
            angle = r2;
            break;
        case 3 ://四等奖
            var r3 = randomnum(angle3[0], angle3[1]);
            angle = r3;
            break;
        case 4 ://五等奖
            var r4 = randomnum(angle4[0], angle4[1]);
            angle = r4;
            break;
        case 5 ://六等奖
            var r5 = randomnum(angle5[0], angle5[1]);
            angle = r5;
            break;
        }
        myreturn.v=boo;
        myreturn.prize = prize+"积分";
        myreturn.angle = angle;
        myreturn.message = message;
        return myreturn;

}*/

