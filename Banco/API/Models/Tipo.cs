using System;
using Microsoft.EntityFrameworkCore;
namespace API.Models;

public class Tipo {
    public int Id { get; set;}
    public string Nome { get; set;}
    public string Descricao {get; set;}
}