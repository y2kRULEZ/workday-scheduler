
var timeBlockARR=[9,10,11,12,13,14,15,16,17]
var currentHour = moment().hour()//get current hour
var currentDay= $("#currentDay")
var systemTime = moment().format("dddd, MMMM Do")
var saveBtnEL =$(".saveBtn")//grab the save button
console.log(textAreaEL)

currentDay.text(systemTime)//text content in js
function displayTimeColor(){
    //get local storage data and display

    for(i=0;i<timeBlockARR.length;i++){
        var textAreaEL =$("#"+timeBlockARR[i])
        localStorage.getItem("text",textAreaEL.val())
        
    }
    //loop through time block array
    for(var i=0;i<timeBlockARR.length;i++){
        var currentTextEL = $("#"+timeBlockARR[i])
        //compare current hour with military time 
        if(currentHour>timeBlockARR[i]){
           //make grey
           currentTextEL.addClass("past")
        }
        else if(currentHour == timeBlockARR[i]){
            //make green
            currentTextEL.addClass("present")

        }else{//make red
            currentTextEL.addClass("future")}
    }
}
function saveLocalStorage(){
    //set local storage for each time block
    for(i=0;i<timeBlockARR.length;i++){
        var textAreaEL =$("#"+timeBlockARR[i])
        var textAreaValue = textAreaEL.text()
        console.log(textAreaValue)
        localStorage.setItem("text",textAreaEL.val())
        
    }
     
    
    
    


}

displayTimeColor()
saveBtnEL.on("click",saveLocalStorage())

