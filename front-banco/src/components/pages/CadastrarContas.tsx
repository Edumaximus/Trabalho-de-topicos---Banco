import axios from 'axios';
import { useState } from 'react';
import './CadastrarContas.css';
import { useParams } from 'react-router-dom';

function CadastrarContas() {
    const {id} = useParams();
    const [usuario, setUsuario] = useState("");
    const [saldo, setSaldo] = useState(0);
    /*const [categoriaId, setCategoriaId] = useState<any>();
    const [categorias, setCategorias] = useState<Categoria[]>([]);*/

    /*useEffect(() => {    

        carregarCategorias();
    
    }, []);*/

    function salvar(e: any) {
        e.preventDefault();
        const conta = {
            usuario: usuario,
            saldo: parseFloat(saldo.toString()), 
            /*categoriaId: categoriaId*/
        };
        cadastrar(conta);
    }

    /*function carregarCategorias() {
        axios.get("http://localhost:5291/api/categorias")
        .then( response =>{
            setCategorias(response.data);
            setCategoriaId(response.data[0]?.id);
        })
        .catch( () => {
            alert("Erro ao carregar as categorias");
        });
    }*/

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

                eu não lembrava como fazer comentário no html
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <select id="categoria"
                        onChange={(e: any) => setCategoriaId(e.target.value)}
                        value={categoriaId} >
                        {categorias.map( (item) => (
                            <option key={item.id} value={item.id} >
                                {item.nome}
                            </option>
                        ))}
                    </select>
                </div>
                comentário termina aqui

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default CadastrarContas;
