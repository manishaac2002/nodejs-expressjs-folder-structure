import express from 'express';
import createTodo from "../nodejs-expressjs-folder structure/to-do/to-do.router.js";

const application = express()
application.use('/to-do',createTodo)

const PORT = process.env.PORT || 5000

application.get('/', (request, response) => {
    response.json({
        successfully: true,
        data: [1, 2, 3]
    })
})

application.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
})