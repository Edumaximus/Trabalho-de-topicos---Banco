import {useState, useEffect} from 'react';
import axios from 'axios';
import './ListarContas.css';
import { Link } from 'react-router-dom';
import { Conta } from '../../models/Conta';

function ListarContas(){

    const[contas, setContas] = useState<Conta[]>([]);

    useEffect(() => {
        carregarContas()
    }, []);

    function carregarContas(){
        axios.get("http://localhost:5103/api/contas")
        .then(response => {
            setContas(response.data)
            console.table(response.data);
        })
        .catch(() => {
            alert("error");
        })
    }

    function remover(id:string){
        axios.delete(`http://localhost:5103/api/contas/${id}`)
        .then(()=>{
            alert("Conta removida com sucesso");
            carregarContas();
        })
        .catch(()=>
            alert("Não foi possivel remover a conta")
        )
    }

    return (
        <div>
            <h1>Lista de contas</h1>

            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>usuário</td>
                        <td>saldo</td>
                        <td>tipo</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {contas.map((conta) =>(
                        <tr key={conta.id}>
                            <td>{conta.id}</td>
                            <td>{conta.usuario}</td>
                            <td>{conta.saldo}</td>
                            <td>{conta.tipo.nome}</td>
                            <button className="remover" onClick={()=>remover(conta.id)}>Remover</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarContas;