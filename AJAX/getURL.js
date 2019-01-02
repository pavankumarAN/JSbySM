var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
var method = 'GET';

http.open(method,url);

http.onreadystatechange = function() {
    if(http.readyState===XMLHttpRequest.DONE &&  http.status===200) {
        console.log(JSON.parse(http.responseText));
    }
    else if(http.readyState===XMLHttpRequest.DONE &&  http.status!==200) {
        console.log('Error');
        return false;
    }
}

http.send();