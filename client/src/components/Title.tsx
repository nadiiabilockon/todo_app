import React from "react";

export const Title = (props: { todoCount: number }) => {
  return (
    <div>
      <div>
        <h1>
          To-Do List: {props.todoCount}
        </h1>
      </div>
    </div>
  );
};
