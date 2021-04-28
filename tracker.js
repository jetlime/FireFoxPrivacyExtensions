
fingerprinting_functions = {
    ".getUserMedia" : "Looks for used Device",
    ".availHeight" : "Looks for screen Height",
    ".availWidth": "Looks for screen width",
    ".charCodeAt": "Looks for used font",
    ".colorDepth": "Looks for color depth of your screen",
    ".getTimezoneOffset": "Looks for your Time zone",
    ".javaEnabled" : "Looks if you enabled Javascript",
    ".mimeType": "Looks for mimeType",
    ".platform" : "Looks for OS",
    ".plugins": "Looks for your plugins",
    ".propertyIsEnumerable": "Looks for config",
    ".referrer": "Looks for referrer",
    ".screen" : "Looks for your screen details",
    "canvas": "Looks for canvas used in browser"
}

var span = document.getElementById("trackers")
var JsList = document.getElementById("jslist")

function checkKeywords(text) {
    var matched = Object.keys(fingerprinting_functions).find(key => text.toLowerCase().search(key) > -1);
    if(matched){
        console.log(fingerprinting_functions[matched])
    }
    
}

var jsFilePaths = Array.prototype.slice
    .apply(document.querySelectorAll('script'))
    .filter(s => s.src)
    .map(s => s.src);

for(let i=0; i < jsFilePaths.length ; i++){
    jsfile = jsFilePaths[i]
    console.log(jsFilePaths[i])
    fetch(jsfile)
    .then( r => r.text() )
    .then( t => checkKeywords(t)
    
    )
}
/*
for(let i=0; i < jsFilePaths.length ; i++){
    jsfile = jsFilePaths[i]
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(jsfile))
    JsList.appendChild(li)
}
*/