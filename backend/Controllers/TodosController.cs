using backend.Models;
using backend.Service.Todos;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controller
{
    [Route("v1/api/todos")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private ITodosService _todoService;
        public TodosController(ITodosService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TodoItem>> Get()
        {
            return Ok(_todoService.GetTodos());
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public ActionResult<TodoItem> Post(TodoItem value)
        {
            return Ok(_todoService.AddTodo(value));
        }

        [HttpPut()]
        public ActionResult<TodoItem> Put(TodoItem value)
        {
            return Ok(_todoService.UpdateTodo(value));
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(long id)
        {
            return Ok(_todoService.DeleteTodo(id));
        }
    }
}