exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
	valueAtBit: function(num, bit) {
		return 1 & (num >> (bit - 1));
  	},

  	base10: function(str) {
  	 	//adding radix 2 since num is binary 
  		return parseInt(str, 2);
  	},

  	convertToBinary: function(num) {
  	    var binary = [];

  		for (var i = 7; i > -1; i--) {
  			binary.push((num & (1 << i) ? 1 : 0));
  		};
    	return binary.join('');
  	},

  	multiply: function(a, b) {
        //to precision for decimal multiplication
  		return parseFloat((a * b).toPrecision(1));
  	}
};