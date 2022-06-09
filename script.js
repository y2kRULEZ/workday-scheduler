
var timeBlockARR=[9,10,11,12,13,14,15,16,17]
var currentHour = moment().hour()//get current hour
var currentDay= $("#currentDay")
var systemTime = moment().format("dddd, MMMM Do")

currentDay.text(systemTime)//text content in js
function displayTimeColor(){
    for(var i=0;i<timeBlockARR.length;i++){
        var currentTextEL = $("#"+timeBlockARR[i])
        if(currentHour>timeBlockARR[i]){
           
           currentTextEL.addClass("past")
        }
        else if(currentHour == timeBlockARR[i]){
            currentTextEL.addClass("present")

        }else{currentTextEL.addClass("future")}
    }
}
displayTimeColor()

