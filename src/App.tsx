import Todo from './todo/Todo';

function App() {
  return (
    <div
      style={{
        background: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: ' center',
        color: 'white',
      }}
    >
      <Todo />
    </div>
  );
}

export default App;
