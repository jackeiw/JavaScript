function FuckInternetExplorer() {
    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    var version = b_version.split(";");
    if (version.length > 1) {
        var trim_Version = parseInt(version[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
        if (trim_Version < 9) {
            alert("LowB,快升级你的IE");
            return false;
        }
    }
    alert("true")
    return true;
}