// ///mongoose and mongo sandbox routes

// ///add to database
// app.get('/add-blog',(req,res)=>{
//     const blog=new Blog({
//         title:'new blog 2',
//         snippet:'about my new blog',
//         body:'more about my blog'
//     })
//     ///to save this method
//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         res.send(result)
//     })
    
//     })
//     ///get all the blogs
//     app.get('/all-blogs',(req,res)=>{
//         //find method
//         Blog.find()
//         .then(result=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     })
    
//     //get single blog
//     app.get('/single-blog',(req,res)=>{
//         //use this method
//         Blog.findById("609bcec63b649647aac83ff9")
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>console.log(err))
//     })