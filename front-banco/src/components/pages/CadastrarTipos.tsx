import axios from 'axios';
import { useEffect, useState } from 'react';
import './CadastrarTipos.css';
import { error } from 'console';
import { useParams } from 'react-router-dom';

function CadastrarTipo() {
    const {id} = useParams();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");


    function salvar (e: any) {
        e.preventDefault();
        const p = {
            nome: nome,
            descricao: descricao,
        }
        cadastrar(p);
    }

    function cadastrar(tipo: any) {
        axios.post("http://localhost:5103/api/tipos", tipo)
        .then(response => {
            console.log(response);
            alert("Tipo de conta cadastrado com sucesso");
        })
        .catch( error => {
            alert("Ocorreu um erro ao cadastrar o tipo de conta");
        })
    }

    return (
        <div className='cad'>
            <h1>Cadastrar novo tipo de conta</h1>
            <form onSubmit={salvar}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        onChange={(e: any) => setNome(e.target.value)}
                        value={nome}
                        type="text"
                        id="nome"
                        placeholder="Digite o nome do novo tipo"
                        required/>
                </div>

                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        onChange={(e: any) => setDescricao(e.target.value)}
                        value={descricao}
                        id="descricao"
                        placeholder="Digite a descrição do novo tipo"
                        required/>
                </div>
                
                <button type="submit">
                    Salvar
                </button>
            </form>
        </div>
    );

}

export default CadastrarTipo;