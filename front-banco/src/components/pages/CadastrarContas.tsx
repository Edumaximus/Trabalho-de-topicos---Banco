import axios from 'axios';
import { useEffect, useState } from 'react';
import './CadastrarContas.css';
import { useParams } from 'react-router-dom';
import { Tipo } from '../../models/Tipo';

function CadastrarContas() {
    const {id} = useParams();
    const [usuario, setUsuario] = useState("");
    const [saldo, setSaldo] = useState(0);
    const [tipos, setTipo] = useState<Tipo[]>([]);
    const [tipoId, setTipoId] = useState<any>();

    useEffect(() => {    

      carregarTipos();
    
    }, []);

    function salvar(e: any) {
        e.preventDefault();
        const conta = {
            usuario: usuario,
            tipo:{
                id: tipoId
            }
        };
        cadastrar(conta);
    }

    function carregarTipos() {
        axios.get("http://localhost:5103/api/tipos")
        .then( response =>{
            setTipo(response.data);
            setTipoId(response.data[0]?.id);
        })
        .catch( () => {
            alert("Erro ao carregar os tipos");
        });
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
                    <label htmlFor="tipo">Tipo</label>
                    <select id="tipo"
                        onChange={(e: any) => setTipoId(e.target.value)}
                        value={tipoId} >
                        {tipos.map( (item) => (
                            <option key={item.id} value={item.id} >
                                {item.nome}
                            </option>
                        ))}
                    </select>
                </div>
               

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default CadastrarContas;
