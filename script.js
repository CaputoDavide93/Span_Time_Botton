/**
 * Created by Davide on 30/01/2016.
 */
var i=0;
var intervallo;

var stampa=function(){

    var sp=document.createElement("span");
    var br=document.createElement("br");
    sp.innerHTML=i+1;
    document.body.appendChild(sp);
    document.body.appendChild(br);

    i++;

    if(i==10){

        clearInterval(intervallo);
    }

};



var rit=function(aa){
    aa.parentNode.removeChild(aa);
    stampa();
    intervallo = setInterval(stampa, 1000);


};






