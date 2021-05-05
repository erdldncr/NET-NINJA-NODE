const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    ////set header content type
    res.setHeader('Content-Type','text/plain');///res type
    res.write('hello,ninjas');///res icerik
    res.end()    //end res

})
server.listen(3000,'localhost',()=>{
    console.log('listenning for requests on port 3000')
})