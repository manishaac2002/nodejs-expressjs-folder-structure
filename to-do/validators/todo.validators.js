const createTodoValidator = (request, response)=>{
    //text validator
    if (request.body.text) {
        response.json({
            successfully:"true",
            error:"error"    })
        // throw Error("Text is required")
    }
    response.json({
        successfully: true,
        data: request.body
    })
}

export default createTodoValidator