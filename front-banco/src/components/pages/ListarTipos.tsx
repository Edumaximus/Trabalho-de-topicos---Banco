import {useState, useEffect} from 'react';
import axios from 'axios';
import './ListarTipos.css';
import {Tipo} from "../../models/Tipo";
import { Link } from 'react-router-dom';

function ListarTipos(){

    const[tipos, setTipos] = useState<Tipo[]>([]);

    useEffect(() => {
        carregarTipos()
    }, []);

    function carregarTipos(){
        axios.get("http://localhost:5103/api/tipos")
        .then(response => {
            setTipos(response.data)
            console.table(response.data);
        })
        .catch(() => {
            alert("error");
        })
    }

    return (
        <div>
            <h1>Tipos de conta</h1>

            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Nome</td>
                        <td>Descrição</td>
                    </tr>
                </thead>
                <tbody>
                    {tipos.map((tipo) =>(
                        <tr key={tipo.id}>
                            <td>{tipo.id}</td>
                            <td>{tipo.nome}</td>
                            <td>{tipo.descricao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarTipos;