import React from "react";
import { IconButton, Paper, InputBase } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface ToggleProps {
  addTodo: (value: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    }
  })
);
export const TodoForm = (props: ToggleProps) => {
  const classes = useStyles();
  let input: HTMLInputElement;

  const handleSubmit = () => {
    if (input.value) {
      props.addTodo(input.value);
      input.value = "";
    }
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Add todo"
        inputRef={node => {
          input = node as HTMLInputElement;
        }}
        inputProps={{ "aria-label": "search google maps" }}
        onKeyPress={event => {
          if (event.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="add"
        onClick={handleSubmit}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
};
