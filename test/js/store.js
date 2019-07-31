var jStore = { ver:'v0.1' };
jStore.set = function (name, value){
    if(window.localStorage){
        localStorage.setItem(name, value);
    }
    //返回cookie
}

jStore.get = function (name){
    if(window.localStorage){
        localStorage.getItem(name);
    }
    //返回cookie
}


