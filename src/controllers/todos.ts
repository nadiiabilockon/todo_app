import { RequestHandler } from 'express';
import { Todo } from '../models/todo'

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, nex) => {
    const text = (req.body as { text: string }).text;
    const newTodo = new Todo(Math.random().toString(), text)

    TODOS.push(newTodo);

    res.status(201).json({
        message: 'Created the todo',
        createdTodo: newTodo
    })
}

export const getTodos: RequestHandler = (req, res, nex) => {
    res.json({ todos: TODOS })
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, nex) => {
    const { id } = req.params;

    const updatedText = (req.body as { text: string }).text;

    const todoIndex = TODOS.findIndex(todo => todo.id === id);

    if (todoIndex < 0) {
        throw new Error('Could not find todo!')
    }
    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)

    res.json({
        message: 'Updated!',
        updatedTodo: TODOS[todoIndex]
    })
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, nex) => {
    const { id } = req.params;

    const todoIndex = TODOS.findIndex(todo => todo.id === id);

    if (todoIndex < 0) {
        throw new Error('Could not find todo!')
    }

    TODOS.splice(todoIndex,1);

    res.json({
        message:'Todo deleted!'
    })
}