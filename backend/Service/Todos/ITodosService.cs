using backend.Models;

namespace backend.Service.Todos
{
    public interface ITodosService
    {
        List<TodoItem> GetTodos();
        TodoItem AddTodo(TodoItem todo);
        TodoItem UpdateTodo(TodoItem todo);
        Boolean DeleteTodo(long id);
    }
}
