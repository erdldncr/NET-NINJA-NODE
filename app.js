const express=require('express');
const morgan=require('morgan')
//express app
const app=express()

//listen for request

///register view engine
app.set('view engine','ejs')

///Simdi bu yuzden sonra express diger requestlere bakmayacak
// app.use((req,res,next)=>{
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     //next ile ben asagidaki requestlere bakabilrim ama olmasaydi asagiya inmezdi
//     next()
// })

///middleware&& static files
///bundan sonra public folder icinde ki hersey browserdan ulasilabilecceck espress.static sayesinde
app.use(express.static('public'))

app.use(morgan('dev'))


app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
 res.render('index',{title:'Home',blogs})
 
})


// app.use((req,res,next)=>{
//     console.log('another request made:');
//     next()
  
// })


app.get('/about',(req,res)=>{
  
    res.render('about',{title:req.url.slice(1)})
    
   })

   app.get('/blogs/create',(req,res)=>{
       res.render('create',{title:req.url.slice(-6)})
   })

//404 page
///use kullanirken siralama onemli yukaridakilerin hicbiri olmazsa use devreye girecek o yuzden asagida bulunuyor
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})

   app.listen(3000);


