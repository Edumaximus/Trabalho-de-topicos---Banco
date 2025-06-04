import axios from 'axios';
import { useEffect, useState } from 'react';
import './Transacoes.css';
import { error } from 'console';

function Transacoes() {
    const [id, setId] = useState("");
    const [valor, setValor] = useState<number>(0);

    function salvar (e: any) {
        e.preventDefault();
        const v = {
            quantia: Number(valor),
        }

        if(id!=null){
            alterar(id,v);
        }
    }

    function alterar(id: String, quantia: any) {

        if (valor > 0){
            axios.put(`http://localhost:5103/api/contas/depositar/${id}`, quantia)
            .then(response => {
            console.log(response);
                alert("Depósito executado com sucesso.");
            })
            .catch( error => {
              alert("Ocorreu um erro ao realizar o depósito");
        })
        }else if (valor == 0){
            alert ("Por favor selecione um valor maior que zero para depósitos, e um valor menor que zero para saques");
        }else{
            axios.put(`http://localhost:5103/api/contas/depositar/${id}`, quantia)
            .then(response => {
            console.log(response);
                alert("Saque executado com sucesso.");
            })
            .catch( error => {
              alert("Ocorreu um erro ao realizar o saque");
            })
        }
        
    }

    return (
        <div className='cad'>
            <h1>Transações</h1>
            <form onSubmit={salvar}>

                <div>
                    <label htmlFor="id">Id do usuário</label>
                    <input
                        onChange={(e: any) => setId(e.target.value)}
                        value={id}
                        type="text"
                        id="id"
                        placeholder="Digite o id do usuário realizando a transação"
                        required/>
                </div>
                
                <div>
                    <label htmlFor="valor">Valor da transação</label>
                    <input
                        onChange={(e: any) => setValor(e.target.value)}
                        value={valor}
                        type="number"
                        id="valor"
                        step="0.01"
                        required/>
                </div>
                
                <button type="submit">
                    Salvar
                </button>
            </form>
        </div>
    );

}

export default Transacoes;