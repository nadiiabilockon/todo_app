import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Button } from "@material-ui/core";
import "./App.css";
import { Title } from "./components/Title";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoType } from "./models/interfaces";
import MainAppBar from "./components/AppBar";

type ContextProps = {
  todos: TodoType[];
  clickedId: string;
  doneHandler(id: string, index: number): void;
  removeHandler(id: string): void;
};

export const TodoContext = React.createContext<Partial<ContextProps>>({});

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [clickedId, setClickedId] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const apiUrl = "http://localhost:8080/todos";

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

  const doneHandler = (id: string, index: number) => {
    if (clickedId) return;

    setClickedId(id);

    const remainder = todos[index];
    const newStatus = !remainder?.done;

    setTodos(
      todos.map(o => {
        if (o.id === id) return { ...o, done: newStatus };
        return o;
      })
    );

    axios.patch(apiUrl + "/" + id, { done: newStatus }).then(() => {
      setClickedId("");
    });
  };

  const removeHandler = (id: string) => {
    axios.delete(apiUrl + "/" + id).then(() => {
      setTodos(todos.filter(item => item.id !== id));
    });
  };

  const activeCount = todos.reduce((count: number, element) => {
    if (!element.done) {
      count += 1;
    }
    return count;
  }, 0);

  return (
    <Container maxWidth="xl" className={selectedValue}>
      <MainAppBar
        setSelectedValue={setSelectedValue}
        selectedValue={selectedValue}
      />
      <Grid container justify="center">
        <Grid item xs={12} md={8} lg={6} className="main-content">
          <Title todoCount={activeCount} />
          <TodoForm addTodo={addTodo} />
          <TodoContext.Provider
            value={{
              todos,
              removeHandler,
              doneHandler,
              clickedId
            }}
          >
            {todos.length ? <TodoList /> : null}
          </TodoContext.Provider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
