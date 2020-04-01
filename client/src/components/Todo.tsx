import React, { useContext } from "react";
import { TodoType } from "../models/interfaces";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { TodoContext } from "../App";

export const Todo = (props: { todo: TodoType; index: number }) => {
  const { clickedId, doneHandler, removeHandler } = useContext(TodoContext);

  return (
    <ListItem
      dense
      disabled={clickedId === props.todo.id}
      button
      onClick={
        doneHandler ? () => doneHandler(props.todo.id, props.index) : () => {}
      }
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
        onClick={removeHandler ? () => removeHandler(props.todo.id) : () => {}}
      >
        <IconButton edge="end" aria-label="comments">
          <DeleteOutlineIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
