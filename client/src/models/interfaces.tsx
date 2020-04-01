export type TodoType = {
  id: string;
  title: string;
  done: boolean;
};

export interface actionTodo {
  (id: string, index:number): void;
}
