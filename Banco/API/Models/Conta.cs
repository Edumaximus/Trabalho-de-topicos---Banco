using System;
using Microsoft.EntityFrameworkCore;
namespace API.Models;

public class Conta
{
    public int Id { get; set; }
    public string Usuario { get; set;} 
    public float Saldo { get; set;}
    public Tipo? Tipo { get; set;}

     public Conta() {
        this.Saldo = 0;
     }
}