using System;
using Microsoft.EntityFrameworkCore;

using API.Models;

public class AppDataContext : DbContext{



protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=trabalho.db");
    }

}