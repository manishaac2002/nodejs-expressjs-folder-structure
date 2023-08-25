const createTodoValidator = (request, response)=>{
    //text validator
    if (!request.body.text) {
        response.json({
            successfully:false,
            error:{text:["Text is required"]}   
         })
    }
    response.json({
        successfully: true,
        data: request.body
    })
}

export default createTodoValidator