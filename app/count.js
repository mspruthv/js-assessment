exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
    count : function (start, end) {
  		var timer;
    
        //start the clock
        startCounter();

        function startCounter(){
            if(start <= end){
                console.log(start);
                start++;
                timer = setTimeout(startCounter, 100); //execute for every 100 ms [1/10th second]
            }
        }

        function endCounter(){
            if(timer)
                clearTimeout(timer);
        }

        return {
            cancel : endCounter
        };
  	}
};