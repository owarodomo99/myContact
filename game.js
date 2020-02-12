
var randomB = Math.floor(Math.random() * 100) + 1;
N = 10;

function addCheck(nStr)
	{
    if(N>0){
        if (nStr<0 ) {
            document.getElementById('aaa').innerHTML= document.frmMain.txtNumberA.value+"  : 🚩Last guesses was too low!  ";
            N--;
          }
          else if (nStr > 0) {
            document.getElementById('bbb').innerHTML = document.frmMain.txtNumberA.value+"  : Last guesses was too high 🚩  ";
            N--;
          }
          else {
            document.getElementById('ccc').innerHTML =  "!!!!🚩🚩🚩  You Win  🚩🚩🚩!!!!!";
            document.getElementById('ddd').innerHTML =  "🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩";
            bodyOnload(10000);
            begintimer().document.getElementById('dplay').innerHTML = "XXXX";
            setTimeout("begintimer()",1000)
    
          }
          document.frmMain.txtNumberA.value = " ";
        }
        if(N==0){
            document.getElementById('ccc').innerHTML =  "!!!!!!!!!!!!!  You Lose  !!!!!!!!!!!";
            document.getElementById('ddd').innerHTML =  "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
            bodyOnload(10000);
            begintimer().document.getElementById('dplay').innerHTML = "XXXX";
            setTimeout("begintimer()",1000)
    
        }
        document.querySelector("q").innerHTML = N;


	}

	function fncA()
	{
		 if(isNaN(document.frmMain.txtNumberA.value) || document.frmMain.txtNumberA.value == "")
		 {
			alert('Please input Integer Number only.');
			document.frmMain.txtNumberA.focus();
			return;
		 }

		 var TotSum = (parseFloat(document.frmMain.txtNumberA.value)-randomB ).toFixed(2);
         document.frmMain.txtNumberC.value  = addCheck(TotSum);

       
    }
    function bodyOnload( i)
    {
         setTimeout("!!!!🚩🚩🚩  You Win  🚩🚩🚩!!!!!');",i);
          setTimeout("Refresh();",i);
          cursec+=100;
          bodyOnload(10000);
     }

    function alertWelcome()
     {
     alert('Welcome to Guesses game');
     }
     function Refresh(){
        window.location.reload();
     }

     var limit="1:10"
if (document.images){
var parselimit=limit.split(":")
parselimit=parselimit[0]*60+parselimit[1]*1
}
function begintimer(){
if (!document.images){
return
}
if (parselimit==1){
    document.getElementById('ccc').innerHTML =  "!!!!!!!!!!!!!  You Lose  !!!!!!!!!!!";
    document.getElementById('ddd').innerHTML =  "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
// เหตุการณ์ที่ต้องการให้เกิดขึ้น
// window.location='page.php'; ถ้าต้องการให้กระโดดไปยัง Page อื่น
frmTest.submit();

}
else{
parselimit-=1
curmin=Math.floor(parselimit/60)
cursec=parselimit%60
if (curmin!=0)
curtime="เวลาที่เหลือ <font color=red> "+curmin+" </font>นาที กับ <font color=red>"+cursec+" </font>วินาที "
else
if(cursec==0)
{
alert('หมดเวลาแล้วจ้า');
}
else
{
curtime="เวลาที่เหลือ <font color=red>"+cursec+" </font>วินาที "
}
document.getElementById('dplay').innerHTML = curtime;
setTimeout("begintimer()",1000)
}
}
    