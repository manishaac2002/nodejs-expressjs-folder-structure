import express from 'express';
const application =express()

const PORT =process.env.PORT || 5000

application.get('/',(request,response)=>{
    response.json({
        successfully:true,
        data:[1,2,3]})
})
application.post('/to-do',(request,response)=>{
    //save to database
    response.json({
        successfully:true,
        data:request.body})
    })
    application.get('/to-do',(request,response)=>{
     //get all data
    response.json({
        successfully:true,
       data:[{id:"1",text:'Some Text'}]
    })
})

application.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
})