
// const url = "post/1"
// const input = url.split('/')
// let x = input[1];
//     if(input[0] == "post" && input[1]==x){
//         console.log(input)
//     }else{
//         console.log("error");
//     }

// input.shift()
// input.unshift('ahmad')



const port = 3000;
const http = require('http')

const makePage = (header,body) => {
    return `
      <html>
        <head>
          <title>`+header+` | My Website</title>
        </head>
        <body>
          <h1>`+header+`</h1>
          <p>`+body+header+`</p>
          <p id="demo"></p>
        </body>
      </html>
    ` 
  }
  
  
const server = http.createServer( (request,response)=>{
    const url = request.url;
    var input = url.split('/')
    console.log('before',input)
    // input[0].push('/');
    let x = parseInt(input[3]) ;
    let y = parseInt(input[4])
    // input[0] = '/'
    console.log('after',input)
    
    const check = (url)=>{
        
        if(input.length = 5 && input[1] == 'post' && input[2] =='add'){
            var result = x+y;
            response.end(makePage(`Result`,`welcome to` + result));      
        }else if(input[3]=='' || input[4]==''){
            response.end(
                `<h1>not enough arguments</h1>`)
        }
    }
    
    if(url =='/home'){
       response.end(makePage(`Home`,`welcome to `)) 
    }
    if(url =='/about'){
        response.end(makePage(`About`,`welcome to ` ))
    }
    if(url =='/post'){
        response.end(makePage(`Post`,`welcome to ` ))
    }else{
        check(url);
    }
    response.end(makePage(`404`,`error 404 page not found`))
});
server.listen(port,(err)=>{
    if(err){
        console.log("something bad happened",err)
    }else{
        console.log(`server is listening on ${port} `)
    }
})

