export default (url, callback) => {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (callback && httpRequest.readyState === 4 && httpRequest.status === 200) {
      const data = JSON.parse(httpRequest.responseText);
      callback(data);
    }
  };
  httpRequest.open('GET', url);
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.send();
};
