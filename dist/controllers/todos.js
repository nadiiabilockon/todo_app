"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../models/todo");
const TODOS = [];
exports.createTodo = (req, res, nex) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({
        message: 'Created the todo',
        createdTodo: newTodo
    });
};
exports.getTodos = (req, res, nex) => {
    res.json({ todos: TODOS });
};
exports.updateTodo = (req, res, nex) => {
    const { id } = req.params;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({
        message: 'Updated!',
        updatedTodo: TODOS[todoIndex]
    });
};
exports.deleteTodo = (req, res, nex) => {
    const { id } = req.params;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS.splice(todoIndex, 1);
    res.json({
        message: 'Todo deleted!'
    });
};
