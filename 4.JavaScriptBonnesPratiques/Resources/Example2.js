/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function runTest2(){
    var beforeTime = new Date().getMilliseconds();
    executeWithoutCached();
    var afterTime= new Date().getMilliseconds();
    var temp1=afterTime-beforeTime;
    //alert("Non Cached time="+temp+" milliseconds");
    
    beforeTime=new Date().getMilliseconds();
    executeWithCached();
    afterTime= new Date().getMilliseconds();
    var temp2=afterTime-beforeTime;
    alert("Cached time="+temp1+" milliseconds \n Non Cached time="+temp2+" milliseconds");
}

function executeWithCached()
{
    var i;
    var newColor;
    var colorDiv=document.getElementById("div2");                               //cache the variable
    for(i=0;i<10000;i++){
        newColor="#"+((1<<24)*Math.random()|0).toString(16);                    //code to select random color
        colorDiv.style.backgroundColor=newColor;
    }
}

function executeWithoutCached()
{
    var i;
    var newColor;
    for(i=0;i<10000;i++){
        newColor="#"+((1<<24)*Math.random()|0).toString(16);                    //code to select random color
        document.getElementById("div2").style.backgroundColor=newColor;
    }
}