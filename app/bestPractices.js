exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
    globals : function() {
        var myObject = {
            name : 'Jory'
        };

        return myObject;
    },

    functions : function(flag) {
        var getValFn;

        if (flag) {
            getValFn = function(){ 
                return 'a'; 
            };
        } else {
            getValFn = function(){ 
                return 'b'; 
            };
        }

        return getValFn();
    },

    parseInt : function(num) {
        //adding radix 10 since num is decimal & this is not supported by all browsers
        return parseInt(num, 10);
    },

    identity : function(val1, val2) {
        return (val1 === val2);
    }
};