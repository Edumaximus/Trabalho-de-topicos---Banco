import {Tipo} from "./Tipo";

export interface Conta
{
    id: string;
    usuario: string;
    saldo: number;
    tipo: Tipo;
}