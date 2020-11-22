(function(e) {
    var V = { "version": "0.0.1", "author": "vincent" };
    V.say = function(msg) {
        alert(msg);
    };

    V.alert = function(msg){
        alert(msg + "loudly!")
    }

    window.v = V;
})(window);


function getTimeDiff(){
    var time = new Date();
    console.info(time.getTime());
}

function tree(){}

tree.prototype.showName = function(msg){
    alert(msg);
}

tree.prototype.author = "jackeiw";

tree.prototype.showTime = function(){
    var time = new Date();
    console.info(time.getTime());
}
