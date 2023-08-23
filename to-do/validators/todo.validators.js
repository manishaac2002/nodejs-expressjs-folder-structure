const createTodo = (request, response)=>{
    //text validator
    if (request.body.text) {
        throw Error("Text is required")
    }
    response.json({
        successfully: true,
        data: request.body
    })
}