import React from "react";
import DoneIcon from "@material-ui/icons/Done";

export const Title = (props: { todoCount: number }) => {
  return (
    <div>
      <div>
        <h1>
          To-Do List: {props.todoCount}
          <DoneIcon color="error" />
        </h1>
      </div>
    </div>
  );
};
