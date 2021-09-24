import { TodoState, Todo } from '../interfaces/interfaces';

type todoAction =
  | { type: ' addTodo'; payload: Todo }
  | { type: ' toggle'; payload: { id: string } };

export const todoReducer = (
  state: TodoState,
  action: todoAction
): TodoState => {
  switch (action.type) {
    case ' addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ' toggle':
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
