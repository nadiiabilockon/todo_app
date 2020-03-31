export type TodoType = {
  id: string;
  title: string;
  done: boolean;
};

export interface RemoveTodo {
  (id: string, index:number): void;
}
