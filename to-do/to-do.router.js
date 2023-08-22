import express from 'express'
import {createTodo,getTodo} from './to-do.controller.js'


const router = express.Router()
router.post('/',createTodo )
 
router.get('/', getTodo)

export default router