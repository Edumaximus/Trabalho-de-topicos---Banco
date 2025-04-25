using System;
using Microsoft.EntityFrameworkCore;

using API.Models;

public class AppDataContext : DbContext{

    public DbSet<Conta> Contas { get; set; }
    public DbSet<TipoDaConta> TiposDasContas { get; set; } 

protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=trabalho.db");
    }

     protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<TipoDaConta>().HasData(

            new TipoDaConta() {Id = 1, Name = "Adulto"},
            new TipoDaConta() {Id = 2, Name = "Menor de Idade"},
            
        );
     }

}