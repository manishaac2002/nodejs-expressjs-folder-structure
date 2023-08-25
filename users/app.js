import express from 'express';
import {createTodo, getTodo} from "../to-do/to-do.controller.js";
import createTodoValidator from '../to-do/validators/todo.validators.js';

const application = express()

application.use(express.json())
//routers
application.use('/to-do',createTodoValidator,createTodo)
application.use('/getTo-do',getTodo)

export default application