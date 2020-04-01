import React, { useContext } from "react";
import { Todo } from "./Todo";
import { Grid, List } from "@material-ui/core";
import { TodoContext } from "../App";

export const TodoList = () => {
  const { todos } = useContext(TodoContext);

  const todoNode = todos!.map((todo, index) => {
    return <Todo todo={todo} key={todo.id} index={index} />;
  });
  return (
    <Grid item>
      <List>{todoNode}</List>
    </Grid>
  );
};
