import React from "react";
import { Todo } from "./Todo";
import { TodoType, actionTodo } from "../models/interfaces";
import { Grid, List } from "@material-ui/core";

export const TodoList = (props: {
  todos: TodoType[];
  doneHandler: actionTodo;
  removeHandler: (id: string) => void;
  clickedId: string;
}) => {
  const todoNode = props.todos.map((todo, index) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        doneHandler={props.doneHandler}
        removeHandler={props.removeHandler}
        index={index}
        clickedId={props.clickedId}
      />
    );
  });
  return (
    <Grid item>
      <List>{todoNode}</List>
    </Grid>
  );
};
