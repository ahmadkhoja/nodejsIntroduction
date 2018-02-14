var port = 3000;
var express = require('express')
var app = express()


var makePage = function(header,subject){
   
    return `<h1>`+header+`</h1>`+
        `<p>The Requested url is: `+subject+` </p>`
    
}

app.get('/',function(request,response){
    var url = request.url;
    response.send(makePage('You are at localhost',url))
})
app.get('/home',function(request,response){
    var url = request.url;
    response.send(makePage('Welcome to the Home page',url))
})
app.get('/about',function(request,response){
    var url = request.url;
    response.send(makePage('Welcome to the About page',url))
})


app.get('/post',function(request,response){
    var url = request.url;
    response.send(makePage('Welcome to the Post page',url))
})
let x=1;
app.get('/post/:x?',(request,response)=>{
    console.log(x);
    const url = request.url;
    let input = url.split('/');
    console.log(input,'x',x,'input2',input[2])
    input[0] = '/';
    x = input[2]
    if(x>=1 && x<=5000){
        if(input[1] == "post" && input[2]==x){
            console.log(input)
          response.send(makePage(`Post`,`welcome to post ` + x));      
          }else{
              response.send(makePage(`404`,`page not found: error `))
          }  
    }else{
        response.send(makePage(`not allowed`,`sorry you cannot`))
    }
})


app.listen(port,(err)=>{
    if(err){
        console.log(`error`,err)
    }else{
        console.log(`listining to port ${port}`)
    }
})


