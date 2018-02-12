
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
          <p>`+body+`</p>
        </body>
      </html>
    ` 
  }


const server = http.createServer( (request,response)=>{
    const url = request.url;
    if(url =='/home'){
       response.end(makePage(`Home`,`welcome to ` + url)) 
    }else if(url =='/about'){
        response.end(makePage(`About`,`welcome to ` + url))
    }else if(url =='/post'){
        response.end(makePage(`Post`,`welcome to ` + url))
    }else{
        response.end(makePage(`404`,`error 404 page not found`))
    }
});
server.listen(port,(err)=>{
    if(err){
        console.log("something bad happened",err)
    }else{
        console.log(`server is listening on ${port} `)
    }
})