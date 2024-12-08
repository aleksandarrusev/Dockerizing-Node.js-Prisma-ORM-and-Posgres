import { PrismaClient } from '@prisma/client'
import express from 'express'
const prisma = new PrismaClient()
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json())


app.get('/todos', async (req, res) => {
    const allTodos = await prisma.todo.findMany();

    res.json(allTodos)
})

app.post('/todos', async (req, res) => {
    const { title } = req.body;
    const post = await prisma.todo.create({
        data: { title }
    })
    res.json(post)
})

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params
    const { title } = req.body;
    const post = await prisma.todo.update({
        where: { id: Number(id) },
        data: { title },
    })
    res.json(post)
})
const server = app.listen(3005, () => {
    console.log('app listening on port 3005')
})
