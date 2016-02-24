exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
 	listFiles: function(data, dirName) {
 		var listOfFiles = [],
		listOfDirs  = [];

		//call the inner function
		doScan(data);
		
		function doScan(data){
			var files = data.files,
				filesLen = files.length,
				file;
			
			listOfDirs.push(data.dir);
			for(var i=0; i < filesLen; i++){
				file = files[i];
				if(typeof file === 'string'){
					//if dirname is given then list only those files under it
					if(!dirName || listOfDirs.indexOf(dirName) > -1) {
			            listOfFiles.push(file);
			        }
				}else{
					doScan(file);
				}
			}
			//remove the last dir name to maintain the hierarchy level
			listOfDirs.pop();
		}
		return listOfFiles;
  	},

  	permute: function (arr) {
  		var permArr = [],
			usedChars = [];

		function doPermute(input) {
			var i, ch, len = input.length;
			
			for (i = 0; i < len; i++) {
				ch = input.splice(i, 1)[0];
			    usedChars.push(ch);
			    if(input.length === 0) {
			      permArr.push(usedChars.slice());
			    }
			    doPermute(input);
			    input.splice(i, 0, ch);
			    usedChars.pop();
			}
			return permArr
		};

		return doPermute(arr);
  	},

  	fibonacci: function fib(n) {
  		return n < 1 ? 0
	        	: n <= 2 ? 1
	        	: fib(n - 1) + fib(n - 2);
  	},

  	validParentheses: function(n) {

  	}
};