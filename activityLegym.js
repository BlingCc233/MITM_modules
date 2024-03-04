var obj = JSON.parse($response.body);

var currentTimestamp = new Date().getTime(); 


obj.data.items.forEach(function(item) {
  item.startRegisterTime = currentTimestamp; 
  item.startTime = currentTimestamp; 
  item.state = 4; 
  item.stateName = "活动进行中"; 
});

$done({
  body: JSON.stringify(obj),
});
