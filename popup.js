var data;

function getInfo()
{
document.getElementById("result1").innerHTML=" Snippit 1: " + localStorage.loc1;
document.getElementById("result2").innerHTML=" Snippit 2: " + localStorage.loc2;
document.getElementById("result3").innerHTML=" Snippit 3: " + localStorage.loc3;
document.getElementById("result4").innerHTML=" Snippit 4: " + localStorage.loc4;
document.getElementById("result5").innerHTML=" Snippit 5: " + localStorage.loc5;
prettyPrint();
}


function grabInfo()
{
data = document.getElementById("snippit").value;
data=data.replace("<","&lt;");
data=data.replace(">","&gt;");

if(localStorage.loc1==undefined)

{
	localStorage.loc1=data;
} else
 if(localStorage.loc1!==undefined && localStorage.loc2==undefined)
 { 
 	localStorage.loc2=localStorage.loc1;
 	localStorage.loc1=data;
 } else
 if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3==undefined)
 {
 	localStorage.loc3=localStorage.loc2;
 	localStorage.loc2=localStorage.loc1;
 	localStorage.loc1=data;
 } else
 if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4==undefined)
 {
 	localStorage.loc4=localStorage.loc3;
 	localStorage.loc3=localStorage.loc2;
 	localStorage.loc2=localStorage.loc1;
 	localStorage.loc1=data;
 } else
 if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4!=undefined && localStorage.loc5==undefined)
{
  localStorage.loc5=localStorage.loc4;
  localStorage.loc4=localStorage.loc3;
  localStorage.loc3=localStorage.loc2;
  localStorage.loc2=localStorage.loc1;
  localStorage.loc1=data;
} else
if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4!=undefined && localStorage.loc5!==undefined)
{
	 localStorage.loc5=localStorage.loc4;
  localStorage.loc4=localStorage.loc3;
  localStorage.loc3=localStorage.loc2;
  localStorage.loc2=localStorage.loc1;
  localStorage.loc1=data;
}
getInfo();
}


document.addEventListener('DOMContentLoaded', function () {
document.getElementById('button').addEventListener('click', clickHandler);
});

document.addEventListener('DOMContentLoaded', function () { 
bodyOnLoad();
});


function clickHandler() {
  grabInfo();
}

function bodyOnLoad() 
{
  getInfo();
}
