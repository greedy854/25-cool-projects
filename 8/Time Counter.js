var time=document.getElementsByClassName("timer")
 
 var timings=60;
 var i=0;
     var myInterval = setInterval(Timeout, 1000);
    function Timeout(){
     
        time[0].innerHTML=`${(timings*60-i)%60}`;
         
i++;
    }
