$(document).ready(function(){ 

$("#infoButton").click(function(){


$("#map").toggle(function(show){
var mapProp = {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
var map=new google.maps.Map(document.getElementById("map")
  ,mapProp);

console.log("map")
});

	});
});