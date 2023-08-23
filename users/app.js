import express from 'express';
import {createTodo, getTodo} from "../to-do/to-do.controller.js";

const application = express()

//routers
application.use('/to-do',createTodo)
application.use('/getTo-do',getTodo)

export default application