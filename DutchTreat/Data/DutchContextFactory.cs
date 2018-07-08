using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace DutchTreat.Data
{
    public class DutchContextFactory : IDesignTimeDbContextFactory<DutchContext>
    {
        public DutchContext CreateDbContext(string[] args)
        {
            // Create a configuration
            var config = new ConfigurationBuilder()
              .SetBasePath(Directory.GetCurrentDirectory())
              .AddJsonFile("config.json")
              .Build();

            var bldr = new DbContextOptionsBuilder<DutchContext>();
            bldr.UseSqlServer(config.GetConnectionString("DutchConnectionString"));

            return new DutchContext(bldr.Options);
        }
    }
}