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


///mongoose and mongo sandbox routes

///add to database
app.get('/add-blog',(req,res)=>{
const blog=new Blog({
    title:'new blog 2',
    snippet:'about my new blog',
    body:'more about my blog'
})
///to save this method
blog.save()
.then((result)=>{
    res.send(result)
})
.catch((err)=>{
    res.send(result)
})

})
///get all the blogs
app.get('/all-blogs',(req,res)=>{
    //find method
    Blog.find()
    .then(result=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

//get single blog
app.get('/single-blog',(req,res)=>{
    //use this method
    Blog.findById("609bcec63b649647aac83ff9")
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>console.log(err))
})

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

   






