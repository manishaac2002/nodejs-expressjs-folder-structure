//routers
import express from 'express'
import {createTodo, getTodo} from "../to-do/to-do.controller.js";

const router = express.Router()

//controller
router.post('/',createTodo)
router.get('/',getTodo )

export default router