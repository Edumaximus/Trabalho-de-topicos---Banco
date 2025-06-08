import axios from 'axios';
import { useState } from 'react';
import './CadastrarContas.css';
import { useParams } from 'react-router-dom';

function CadastrarContas() {
    const {id} = useParams();
    const [usuario, setUsuario] = useState("");
    const [saldo, setSaldo] = useState(0);
    

    function salvar(e: any) {
        e.preventDefault();
        const conta = {
            usuario: usuario,
            saldo: parseFloat(saldo.toString()),   
        };
        cadastrar(conta);
    }

    function cadastrar(conta: any) {
        axios.post("http://localhost:5103/api/contas", conta)
        .then(response => {
            console.log(response);
            alert("Conta cadastrada com sucesso!");
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao cadastrar a conta");
        });
    }

    return (
        <div className='cad'>
            <h1>Cadastrar Conta</h1>
            <form onSubmit={salvar}>
                <div>
                    <label htmlFor="usuario">Usuário</label>
                    <input
                        type="text"
                        id="usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Digite o nome do usuário"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="saldo">Saldo</label>
                    <input
                        type="number"
                        step="0.01"
                        id="saldo"
                        value={saldo}
                        onChange={(e) => setSaldo(Number(e.target.value))}
                        placeholder="Digite o saldo inicial"
                        required
                    />
                </div>

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default CadastrarContas;
