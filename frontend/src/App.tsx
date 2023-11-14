import {useState} from 'react';
import {Button} from './components/ui/button';
import {Input} from './components/ui/input';
import TodoItem from './components/todo-item';
import {nanoid} from 'nanoid';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState('');

  return (
    <div className='min-h-screen bg-muted py-8'>
      <div>
        <section className='flex flex-col gap-y-4 items-center max-w-lg mx-auto text-center'>
          <h1 className='text-4xl font-bold text-primary'>Todo</h1>
        </section>

        <section className='flex w-full max-w-lg  mx-auto items-center space-x-2 justify-center mt-8'>
          <Input
            type='text'
            placeholder='Start typing...'
            autoFocus
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <Button
            onClick={() => {
              if (todo !== '') {
                setTodos((prev) => [
                  ...prev,
                  {id: nanoid(), text: todo, status: 'initialized'},
                ]);
              }
            }}
          >
            Save
          </Button>
        </section>

        <section className='mt-8 max-w-lg mx-auto'>
          <div className='flex flex-col gap-y-2'>
            {todos.map((todo) => (
              <TodoItem todo={todo} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
