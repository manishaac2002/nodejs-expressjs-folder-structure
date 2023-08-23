//controllers

const createTodo = (request, response)=>{
    //save to database
    response.json({
        successfully: true,
        data: request.body
    })
}
const getTodo =(request, response) => {
    //get all data
    response.json({ 
        successfully: true,
        data: [{ id: "1", text: 'Some dummy Text' }]
    })
}

export {
    createTodo,
    getTodo
} 