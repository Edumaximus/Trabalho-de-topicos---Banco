import {Tipo} from "./Tipo";

export interface Produto
{
    id: string;
    usuario: string;
    saldo: number;
    tipo: Tipo;
}