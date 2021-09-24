import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { TodoState } from '../interfaces/interface';
import { todoReducer } from './todoReducer';

interface TodoContextProps {
  children: JSX.Element | JSX.Element[];
}

const INITAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    { id: '1', desc: 'Recolectar las piedras del infinito', completed: false },
    { id: '2', desc: 'Piedra del alma', completed: false },
  ],
  completed: 0,
  pending: 2,
};

const TodoProvider = ({ children }: TodoContextProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITAL_STATE);

  const toggleTodo = (id: string): void => {
    dispatch({ type: ' toggle', payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
