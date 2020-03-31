import React from "react";
import { TodoType, RemoveTodo } from "../models/interfaces";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox
} from "@material-ui/core";

export const Todo = (props: {
  todo: TodoType;
  index: number;
  remove: RemoveTodo;
}) => {
  return (
    <ListItem
      dense
      button
      onClick={() => props.remove(props.todo.id, props.index)}
    >
      <ListItemIcon>
        <Checkbox
          checked={props.todo.done}
          edge="start"
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": props.todo.id }}
        />
      </ListItemIcon>
      <ListItemText id={props.todo.id} primary={props.todo.title} />
    </ListItem>
  );
};
