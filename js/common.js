(function(e) {
    var V = { "version": "0.0.1", "author": "vincent" };
    V.say = function(msg) {
        alert(msg);
    };



    window.v = V;
    
})(window);

function getTimeDiff(){
    var time = new Date();
    console.info(time);
}