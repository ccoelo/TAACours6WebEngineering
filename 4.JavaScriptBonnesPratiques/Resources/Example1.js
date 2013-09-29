function runTest1(){
    var beforeTime = new Date().getMilliseconds();
    executeWithJQuery();
    var afterTime= new Date().getMilliseconds();
    var temp1=afterTime-beforeTime;
    //alert("JQuery time="+temp+" milliseconds");
    
    beforeTime=new Date().getMilliseconds();
    executeWithoutJQuery();
    afterTime= new Date().getMilliseconds();
    var temp2=afterTime-beforeTime;
    alert("Non JQuery time="+temp1+" milliseconds \n Non Cached time="+temp2+" milliseconds");
}

function executeWithJQuery()
{
    var i;
    var newColor;
    for(i=0;i<10000;i++){
        newColor="#"+((1<<24)*Math.random()|0).toString(16);                       //code to select random color
        $("#div2").css("background-color",newColor);                               //change color using JQuery functions
    }
}

function executeWithoutJQuery()
{
    var i;
    var newColor;
    for(i=0;i<10000;i++){
        newColor="#"+((1<<24)*Math.random()|0).toString(16);                       //code to select random color
        document.getElementById("div2").style.backgroundColor=newColor;                      //change color using traditional methods
    }
}


