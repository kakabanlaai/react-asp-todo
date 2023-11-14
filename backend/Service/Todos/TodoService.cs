using backend.Models;

namespace backend.Service.Todos
{
    public class TodosService : ITodosService
    {
        private readonly TodoDbContext _todosDbContext;
        public TodosService(TodoDbContext todoDbContext)
        {
            _todosDbContext = todoDbContext;
        }

        public TodoItem AddTodo(TodoItem todo)
        {
            _todosDbContext.Add(todo);
            _todosDbContext.SaveChanges();
            return todo;

        }

        public bool DeleteTodo(long id)
        {
            TodoItem todo = _todosDbContext.Todos.Find(id);
            if (todo == null) return false;

            _todosDbContext.Todos.Remove(todo);
            _todosDbContext.SaveChanges();

            return true;
        }

        public List<TodoItem> GetTodos()
        {
            return _todosDbContext.Todos.OrderByDescending(x => x.Id).ToList();
        }

        public TodoItem UpdateTodo(TodoItem todo)
        {
            _todosDbContext.Todos.Update(todo);
            _todosDbContext.SaveChanges();
            return todo;
        }
    }
}
