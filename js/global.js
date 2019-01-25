// 获取参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

// 返回10.00价格格式
function intToFloat(num, decPlaces) {
    num = parseInt(num);
    return num.toFixed(decPlaces);
}

// 获取UID
function get_uid() {
    var uid = localStorage.getItem("uid"); // html 本地保存UID
    var session_id = localStorage.getItem("session_id"); // html 本地保存session_id
    var mi = localStorage.getItem("mi"); // html 本地保存mi

    var data=[uid,session_id,mi];
    return data;
}

/*function cross_page_data(){
    var uid = getUrlParam('uid');//获取页面传递过来的uid
    var session_id = getUrlParam('session_id');//获取页面传递过来的session_id
    var mi = getUrlParam('mi');//获取页面传递过来的mi
    var data=[uid,session_id,mi];
    return data;
}*/