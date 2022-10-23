function StopWatch() {
    let duration = 0;
    let isStarted = false;
    let startTime = 0;
    let endTime = 0;

    

    this.start = function() {
     if(isStarted) {
        throw new Error("stop watch is already running")
     } 
     else {
        
            startTime = new Date();
            isStarted = true;
          }
       
     }



    this.stop = function() {
        if(!isStarted) {
            throw new Error("stop watch is not running")
         } 
         else {
          endTime = new Date();
          duration += (endTime.getTime() - startTime.getTime())/1000
          isStarted = false;
         }

    }

    Object.defineProperty(this,'duration',{
       get() {
        return duration
       }
    })

    this.reset = function() {
        startTime = 0;
        endTime = 0;
        counting = false;
        duration = 0;
    }

}

const sw = new StopWatch();

