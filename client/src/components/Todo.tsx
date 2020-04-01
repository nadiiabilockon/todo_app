import React from "react";
import { TodoType, actionTodo } from "../models/interfaces";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export const Todo = (props: {
  todo: TodoType;
  index: number;
  doneHandler: actionTodo;
  removeHandler: (id:string) => void;
  clickedId: string;
}) => {
  return (
    <ListItem
      dense
      disabled={props.clickedId === props.todo.id}
      button
      onClick={() => props.doneHandler(props.todo.id, props.index)}
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
      <ListItemText
        id={props.todo.id}
        primary={props.todo.title}
        className={props.todo.done ? "cross-text" : ""}
      />
      <ListItemSecondaryAction
        onClick={() => props.removeHandler(props.todo.id)}
      >
        <IconButton edge="end" aria-label="comments">
          <DeleteOutlineIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
