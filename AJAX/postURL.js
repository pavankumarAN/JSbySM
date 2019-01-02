var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
var method = 'POST';

var data = 'name=Pavan&age=25';

http.open(method,url);

http.setRequestHeader('Content-type','application/x-www-form-urlencoded');
http.onreadystatechange = function() {
    if(http.readyState===XMLHttpRequest.DONE &&  http.status===201) {
        console.log(JSON.parse(http.responseText));
    }
    else if(http.readyState===XMLHttpRequest.DONE &&  http.status!==201) {
        console.log('Error');
        return false;
    }
}

http.send(data);