//CLOCK SCRIPT
function startTime() {
 const today = new Date();
 let h = today.getHours();
 let m = today.getMinutes();
 let s = today.getSeconds();
 m = checkTime(m);
 s = checkTime(s);
 document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
 setTimeout(startTime, 1000);
}

function checkTime(i) {
 if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
 return i;
}

//POST-IT NOTE SAVE (JAVASCRIPT)
if (localStorage["note"]) {
   var note = localStorage["note"];
   document.getElementById("note").value = note;
}
 
function autoSave() {
   var note = document.getElementById("note").value;
   localStorage.setItem("note", note);
}

//POST-IT NOTE SHOW AND HIDE
var show = false;
function showNote(){
   if (show == false){
       document.getElementById("note").style.opacity = 1;
       show = true;
   }
   else if (show == true){
       document.getElementById("note").style.opacity = 0;
       show = false;
   }
}

//MUST set “opacity:0” in CSS on #note

//CALCULATOR (JAVASCRIPT)
var showCalc = false;
function showCalculator(){
   if (showCalc == false){
       document.getElementById("calc").style.opacity = 1;
       showCalc = true;
   }
   else if (showCalc == true){
       document.getElementById("calc").style.opacity = 0;
       showCalc = false;
   }
}

//APP BEHAVIOR
var appShowing = false;
function showApp(){
   if (appShowing == false){
       document.getElementById("app").style.opacity = 1;
       document.getElementById("app").style.zIndex = 1;
       appShowing = true;
   }
}

function hideApp(){
   if (appShowing == true){
       document.getElementById("app").style.opacity = 0;
       document.getElementById("app").style.zIndex = -1;
       appShowing = false;
   }
}

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

!function(){var e=document.getElementsByTagName("script"),t=e[e.length-1],n=document.createElement("script");function r(){var e=crCryptocoinPriceWidget.init({base:"USD,EUR,CNY,GBP",items:"BTC,ETH,LTC,XMR,DASH",backgroundColor:"FFFFFF",streaming:"1",rounded:"1",boxShadow:"1",border:"1"});t.parentNode.insertBefore(e,t)}n.src="https://co-in.io/widget/pricelist.js?items=BTC%2CETH%2CLTC%2CXMR%2CDASH",n.async=!0,n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,r())}:n.onload=function(){r()},t.parentNode.insertBefore(n,null)}();
