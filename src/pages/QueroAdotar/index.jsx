import * as S from './styles'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const QueroAdotar = () => {
    const [filterData, setFilterData] = useState([])
    const [petData, setPetData] = useState([]);

    const [search, setSearch] = useState("")
    const [especie, setEspecie] = useState("")
    const [sexo, setSexo] = useState("")
    const [porte, setPorte] = useState("")
    const [estadoFilter, setEstado] = useState("")
    const [castrado, setCastrado] = useState(null)
    const [cidade, setCidadeFilter] = useState('')
    const [estados, setEstados] = useState([])
    const [cidades, setCidades] = useState([])


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
                if (!response.ok) {
                    throw new Error('Erro ao buscar estados');
                }
                const states = await response.json();
                setEstados(states)
            } catch (error) {
                console.error('Erro ao buscar estados:', error);
                return [];
            }
        };

        const fetchCitiesByState = async (stateId) => {
            try {
                const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar cidades');
                }
                const cities = await response.json();
                setCidades(cities)
            } catch (error) {
                console.error('Erro ao buscar cidades:', error);
                return [];
            }
        };
        fetchStates();
        const itemEstado = JSON.parse(estadoFilter ? estadoFilter : null)


        itemEstado && fetchCitiesByState(itemEstado.id)
    }, [estadoFilter])



    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('http://localhost:3001/pets');
                setPetData(response.data);
                setFilterData(response.data)
            } catch (error) {
                console.error('Erro ao buscar pets:', error);
            }
        };
        fetchPets();
    }, []);


    function filterPets() {
        return petData.filter((item) => {

            const itemEstado = JSON.parse(estadoFilter ? estadoFilter : null)

            const nomeMatch = search === "" || item.nomePet.toLowerCase().includes(search.toLowerCase());
            const especieMatch = especie === '' || especie === 'todos' || item.especie.toLowerCase() === especie.toLowerCase();
            const sexoMatch = sexo === '' || sexo === 'todos' || item.sexo.toLowerCase() === sexo.toLowerCase();
            const porteMatch = porte === '' || porte === 'todos' || item.porte.toLowerCase() === porte.toLowerCase();
            const estadoMatch = itemEstado === '' || estadoFilter === 'todos' || item.estado.toLowerCase() === itemEstado.sigla.toLowerCase();
            const castradoMatch = castrado === null || item.cuidadosVeterinarios?.castrado.toString() === castrado.toString();
            const cidadeMatch = cidade === '' || cidade === 'todos' || item.cidade.toLowerCase() === cidade.toLowerCase();

            return nomeMatch && especieMatch && sexoMatch && porteMatch && estadoMatch && castradoMatch && cidadeMatch;
        });
    }



    const handleSearchClick = () => {
        const filteredData = filterPets();
        setFilterData(filteredData);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <S.queroAdotar>
            <S.areaQueroAdotar>
                <Header />
                <S.areaMenu>
                    <Link to="/"> <p id='home'>Home</p></Link>
                    <p>/ Quero adotar</p>
                </S.areaMenu>
                <div className='areaBody'>
                    <div className='filtroPets'>
                        <p id='tituloFiltro'>Encontre seu novo amigo!</p>
                        <p>Se você está pronto para adotar um novo companheiro peludo, você está no lugar certo! Explore nossas listagens de cães e gatos que aguardam ansiosamente por um lar amoroso.</p>
                    </div>

                    <S.Filter>
                        <div>
                            <select value={especie} onChange={(e) => setEspecie(e.target.value)}>
                                <option value={"todos"}>Todas as especies</option>
                                <option value={'gato'}>Gato</option>
                                <option value={'cachorro'}>Cachorro</option>
                            </select>
                            <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                                <option value={'todos'}>Todas os sexos</option>
                                <option value={'Fêmea'}>Femea</option>
                                <option value={"Macho"}>Macho</option>


                            </select>
                            <select value={porte} onChange={(e) => setPorte(e.target.value)}>
                                <option value={'todos'}>Todas os portes</option>
                                <option value="Porte pequeno">Porte pequeno</option>
                                <option value="Porte médio">Porte médio</option>
                                <option value="Porte grande">Porte grande</option>
                            </select>

                            <select value={estadoFilter} onChange={(e) => setEstado(e.target.value)}>
                                <option value={'todos'}>Todas os estados</option>
                                {estados.map((es) => (
                                    <option key={es.sigla} value={JSON.stringify(es)}>
                                        {es.nome}
                                    </option>
                                ))}
                            </select>


                            <select className='select' value={cidade} onChange={(e) => setCidadeFilter(e.target.value)}>
                                <option value="todos">Todas as Cidades</option>
                                {cidades.map((city) => (
                                    <option key={city.nome} value={city.nome}>
                                        {city.nome}
                                    </option>
                                ))}
                            </select>

                            <select value={castrado} onChange={(e) => setCastrado(e.target.value)}>
                                <option value={null}>Castrados</option>
                                <option value={true}>Sim</option>
                                <option value={false}>Não</option>

                            </select>
                            <input placeholder='Nome do animal' value={search} onChange={(e) => setSearch(e.target.value)} />

                            <button
                                onClick={() => handleSearchClick()}
                            >Buscar</button>
                        </div>

                    </S.Filter>


                    <S.List>
                        {currentItems.map((val, key) => (
                            <Link id="petLink" key={key} to={`/perfilPet/${val._id}`}>

                                <div className='card'>
                                    <img src={`http://localhost:3001/getImagem/${val?.fotos[0]?.file}`} alt={val.nomePet} />
                                    <div className='card-info'>
                                        <p className='name'>{val.nomePet}</p>
                                        <div className='groupInfos'>
                                            <p>{val.sexo} - </p>
                                            <p>{val.idade}</p>
                                        </div>
                                        <div className='groupInfos'>
                                            <p>{val.cidade} ,</p>
                                            <p>{val.estado}</p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                        ))}


                                <div className='pagination'>
                                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                                        Anterior
                                    </button>
                                    <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= filterData.length}>
                                        Próximo
                                    </button>
                                </div>

                            </S.List>

                </div>


                <Footer />
            </S.areaQueroAdotar>
        </S.queroAdotar>
    )

};


export default QueroAdotar