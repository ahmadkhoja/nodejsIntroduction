
const port = 3000;
const http = require('http')

const makeArticle = (title,text)=>{
    return `
    <div>
    <h1>`+ title +`</h1>
    <p>`+ text +`</p>
    </div>
    `
}

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
    // console.log('before',input)
    // input[0].push('/');
    let x = input[2];
    // input[0] = '/'
    // console.log('after',input)
    
    const check = (url)=>{
        if(input[2]>=1 && input[2]<=5000){
            if((input[1]) == "post" && input[2]==x){
                // console.log(input)
            const internet = makeArticle('Internet','Internet is network of networks');
            const game = makeArticle('Game','The place where you can fight evil and win');
            const movie = makeArticle('Movie','Just sit down and relax');
            
            const array = [internet,game,movie]

            for(let i=0;i<array.length;i++){
                response.write(array[i]);
            }    
              response.end();

              }else{
                  response.end(makePage(`404`,`page not found: error `))
              }  
        }
        else{
            response.end(makePage(`not allowed`,`sorry you cannot`))
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

