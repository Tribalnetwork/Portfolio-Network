import React from "react";

import $ from "jquery";
import jQuery from "jquery";

const TimeCounter = () => {
  React.useEffect(() => {

      $(function () {
        jQuery.fn.extend({
            countdown: function () {
                 // 24 hour countdown
                 // Change variable here to see what will happen :D
                  let hour = 7, min = 0, sec = 0
                  render(hour, min, sec)
                  
                  const timer = setInterval(() => {
                    if (hour == 0 && min == 0 && sec == 0) {
                        clearInterval(timer)
                          return ;
                      }
                      
                    sec = dealSec(sec)
                      min = dealMin(min, sec)
                      hour = dealhour(hour, min, sec)
                      render(hour, min, sec)
                  }, 1000)
              },
          })
          
          $('#countdown').countdown()
      })
      
      function dealSec (sec) {
          const timeRange = [...Array(60).keys()].reverse()
        const idxNow = timeRange.indexOf(sec)
          const idxNext = (idxNow + 1) % timeRange.length
          return timeRange[idxNext]
      }
      
      function dealMin(min, sec) {
          const timeRange = [...Array(60).keys()].reverse()
          if (sec === 59) {
            const idxNow = timeRange.indexOf(min)
              const idxNext = (idxNow + 1) % timeRange.length
              return timeRange[idxNext]
          }
          return min
      }
      
      function dealhour (hour, min, sec) {
        if (min === 59 && sec === 59) return hour - 1
          return hour
      }
      
      function render(hour, min, sec) {
        hour = ("00" + hour).slice(-2)
          min  = ("00" + min).slice(-2)
          sec  = ("00" + sec).slice(-2)
          
          $('#countdown').text(`${hour}:${min}:${sec}`)
      }

},[])

  return (
    <>
  
    <div class="limited_watch_time">
        <p>Free Trial watch time remaining</p>
    <div id="countdown"></div>
       <a>Get Unlimited!</a>
     </div>
    </>
    );
      };
      
      export default TimeCounter;