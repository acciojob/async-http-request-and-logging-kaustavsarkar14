//your JS code here. If required.
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(data=>data.json())
.then(data=>console.log(data))