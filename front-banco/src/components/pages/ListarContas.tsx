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
                    </tr>
                </thead>
                <tbody>
                    {contas.map((conta) =>(
                        <tr key={conta.id}>
                            <td>{conta.id}</td>
                            <td>{conta.usuario}</td>
                            <td>{conta.saldo}</td>
                            <td>{conta.tipo.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarContas;