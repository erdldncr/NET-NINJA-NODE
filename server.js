const http=require('http')
const fs=require('fs')
const _ =require('lodash');
const server=http.createServer((req,res)=>{
    
///lodash
const num=_.random(1,10)
console.log(num)

    const greet=_.once(()=>{
        console.log('hello')
    })
    greet()
    greet()
    ////set header content type
    res.setHeader('Content-Type','html');///res type
    
    ///get path from browser
    let path='./views';
    switch(req.url){
        case '/':{
            path+='/index.html'
            res.statusCode=200;
            break;

        }
        case '/about':{
            path+='/about.html'
            res.statusCode=200;
            break;
        }
        case '/about-blah':{
         ///this is to redirect to page
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end()
            break;
        }
        default :{
            path+='/404.html'
            res.statusCode=404;
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