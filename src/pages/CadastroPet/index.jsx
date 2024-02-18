
import * as S from './styles'
import { useState } from 'react';
import estados from '../Cadastro/estados.json'
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import imgPerfil from '../../imagens/pet-avatar 1.png'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





const CadastroPet = () => {
    const navigate = useNavigate();

    const { userId } = useParams();
    const [arquivosSelecionados, setArquivosSelecionados] = useState([]);
    const [previewImagem, setPreviewImagem] = useState(null);
    const [errorCadastroPet, setErrorCadastroPet] = useState('');
    const [successCadastroPet, setSuccessCadastroPet] = useState(false);

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
        casa_Com_Quintal: false,
        apartamento: false,
    });
    const [sociavelCom, setSociavelCom] = useState({
        gatos: false,
        desconhecidos: false,
        cachorros: false,
        criancas: false,
    });

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

    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');


    const handleEstadoChange = (event) => {
        setEstadoSelecionado(event.target.value);
        setCidadeSelecionada(''); // Resetar a cidade ao trocar de estado
    };

    const handleCidadeChange = (event) => {
        setCidadeSelecionada(event.target.value);
    };

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

    const handleCadastroPet = async () => {

        if (successCadastroPet === false) {

            if (!validateCadastroPet()) {
                return;
            }
            if (!arquivosSelecionados || arquivosSelecionados.length === 0) {
                console.error('Nenhuma foto selecionada.');
                return;
            }
            const userId = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData'))._id : '';
            console.log('userId enviado ao backend:', userId);

            const formData = new FormData();

         
            arquivosSelecionados.forEach((arquivo, index) => {
            formData.append(`image`, arquivo);
        });

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
            estado: estadoSelecionado,
            cidade: cidadeSelecionada,
            userId,
        };

        formData.append('json', JSON.stringify(petData));
            try {
                const response = await axios.post(`http://localhost:3001/cadastroPet/${userId}`, formData);
                if (response.status === 201 && response.data && response.data.pet) {
                    setSuccessCadastroPet(true);
                    navigate(`/perfilPet/${response.data.pet._id}`);

                    // Lógica adicional após o cadastro bem-sucedido
                } else {
                    setSuccessCadastroPet(false);
                    console.error('Error response data:', response.data || 'No response data available');
                    setErrorCadastroPet(response.data.error || 'Erro ao cadastrar pet');
                }
            } catch (error) {
                console.error('Erro ao cadastrar pet:', error);
                console.error('Error response data:', error.response.data || 'No response data available');
                setErrorCadastroPet('Erro ao cadastrar pet');
            }

        }
    };




    return (
        <S.cadastroPet>
            <S.areaCadastro>
                <Header />
                <S.areaMenu >
                    <p id='home'>Home</p>
                    <p>/ Cadastre um novo pet para adoção</p>
                </S.areaMenu>
                <S.area>
                    <p id='cabecalho'> Cadastre um novo pet para adoção</p>
                    <div className='areaForm'>
                        <label>Nome do pet:*</label>
                        <input placeholder='' onChange={(e) => setNomePet(e.target.value)} />
                    </div>
                    <div className='areaForm'>
                        <div className='areaField'>
                            <label>Espécie:*</label>
                            <select className='select' onChange={(e) => setEspecie(e.target.value)} >
                                <option value="">Selecione uma espécie</option>
                                <option value="cachorro">Cachorro</option>
                                <option value="gato">Gato</option>
                            </select>
                        </div>
                        <div className='areaField'>
                            <label>Sexo:*</label>
                            <select className='select' onChange={(e) => setSexo(e.target.value)}>
                                <option value="">Selecione o sexo</option>
                                <option value="Macho">Macho</option>
                                <option value="Fêmea">Fêmea</option>
                            </select>

                        </div>
                    </div>
                    <div className='areaForm'>
                        <div className='areaField'>
                            <label>Idade:*</label>
                            <input placeholder='' onChange={(e) => setIdade(e.target.value)} />
                        </div>
                        <div className='areaField'>
                            <label>Porte:*</label>
                            <select className='select' onChange={(e) => setPorte(e.target.value)}>
                                <option value="">Selecione o porte</option>
                                <option value="Porte pequeno">Porte pequeno</option>
                                <option value="Porte médio">Porte médio</option>
                                <option value="Porte grande">Porte grande</option>
                            </select>

                        </div>

                    </div>
                    <div className='areaForm'>
                        <label>Raça:</label>
                        <input placeholder='' onChange={(e) => setRaca(e.target.value)} />

                    </div>
                    <div className='areaForm'>
                        <div className='areaField'>
                            <label>Selecione seu estado:</label>
                            <select className='select' value={estadoSelecionado} onChange={handleEstadoChange}>
                                <option value="">Todos os Estados</option>
                                {estados.estados.map((estado) => (
                                    <option key={estado.sigla} value={estado.sigla}>
                                        {estado.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='areaField'>
                            <label>Selecione sua cidade:</label>
                            <select className='select' value={cidadeSelecionada} onChange={handleCidadeChange}>
                                <option value="">Todas as Cidades</option>
                                {estadoSelecionado
                                    ? estados.estados
                                        .find((estado) => estado.sigla === estadoSelecionado)
                                        .cidades.map((cidade) => (
                                            <option key={cidade} value={cidade}>
                                                {cidade}
                                            </option>
                                        ))
                                    : estados.estados
                                        .flatMap((estado) => estado.cidades)
                                        .map((cidade) => (
                                            <option key={cidade} value={cidade}>
                                                {cidade}
                                            </option>
                                        ))}
                            </select>
                        </div>
                    </div>
                    <div className='areaForm'>
                        <label >Sobre o pet (escreva o máximo de informações possível, incluindo o histórico de saúde)</label>
                        <textarea cols="140" rows="8" onChange={(e) => setSobrePet(e.target.value)}></textarea>

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
                                    <label htmlFor={key}>{key === 'criancas' ? 'Crianças' : key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                </div>
                            ))}
                        </div>
                    </div>

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