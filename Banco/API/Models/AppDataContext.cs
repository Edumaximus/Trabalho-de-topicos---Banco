using System;
using Microsoft.EntityFrameworkCore;

using API.Models;

public class AppDataContext : DbContext{

    public DbSet<Conta> Contas { get; set; }
    public DbSet<Tipo> Tipos { get; set; } 

protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=trabalho.db");
    }

     protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<Tipo>().HasData(

            new Tipo() {Id = 1, Nome = "Normal", Descricao = "Conta normal sem restrições"},
            new Tipo() {Id = 2, Nome = "Estudantil", Descricao = "Conta com limite de crédito reduzido"}
            
        );
     }

}