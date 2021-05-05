const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    ////set header content type
    res.setHeader('Content-Type','html');///res type
    res.write('<p>hello,ninjas</p>');///res icerik
    res.write('<p>hello,ninjas 2</p>');///res icerik
    res.end()    //end res

})
server.listen(3000,'localhost',()=>{
    console.log('listenning for requests on port 3000')
})