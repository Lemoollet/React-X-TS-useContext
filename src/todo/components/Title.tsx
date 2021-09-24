import { useTodos } from '../hooks/useTodos';

const Title = () => {
  const { pendeingTodos } = useTodos();

  return <h1>Todos: {pendeingTodos}</h1>;
};

export default Title;
