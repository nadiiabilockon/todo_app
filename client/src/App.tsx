import React, { useEffect, useState } from "react";
import axios from "axios";
import { Title } from "./components/Title";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoType } from "./models/interfaces";
import { Container } from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const apiUrl = "http://localhost:8080/todos";
  let muted = false;

  const fetchTodos = async () => {
    const response = await axios.get(apiUrl);

    setTodos(response.data.todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = (val: string) => {
    const todo = { title: val };
    axios.post(apiUrl, todo).then(res => {
      fetchTodos();
      console.log(res.data);
    });
  };

  const handleRemove = (id: string, index: number) => {
    muted = true;
    const remainder = todos[index];

    const newStatus = !remainder?.done;

    setTodos(
      todos.map(o => {
        if (o.id === id) return { ...o, done: newStatus };
        return o;
      })
    );

    axios.patch(apiUrl + "/" + id, { done: newStatus }).then(res => {
      console.log(res);
    });
  };

  const activeCount = todos.reduce((count: number, element) => {
    if (!element.done) {
      count += 1;
    }
    return count;
  }, 0);

  return (
    <Container fixed>
      <Title todoCount={activeCount} />
      <TodoForm addTodo={addTodo} />
      {todos.length ? <TodoList todos={todos} remove={handleRemove} /> : null}
    </Container>
  );
}

export default App;
