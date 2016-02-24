exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(args){
            return str + ', '+args;
        };
    },

    makeClosures : function(arr, fn) {
        var i = 0,
            len = arr.length;
            closuresArr = [],
            closureFn = function(value) {
                return function() { return fn(value); };
            };

        for (var i = 0; i < len; i++) {
            closuresArr.push(closureFn(arr[i]));
        };

        return closuresArr;
    },

    partial : function(fn, str1, str2) {
        return function(arg){
            return fn.call(null, str1, str2, arg);
        }
    },  

    useArguments : function() {
        //using native javascript functon argument object
        var sum = 0;

        for(var key in arguments){
            sum += arguments[key];
        };

        return sum;
    },

    callIt : function(fn) {
        //change argument obj to array
        var args  = convertArgsToArray(arguments);
        //remove first element of the argument array (to remove function)
        args.shift();
        return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        //change argument obj to array
        var args  = convertArgsToArray(arguments);
        //remove first element of the argument array (to remove function)
        args.shift();
        return function() {
            return fn.apply(null, args.concat(convertArgsToArray(arguments)));
        };
    },

    curryIt : function(fn) {

    }
};

function convertArgsToArray(args){
    return  Array.prototype.slice.call(args);
}