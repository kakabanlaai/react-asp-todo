using backend.Configuration;
using backend.Seeder;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public class TodoDbContext : DbContext
{
    public TodoDbContext(DbContextOptions<TodoDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new TodoConfiguration());

        modelBuilder.Seed();
    }

    public DbSet<TodoItem> Todos { get; set; }
}