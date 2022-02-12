
// function btn3() {
//     select = document.getElementById("select1"); 
//     text = select.options[select.selectedIndex].text; 
    
// }
var arjeq = 45000;
var amis = 9;
var yndhanur = arjeq*amis;

var arjeq2 =45000;
var amis2 = 6;
var yndhanur2 = arjeq2*amis2;

var arjeq3 =45000;
var amis3 = 2;
var yndhanur3 = arjeq3*amis3;

var arjeq4=45000;
var amis4=2;
var yndhanur4 = arjeq4*amis4;

var arjeq5=60000;
var amis5=3;
var yndhanur5 = arjeq5*amis5;

var arjeq6=60000;
var amis6=3;    
var yndhanur6 = arjeq6*amis6;

   
function btn1(){
    
    var patasxan =document.createElement("P");
    patasxan.innerHTML=("Արժեքը ="+" "+yndhanur+" դրամ"+"<br>"+"Տևողությունը =" +" "+ amis  +" ամիս");
    patasxan.setAttribute("style","font-size:20px; position:absolute;bottom:60px;left:11%;")
    document.body.append(patasxan);
}
function btn2(){
 
    var patasxan =document.createElement("P");
    patasxan.innerHTML=("Արժեքը ="+" "+yndhanur2+" դրամ"+"<br>"+"Տևողությունը =" +" "+ amis2 +" ամիս");
    patasxan.setAttribute("style","font-size:20px; position:absolute;bottom:60px;left:41%;")
    document.body.append(patasxan);
}

function btn3(){
  
    var patasxan =document.createElement("P");
    patasxan.innerHTML=("Արժեքը ="+" "+yndhanur3+" դրամ"+"<br>"+"Տևողությունը =" +" "+ amis3 +" ամիս");
    patasxan.setAttribute("style","font-size:20px; position:absolute;bottom:60px;left:71%;")
    document.body.append(patasxan);
    
}

function btn5(){
  
    var patasxan =document.createElement("P");
    patasxan.innerHTML=("Արժեքը ="+" "+yndhanur4+" դրամ"+"<br>"+"Տևողությունը =" +" "+ amis4 +" ամիս");
    patasxan.setAttribute("style","font-size:20px; position:absolute;top:1210px;left:11%;")
    document.body.append(patasxan);
    
}
function btn6(){
  
    var patasxan =document.createElement("P");
    patasxan.innerHTML=("Արժեքը ="+" "+yndhanur5+" դրամ"+"<br>"+"Տևողությունը =" +" "+ amis5 +" ամիս");
    patasxan.setAttribute("style","font-size:20px; position:absolute;top:1210px;left:41%;")
    document.body.append(patasxan);
    
}
function btn7(){
  
    var patasxan =document.createElement("P");
    patasxan.innerHTML=("Արժեքը ="+" "+yndhanur6+" դրամ"+"<br>"+"Տևողությունը =" +" "+ amis6 +" ամիս");
    patasxan.setAttribute("style","font-size:20px; position:absolute;top:1210px;left:71%;")
    document.body.append(patasxan);
    
}
function btn4() {
    var amboxj = yndhanur+yndhanur2+yndhanur3+yndhanur4+yndhanur5+yndhanur6;
    var amboxjamis = amis+amis2+amis3+amis4+amis5+amis6;
    var textttt =document.createElement("P");
    textttt.innerHTML=(" գումարը"+" "+amboxj+" "+"Դրամ"+" "+"/ Ամիսների տևողությունը "+" "+amboxjamis+" "+"ամիս");
    textttt.setAttribute("style","font-size:23px;position:absolute;left:43%;top:1266px;font-weight:600;")
    document.body.append(textttt)
}


