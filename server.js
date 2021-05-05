const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    ////set header content type
    res.setHeader('Content-Type','html');///res type
    
    ///get path from browser
    let path='./views';
    switch(req.url){
        case '/':{
            path+='/index.html'
            break;

        }
        case '/about':{
            path+='/about.html'
            break;
        }
        default :{
            path+='/404.html'
            break;
        }
    }
    //fs ile dosyayi okuyorum
    fs.readFile(path,(err,data)=>{
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