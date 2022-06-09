
var timeBlockARR=[9,10,11,12,13,14,15,16,17]
var cuurentHour = moment().hour()//get current hour
var currentDay= $("#currentDay")
var systemTime = moment().format("dddd, MMMM Do")

currentDay.text(systemTime)//text content in js

