(function(e) {
    var V = { "version": "0.0.1", "author": "vincent" };
    V.say = function(msg) {
        alert(msg);
    };

    v.alert = function(msg){
        alert(msg + "loudly!")
    }

    window.v = V;
})(window);


function getTimeDiff(){
    var time = new Date();
    console.info(time.getTime());
}