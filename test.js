//אסתי
function applyIfDefined(fn)
{ numOfArg = arguments.length; 
 if( fn.length != numOfArg -1) 
   return undefined; 
 for (let i = 0 ; i< numOfArg ; i++) 
 { if( arguments[i] == null || arguments[i] == undefined) return undefined; } 
 return fn; }


//חני
function applyIfDefined(func) {
    var numParametersOfFunc = func.length;
    return function (...args) {
        if (args.includes(null) || args.includes(undefined)) { return undefined; } if (args.length !== numParametersOfFunc) { return undefined; }
        return func(...args);
    };
}

