
import * as S from './styles'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import imgPerfil from '../../imagens/pet-avatar 1.png'
import { Link } from 'react-router-dom';
import getBackendUrl from '../../utils/backendConfig';



const CadastroPet = () => {

    // Estados locais para armazenar dados do formulário
    const [arquivosSelecionados, setArquivosSelecionados] = useState([]);
    const [previewImagem, setPreviewImagem] = useState(null);
    const [errorCadastroPet, setErrorCadastroPet] = useState('');
    const [successCadastroPet, setSuccessCadastroPet] = useState(false);
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');
    const [estados, setEstados] = useState([])
    const [cidade, setCidade] = useState([])
    const [nomePet, setNomePet] = useState('');
    const [especie, setEspecie] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade, setIdade] = useState('');
    const [porte, setPorte] = useState('');
    const [raca, setRaca] = useState('');
    const [sobrePet, setSobrePet] = useState('');


    const [cuidadosVeterinarios, setCuidadosVeterinarios] = useState({
        castrado: false,
        vacinado: false,
        vermifugado: false,
        cuidados_Especiais: false,
    });
    const [temperamento, setTemperamento] = useState({
        docil: false,
        agressivo: false,
        calmo: false,
        brincalhao: false,
        sociavel: false,
        arisco: false,
        independente: false,
        carente: false,
    });

    const [viveBem, setViveBem] = useState({
        Casa_Com_Quintal: false,
        apartamento: false,
    });
    const [sociavelCom, setSociavelCom] = useState({
        gatos: false,
        desconhecidos: false,
        cachorros: false,
        crianças: false,
    });

     // Função para buscar estados da API do IBGE ao carregar o componente
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

        // Função para buscar cidades de acordo com o estado selecionado
        const fetchCitiesByState = async (stateId) => {
            try {
                const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar cidades');
                }
                const cities = await response.json();
                setCidade(cities)
            } catch (error) {
                console.error('Erro ao buscar cidades:', error);
                return [];
            }
        };
        fetchStates(); // Chamada da função para buscar estados ao carregar o componente

        const item =JSON.parse(estadoSelecionado? estadoSelecionado : null)
        
        item  && fetchCitiesByState(item.id)


    }, [estadoSelecionado])

    // Função para lidar com a seleção de arquivos de imagem do pet
    const handleArquivoChange = (e) => {
        const novosArquivos = e.target.files;

        if (novosArquivos.length > 0) {
            const novosArquivosArray = Array.from(novosArquivos);

            setArquivosSelecionados([...arquivosSelecionados, ...novosArquivosArray]);

            const leitor = new FileReader();

            leitor.onloadend = () => {
                setPreviewImagem(leitor.result);
            };

            leitor.readAsDataURL(novosArquivosArray[0]);
        }
    };

    // Função para lidar com a mudança de checkbox em uma categoria específica
    const handleCheckboxChange = (category, key) => {
        if (category === 'cuidadosVeterinarios') {
            setCuidadosVeterinarios((prev) => ({ ...prev, [key]: !prev[key] }));
        } else if (category === 'temperamento') {
            setTemperamento((prev) => ({ ...prev, [key]: !prev[key] }));
        } else if (category === 'viveBem') {
            setViveBem((prev) => ({ ...prev, [key]: !prev[key] }));
        } else if (category === 'sociavelCom') {
            setSociavelCom((prev) => ({ ...prev, [key]: !prev[key] }));
        }
    };



    // Função para lidar com a mudança de estado selecionado no formulário
    const handleEstadoChange = (event) => {
        setEstadoSelecionado(event.target.value);
        setCidadeSelecionada(''); // Resetar a cidade ao trocar de estado
    };

    // Função para lidar com a mudança de cidade selecionada no formulário
    const handleCidadeChange = (event) => {
        setCidadeSelecionada(event.target.value);
    };

    // Função para validar os dados do formulário de cadastro do pet
    const validateCadastroPet = () => {
        if (
            nomePet.trim() === '' ||
            especie.trim() === '' ||
            sexo.trim() === '' ||
            idade.trim() === '' ||
            porte.trim() === '' ||
            estadoSelecionado.trim() === ''
        ) {
            setErrorCadastroPet('Preencha todos os campos obrigatórios do pet.');
            return false;
        }

        setErrorCadastroPet('');
        return true;
    };

    // Função para limpar os dados do formulário após o cadastro ser realizado com sucesso
    const clearData = ()=>{
        setNomePet('')
        setEspecie('')
        setSexo('')
        setIdade('')
        setPorte('')
        setRaca('')
        setSobrePet('')
        setEstadoSelecionado('')
        setCidadeSelecionada('')
        setArquivosSelecionados([])
        setCuidadosVeterinarios({
            castrado: false,
            vacinado: false,
            vermifugado: false,
            cuidados_Especiais: false,
        })
        setTemperamento({
            docil: false,
            agressivo: false,
            calmo: false,
            brincalhao: false,
            sociavel: false,
            arisco: false,
            independente: false,
            carente: false,
        })
        setViveBem({
            Casa_Com_Quintal: false,
            apartamento: false,
        })
        setSociavelCom({
            gatos: false,
            desconhecidos: false,
            cachorros: false,
            crianças: false,
        })

    }

    // Função para lidar com o cadastro do pet
    const handleCadastroPet = async () => {

        if (successCadastroPet === false) {
            // Validar os dados do formulário antes de prosseguir com o cadastro
            if (!validateCadastroPet()) {
                return;
            }
            // Verificar se pelo menos uma imagem foi selecionada para o pet
            if (!arquivosSelecionados || arquivosSelecionados.length === 0) {
                console.error('Nenhuma foto selecionada.');
                return;
            }

        }
            // Obter o ID do usuário logado, se existir
            const userId = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData'))._id : '';

             // Criar um objeto FormData para enviar os dados do pet e as imagens ao servidor
            const formData = new FormData();
            arquivosSelecionados.forEach((arquivo, index) => {
            formData.append(`image`, arquivo);
        });

        // Obter o objeto de estado selecionado para enviar apenas a sigla do estado no corpo da requisição
        const item =JSON.parse(estadoSelecionado? estadoSelecionado : null)
        const petData = {
            nomePet,
            especie,
            sexo,
            idade,
            porte,
            raca,
            sobrePet,
            cuidadosVeterinarios,
            temperamento,
            viveBem,
            sociavelCom,
            estado: item?.sigla,
            cidade: cidadeSelecionada,
            userId,
        };

        formData.append('json', JSON.stringify(petData)); // Adicionar os dados do pet ao objeto FormData
            try {
                 // Enviar os dados do pet para o servidor
                const response = await axios.post(`${getBackendUrl()}/cadastroPet/${userId}`, formData);
                if (response.status === 201 ) {
                    // Limpar os dados do formulário e exibir mensagem de sucesso após o cadastro ser realizado com sucesso
                    clearData()
                    setSuccessCadastroPet(true)
                    setTimeout(()=>{
                        setSuccessCadastroPet(false);
                    }, 2000)
              
                } else {
                    // Exibir mensagem de erro caso ocorra algum problema durante o cadastro
                    setSuccessCadastroPet(false);
                    console.error('Error response data:', response.data || 'No response data available');
                    setErrorCadastroPet(response.data.error || 'Erro ao cadastrar pet');
                }
            } catch (error) {
                console.error('Erro ao cadastrar pet:', error);
                console.error('Error response data:', error.response.data || 'No response data available');
                setErrorCadastroPet('Erro ao cadastrar pet');
            }

        
    };




    return (
        <S.cadastroPet>
            <S.areaCadastro>
                <Header />
                <S.areaMenu >
                <Link to="/"> <p id='home'>Home</p></Link>                     
                <p>/ Quero doar</p>
                </S.areaMenu>
                <S.area>
                    <p id='cabecalho'> Cadastre um novo pet para adoção</p>
                    {errorCadastroPet && <h3>{errorCadastroPet}</h3>}
                    <div className='areaForm'>
                        <label>Nome do pet:*</label>
                        <input placeholder='' value={nomePet} onChange={(e) => setNomePet(e.target.value)} />
                    </div>
                    <div className='areaForm'>
                        <div className='areaField'>
                            <label>Espécie:*</label>
                            <select className='select' value={especie} onChange={(e) => setEspecie(e.target.value)} >
                                <option value="">Selecione uma espécie</option>
                                <option value="cachorro">Cachorro</option>
                                <option value="gato">Gato</option>
                            </select>
                        </div>
                        <div className='areaField'>
                            <label>Sexo:*</label>
                            <select className='select' value={sexo} onChange={(e) => setSexo(e.target.value)}>
                                <option value="">Selecione o sexo</option>
                                <option value="Macho">Macho</option>
                                <option value="Fêmea">Fêmea</option>
                            </select>

                        </div>
                    </div>
                    <div className='areaForm'>
                        <div className='areaField'>
                            <label>Idade:*</label>
                            <input placeholder='' value={idade} onChange={(e) => setIdade(e.target.value)} />
                        </div>
                        <div className='areaField'>
                            <label>Porte:*</label>
                            <select className='select' value={porte} onChange={(e) => setPorte(e.target.value)}>
                                <option value="">Selecione o porte</option>
                                <option value="Porte pequeno">Porte pequeno</option>
                                <option value="Porte médio">Porte médio</option>
                                <option value="Porte grande">Porte grande</option>
                            </select>

                        </div>

                    </div>
                    <div className='areaForm'>
                        <label>Raça:</label>
                        <input placeholder=''  value={raca} onChange={(e) => setRaca(e.target.value)} />

                    </div>
                    <div className='areaForm'>
                        <div className='areaField'>
                        <label>Selecione seu estado:</label>
                            <select value={estadoSelecionado} onChange={handleEstadoChange}>
                                <option value="">Todos os Estados</option>
                                {estados?.map((estado) => (
                                            <option key={estado.sigla} value={JSON.stringify(estado)}>

                                        {estado.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='areaField'>
                            <label>Selecione sua cidade:</label>
                            <select value={cidadeSelecionada} onChange={handleCidadeChange}>
                                <option value="">Todas as Cidades</option>
                                {cidade?.map((city) => (
                                    <option key={city.nome} value={city.nome}>
                                        {city.nome}
                                    </option>))}

                            </select>
                        </div>
                    </div>
                    <div className='areaForm'>
                        <label >Sobre o pet (escreva o máximo de informações possível, incluindo o histórico de saúde)</label>
                        <textarea value={sobrePet}  rows="8" onChange={(e) => setSobrePet(e.target.value)}></textarea>

                    </div>
                    <div className='areaForm' id='divIMG'>
                        <label>Fotos pet:</label>
                        <input type='file' name="image" multiple onChange={handleArquivoChange} />
                        <div className='previewImage'>
                            {arquivosSelecionados.length > 0
                                ? arquivosSelecionados.map((arquivo, index) => (
                                    <img key={index} className='imgPerfil' src={URL.createObjectURL(arquivo)} alt={`Perfil ${index + 1}`} />
                                ))
                                : <img className='imgPerfil' src={imgPerfil} alt="Perfil Padrão" />
                            }
                        </div>
                    </div>
                    <div className='areaForm' id='divCheckbox'>
                        <label>Cuidados Veterinários:</label>
                        <div className='checkboxContainer'>
                            {Object.entries(cuidadosVeterinarios).map(([key, value]) => (
                                <div key={key} className='checkboxItem'>
                                    <input
                                        type='checkbox'
                                        id={key}
                                        checked={value}
                                        onChange={() => handleCheckboxChange('cuidadosVeterinarios', key)}
                                    />
                                    <label htmlFor={key}>{key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.replace(/_/g, ' ').slice(1)}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='areaForm' id='divCheckbox'>
                        <label>Temperamento:</label>
                        <div className='checkboxContainer'>
                            {Object.entries(temperamento).map(([key, value]) => (
                                <div key={key} className='checkboxItem'>
                                    <input
                                        type='checkbox'
                                        id={key}
                                        checked={value}
                                        onChange={() => handleCheckboxChange('temperamento', key)}
                                    />
                                    <label htmlFor={key}>{key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.replace(/_/g, ' ').slice(1)}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='areaForm' id='divCheckbox'>
                        <label>Vive Bem com:</label>
                        <div className='checkboxContainer'>
                            {Object.entries(viveBem).map(([key, value]) => (
                                <div key={key} className='checkboxItem'>
                                    <input
                                        type='checkbox'
                                        id={key}
                                        checked={value}
                                        onChange={() => handleCheckboxChange('viveBem', key)}
                                    />
                                    <label htmlFor={key}>{key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.replace(/_/g, ' ').slice(1)}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='areaForm' id='divCheckbox'>
                        <label>Sociável com:</label>
                        <div className='checkboxContainer'>
                            {Object.entries(sociavelCom).map(([key, value]) => (
                                <div key={key} className='checkboxItem'>
                                    <input
                                        type='checkbox'
                                        id={key}
                                        checked={value}
                                        onChange={() => handleCheckboxChange('sociavelCom', key)}
                                    />
                                    <label htmlFor={key}>{key === 'crianças' ? 'Crianças' : key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>{successCadastroPet && <p style={{color:'green', fontWeight:'bold'}}>Cadastro Realizado com sucesso!!</p>}</div>
                    <div className='buttonarea'>
                        <button onClick={handleCadastroPet}>Salvar</button>
                    </div>


                </S.area>

                <Footer />

            </S.areaCadastro>
        </S.cadastroPet>




    );
};


export default CadastroPet