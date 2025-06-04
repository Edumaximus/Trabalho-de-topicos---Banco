using API.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add CORS services
builder.Services.AddCors(options =>
     options.AddPolicy("Acesso Total",
         configs => configs
             .AllowAnyOrigin()
             .AllowAnyHeader()
             .AllowAnyMethod())
);

builder.Services.AddDbContext<AppDataContext>();

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

//listagem dos tipos de conta
app.MapGet("/api/tipos", ([FromServices] AppDataContext ctx)=>{
    if(ctx.Tipos.Any()){
        return Results.Ok(ctx.Tipos.ToList());
    }
    return Results.NotFound();
});

//listagem das contas cadastradas
app.MapGet("/api/conta", ([FromServices] AppDataContext ctx)=>{
    
    var contas = ctx.Contas
        .Include(c => c.Tipo) // traz também o Tipo junto
        .ToList();
    if (ctx.Contas.Any())
    {
        return Results.Ok(contas);
    }
    return Results.NotFound();
});


//cadastrar novo usuário
app.MapPost("/api/contas", ([FromBody] Conta conta, [FromServices] AppDataContext ctx) => {

    conta.Tipo = ctx.Tipos.Find(conta.Tipo.Id);
    if(conta.Tipo == null){
        return Results.BadRequest("Tipo de conta inexistente");
    }
    if(conta.Usuario == null){
        return Results.BadRequest("O nome do usuário da conta não foi fornecido");
    }

    ctx.Contas.Add(conta);
    ctx.SaveChanges();
    return Results.Created("", conta);
    
});

//cadastrar novo tipo de conta
app.MapPost("/api/tipos", ([FromBody] Tipo tipo, [FromServices] AppDataContext ctx) => {

    if(tipo.Nome == null){
        return Results.BadRequest("O novo tipo de conta precisa de um nome");
    }
    if(tipo.Descricao == null){
        return Results.BadRequest("O novo tipo de conta precisa de uma descição");
    }

    ctx.Tipos.Add(tipo);
    ctx.SaveChanges();
    return Results.Created("", tipo);
    
});

//deletar usuário pelo id
app.MapDelete("/api/contas/{id}", ([FromRoute] int id,
                                   [FromServices] AppDataContext ctx) => {   
    Conta? conta = ctx.Contas.Find(id);
    if(conta == null) {
        return Results.NotFound();
    }

    ctx.Contas.Remove(conta);
    ctx.SaveChanges();
    return Results.NoContent();
});

//buscar informações de usuário pelo nome
app.MapGet("/api/contas/{usuario}",([FromRoute] string usuario, [FromServices] AppDataContext ctx)=>{

    var contas = ctx.Contas
                    .Include(c => c.Tipo) // traz também o Tipo junto
                    .Where(c => c.Usuario == usuario)
                    .ToList();

    if (contas.Any()) {
        return Results.Ok(contas);
    }
    return Results.NotFound();
});

//depositar dinheiro no saldo de um usuário
app.MapPut("/api/contas/depositar/{id}", ([FromRoute] int id, [FromBody] Transacao transacao, [FromServices] AppDataContext ctx) => {
    Conta? entidade = ctx.Contas.Find(id);
    
    if (entidade == null) {
        return Results.NotFound();
    }

    entidade.Saldo += transacao.Quantia;

    ctx.Contas.Update(entidade);
    ctx.SaveChanges();
    return Results.Ok(entidade);
});


/*sacar dinheiro do saldo de um usuário
app.MapPut("/api/contas/sacar/{id}", ([FromRoute] int id, [FromBody] Transacao transacao, [FromServices] AppDataContext ctx) => {
    Conta? entidade = ctx.Contas.Find(id);
    
    if (entidade == null) {
        return Results.NotFound();
    }

    entidade.Saldo -= transacao.Quantia;

    ctx.Contas.Update(entidade);
    ctx.SaveChanges();
    return Results.Ok(entidade);
});*/

app.UseCors("Acesso Total");

app.Run();