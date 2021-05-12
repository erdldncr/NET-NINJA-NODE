const express=require('express');
const morgan=require('morgan')
const mongoose=require('mongoose')
const Blog =require('./models/blog')


//express app
const app=express()

///connect to mongodb
const dbURI=   'mongodb+srv://erdldncr:Erdldncr.1903@cluster0.cf0e1.mongodb.net/note-tuts?retryWrites=true&w=majority'

///mogoose ile database'e baglandim connect methodu sayesinde , dbURI den sonra ki object deprecation warning almamak icin cok da onemli degilmis
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    app.listen(3000)
})
.catch((err)=>console.log(err))
//listen for request

///register view engine
app.set('view engine','ejs')


///middleware&& static files
///bundan sonra public folder icinde ki hersey browserdan ulasilabilecceck espress.static sayesinde
app.use(express.static('public'))

app.use(morgan('dev'))




app.get('/',(req,res)=>{
    res.redirect('/blogs')
 
 
})





app.get('/about',(req,res)=>{
  
    res.render('about',{title:req.url.slice(1)})
    
   })

  app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'home',blogs:result})
    })
    .catch((err)=>{console.log(err)})
  }) 

   app.get('/blogs/create',(req,res)=>{
       res.render('create',{title:req.url.slice(-6)})
   })

//404 page
///use kullanirken siralama onemli yukaridakilerin hicbiri olmazsa use devreye girecek o yuzden asagida bulunuyor
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})

   






