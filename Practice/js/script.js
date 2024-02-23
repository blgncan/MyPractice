let txtName=document.getElementById("txtName");
let txtPoint=document.getElementById("txtPoint");

let btnAdd=document.getElementById("btnAdd");
let averageEl=document.getElementById("average");

let sayac=0;
let totalPoint=0;
let average=0;


btnAdd.addEventListener("click",()=>{
    sayac+=+1;

    let txtNameValue=txtName.value;
    let txtPointValue=Number(txtPoint.value);

    totalPoint+=txtPointValue;
    average=(Number(totalPoint)/Number(sayac)).toFixed(2);

    let newTr=document.createElement("tr");

    document.querySelector("tbody").appendChild(newTr);

    let newTd1=document.createElement("td");
    newTd1.textContent=sayac;
    newTr.appendChild(newTd1);

    let newTd2=document.createElement("td");
    newTd2.textContent=txtNameValue;
    newTr.appendChild(newTd2);

    let newTd3=document.createElement("td");
    newTd3.textContent=txtPointValue;
    newTr.appendChild(newTd3);

    let newTd4=document.createElement("td"); 

    <i class="fa fa-pencil" aria-hidden="true"></i>   
    newTr.appendChild(newTd4);
    let spanEl=newTd4.createElement("span");
    

    averageEl.textContent=average;

    txtName.value="";
    txtPoint.value="";
    txtName.focus();



})
