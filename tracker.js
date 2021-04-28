
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
    var matched = Object.keys(fingerprinting_functions).find(key => text.toLowerCase().search(key) > -1);    
    if(matched){
        console.log(`${fileName.split( '/' ).pop()} is ${fingerprinting_functions[matched]} using ${matched}`)
    }   
}

async function errorHandling(text, fileName){
    console.log(`Failed to load ${fileName.split('/').pop()}`)
    const response = await fetch(fileName);
    var data = await response;
    console.log(data)
}

var jsFilePaths = Array.prototype.slice
    .apply(document.querySelectorAll('script'))
    .filter(s => s.src)
    .map(s => s.src);

for(let i=0; i < jsFilePaths.length ; i++){
    jsfile = jsFilePaths[i]
    console.log(i)
    fetch(jsfile)
    .then( r => r.text() )
    .then( t => checkKeywords(t, jsfile))
    .catch(t => errorHandling(t, jsfile))
}
/*
for(let i=0; i < jsFilePaths.length ; i++){
    jsfile = jsFilePaths[i]
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(jsfile))
    JsList.appendChild(li)
}
*/