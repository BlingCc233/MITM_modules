const $ = init();
  var modifiedHeaders = $request.headers;
  var legym_signBody = $request.body;
$.done();



function init() {


  fetch('http://172.245.242.86:9091/forward-request', {
    method: 'POST',
    headers: modifiedHeaders,
    body: JSON.stringify(legym_signBody)
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}
