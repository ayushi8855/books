const express = require("express")
const app=express()

app.get("/home",function(req,res){
    res.send({name:"hello"})
})


 app.get("/books",function(req,res){
    res.send({book1:"secret",book2:"Annei frank",book3:"Harry potter",book4:"wings of fire"})
})
app.listen(7000,()=>{
    console.log("hellohello")
});
// const http =require("http")
// console.log(http)
// const server= http.createServer((req,res)=>{
//     if(req.url=="/ayushi"){
//         res.writeHead(200,{
//             "Content-Type":"text/plain"

//         })
//         res.write("hello home")
//         res.end()
//     }
//     else if(req.url=="/ssss"){
//         res.writeHead(200,{
//             "Content-type":"application/json"
//         })
//         const data={
//             book1:"Annie frank",
//            book2:"Wings of fire",
//            book3:"Secret",
//            book4:"harry potter"
//         }
//         // const data =[1,2,2]
//         res.write(JSON.stringify(data))
//         // res.write(data)
//         res.end()
//     }
    
// })
// server.listen(8000,()=>{
//     console.log("ay")
// })
