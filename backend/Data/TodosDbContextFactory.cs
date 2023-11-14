using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace backend.Data
{
    public class TodosDbContextFactory : IDesignTimeDbContextFactory<TodoDbContext>
    {
        public TodoDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configurationRoot = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
            var connectionString = configurationRoot.GetConnectionString("TodoDb");
            var optionBuilder = new DbContextOptionsBuilder<TodoDbContext>();

            optionBuilder.UseNpgsql(connectionString);

            return new TodoDbContext(optionBuilder.Options);
        }
    }
}
