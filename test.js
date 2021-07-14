fingerprinting_functions = {
    ".getUserMedia" : "looking for used Device",
    ".availHeight" : "looking for screen Height",
    ".availWidth": "looking for screen width",
    ".charCodeAt": "looking for used font",
    ".colorDepth": "looking for color depth of your screen",
    ".getTimezoneOffset": "looking for your Time zone",
    ".javaEnabled" : "looking if you enabled Javascript",
    ".mimeType": "looking for mimeType",
    ".platform" : "looking for OS",
    ".plugins": "looking for your plugins",
    ".propertyIsEnumerable": "looking for config",
    ".referrer": "looking for referrer",
    ".screen" : "looking for your screen details",
    "canvas": "looking for canvas used in browser"
}

var span = document.getElementById("trackers")
var JsList = document.getElementById("jslist")


function checkKeywords(text, fileName) {
    
   
}



async function main(){    
    var jsFilePaths = Array.prototype.slice
    .apply(document.querySelectorAll('script'))
    .filter(s => s.src)
    .map(s => s.src);

    for(let i=0; i < jsFilePaths.length ; i++){
        jsfile = jsFilePaths[i]
        fetch(jsfile)
        .then( response => response.text() )
        .then( text => checkKeywords(text, jsfile))
    }
}

main();