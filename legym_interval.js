var obj = JSON.parse($response.body);

obj.data.timeInterval = null;
obj.data.sinIn = true;

$done({
  body: JSON.stringify(obj),
});