exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  	alterContext : function(fn, obj) {
  		return fn.call(obj);
  	},

  	alterObjects : function(constructor, greeting) {
  		constructor.prototype['greeting'] = greeting;
  	},

  	iterate : function(obj) {
  		var resArr = [];

	    for(var key in obj) {
            //to ensure no parent key's pushed to resArr
	     	if(obj.hasOwnProperty(key)) {
	        	resArr.push(key + ': ' + obj[key]);
	      	}
	    };

	    return resArr;
  	}
};