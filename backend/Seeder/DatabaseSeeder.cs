using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Seeder
{
    public static class DatabaseSeeder
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoItem>().HasData(
                new TodoItem()
                {
                    Id = 1,
                    Name = "Task 1",
                    IsComplete = false,
                },
                new TodoItem()
                {
                    Id = 2,
                    Name = "Task 2",
                    IsComplete = false,
                }
            );
        }

    }
}
