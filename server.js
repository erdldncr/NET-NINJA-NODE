const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    ////set header content type
    res.setHeader('Content-Type','html');///res type

    //fs ile dosyayi okuyorum
    fs.readFile('./views/index.html',(err,data)=>{
        ///hata varsa log yap
        if(err){
            console.log(err)
            res.end()
        }else{
        ///data respond olarak gonder
        //    res.write(data);
           ///respondu sonlandir
           res.end(data)
        }
    })

})
server.listen(3000,'localhost',()=>{
    console.log('listenning for requests on port 3000')
})