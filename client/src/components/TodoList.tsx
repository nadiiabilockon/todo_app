import React from "react";
import { Todo } from "./Todo";
import { TodoType, RemoveTodo } from "../models/interfaces";
import { Grid, List } from "@material-ui/core";

export const TodoList = (props: { todos: TodoType[]; remove: RemoveTodo }) => {
  const todoNode = props.todos.map((todo, index) => {
    return (
      <Todo todo={todo} key={todo.id} remove={props.remove} index={index} />
    );
  });
  return (
    <Grid item>
      <List>{todoNode}</List>
    </Grid>
  );
};
