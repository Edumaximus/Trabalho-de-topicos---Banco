namespace API.Models;

public class Conta
{
     public int Id { get; set; }
    public string Nomedousuario { get; set;} 
    public float Saldodaconta { get; set;}
     public TipoDaConta? TipoDaConta { get; set;}

     public Conta() {
        this.Saldodaconta = 0;
     }
}