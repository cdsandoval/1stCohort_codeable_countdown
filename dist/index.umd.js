!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.countdownTimer=n()}(this,function(){return function(){var e=new Date("Aug 09,2019 18:00:00").getTime();setInterval(function(){var n=(new Date).getTime(),t=e-n;if(t>=0){var o=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),s=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);return document.getElementById("timer-days").innerHTML=o+"<span class='label'>DAY(S)</span>",document.getElementById("timer-hours").innerHTML=("0"+i).slice(-2)+"<span class='label'>HR(S)</span>",document.getElementById("timer-mins").innerHTML=("0"+s).slice(-2)+"<span class='label'>MIN(S)</span>",document.getElementById("timer-secs").innerHTML=("0"+a).slice(-2)+"<span class='label'>SEC(S)</span>",[o,i,s,a]}document.getElementById("timer").innerHTML="The countdown is over!"},1e3)}});
//# sourceMappingURL=index.umd.js.map
