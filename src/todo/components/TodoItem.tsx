import { Todo } from '../interfaces/interface';
import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';
//import { useTodos } from '../hooks/useTodos';

interface props {
  todo: Todo;
}

const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useContext(TodoContext);

  const handleDbClick = (): void => {
    toggleTodo(todo.id);
  };

  //const { toggleTodo } = useTodos();

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
      }}
      onDoubleClick={handleDbClick}
      //onDoubleClick={() => toggleTodo(todo.id)}
    >
      {todo.desc}
    </li>
  );
};

export default TodoItem;
