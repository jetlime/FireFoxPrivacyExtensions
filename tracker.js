
fingerprinting_functions = [  
    ".getUserMedia",
    ".availHeight",
    ".availWidth",
    ".charCodeAt",
    ".colorDepth",
    ".getTimezoneOffset",
    ".javaEnabled",
    ".mimeType",
    ".platform",
    ".plugins",
    ".propertyIsEnumerable",
    ".referrer",
    ".screen",
    "canvas"
]
function checkKeywords(text) {
    console.log(text)
    if( fingerprinting_functions.some(keyword => text.includes(keyword) )) {
        console.log("Found")
    }
}

var jsFilePaths = Array.prototype.slice
    .apply(document.querySelectorAll('script'))
    .filter(s => s.src)
    .map(s => s.src);

for(let i=0; i < jsFilePaths.length ; i++){
    console.log(i)
    
    fetch(jsFilePaths[i])
    .then( r => r.text() )
    .then( t => checkKeywords(t)
    
    )
}