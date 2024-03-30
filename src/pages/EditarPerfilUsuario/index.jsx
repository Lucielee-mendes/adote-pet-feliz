import * as S from './styles';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import imgPerfil from '../../imagens/download (2) 1.png'

const EditarPerfil = () => {

    const history = useNavigate();
    const { userId } = useParams();

    const [nome, setNome] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [telefone, setTelefone] = useState('');
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');
    const [possuiCasaTelada, setPossuiCasaTelada] = useState(false);
    const [possuiDisponibilidadeCastrar, setPossuiDisponibilidadeCastrar] = useState(false);
    const [possuiDisponibilidadeVacinar, setPossuiDisponibilidadeVacinar] = useState(false);
    const [sobreVoce, setSobreVoce] = useState('');
    const [error, setError] = useState('');
    const [fotoPrincipal, setFotoPrincipal] = useState(null);
    const [previewImagem, setPreviewImagem] = useState(null);
    const [estados, setEstados] = useState([])
    const [cidade, setCidade] = useState([])

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
                setCidade(cities)
            } catch (error) {
                console.error('Erro ao buscar cidades:', error);
                return [];
            }
        };
        fetchStates();

        estadoSelecionado && fetchCitiesByState(estadoSelecionado)
    }, [estadoSelecionado])

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/perfilUsuario/${userId}`);
                const perfil = response.data;
                setNome(perfil.nome || '');
                setWhatsapp(perfil.whatsapp || '');
                setTelefone(perfil.telefone || '');
                setEstadoSelecionado(perfil.estado || '');
                setCidadeSelecionada(perfil.cidade || '');
                setPossuiCasaTelada(perfil.possuiCasaTelada || false);
                setPossuiDisponibilidadeCastrar(perfil.possuiDisponibilidadeCastrar || false);
                setPossuiDisponibilidadeVacinar(perfil.possuiDisponibilidadeVacinar || false);
                setSobreVoce(perfil.sobreVoce || '');
                setFotoPrincipal(perfil.fotoPrincipal || null);

                if (perfil.fotoPrincipal) {
                    setPreviewImagem(perfil.fotoPrincipal);
                } else {
                    setPreviewImagem(imgPerfil);
                }
            } catch (error) {
                console.error('Erro ao obter perfil:', error);
            }
        };

        fetchPerfil();
    }, [userId]);

    const handleEstadoChange = (event) => {
        setEstadoSelecionado(event.target.value);
        setCidadeSelecionada(''); // Resetar a cidade ao trocar de estado
    };

    const handleCidadeChange = (event) => {
        setCidadeSelecionada(event.target.value);
    };
    const handleCheckboxChange = (value) => {
        setPossuiCasaTelada(value);
    };

    const handleCheckboxChangeCastrar = () => {
        setPossuiDisponibilidadeCastrar(!possuiDisponibilidadeCastrar);
    };

    const handleCheckboxChangeVacinar = () => {
        setPossuiDisponibilidadeVacinar(!possuiDisponibilidadeVacinar);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFotoPrincipal(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImagem(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setPreviewImagem(imgPerfil);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

      
        const formData = {
            nome,
            whatsapp,
            telefone,
            estado: estadoSelecionado,
            cidade: cidadeSelecionada,
            possuiCasaTelada,
            possuiDisponibilidadeCastrar,
            possuiDisponibilidadeVacinar,
            sobreVoce,
            fotoPrincipal,
        };



        try {
            const response = await axios.put(`http://localhost:3001/editarPerfil/${userId}`, formData);
            history.push(`/perfilUsuario/${userId}`);
        } catch (error) {
            console.error('Erro ao editar perfil:', error);
            setError('Erro ao editar perfil. Por favor, tente novamente.');
        }
    };

    return (
        <S.editarPerfil>
            <S.areaPerfil>
                <Header />
                <S.areaMenu >
                    <p id='home'>Home</p>
                    <p>/ Meu perfil</p>
                    <p>/ Editar perfil</p>
                </S.areaMenu>
                <S.area>
                    <p id='cabecalho'> Editar perfil</p>
                    {error && <h2>{error}</h2>}
                    <div className='areaForm'>
                        <label>Nome:*</label>
                        <input placeholder='' value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className='areaForm'>
                        <div className='areaField'>
                            <label>WhatsApp*</label>
                            <input placeholder='' value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                        </div>
                        <div className='areaField'>
                            <label>Telefone:*</label>
                            <input placeholder='' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </div>
                    </div>
                    <div className='areaForm'>
                        <div className='areaField'>
                        <label>Selecione seu estado:</label>
                            <select value={estadoSelecionado} onChange={handleEstadoChange}>
                                <option value="">Todos os Estados</option>
                                {estados?.map((estado) => (
                                    <option key={estado.sigla} value={estado.id}>
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
                        <label>
                            Possui casa telada?
                        </label>

                        <div className='checkboxItem'>
                            <input
                                type="checkbox"
                                id="simCheckbox"
                                checked={possuiCasaTelada}
                                onChange={() => handleCheckboxChange(true)}
                            />
                            <label htmlFor="simCheckbox">Sim</label>

                            <input
                                type="checkbox"
                                id="naoCheckbox"
                                checked={!possuiCasaTelada}
                                onChange={() => handleCheckboxChange(false)}
                            />
                            <label htmlFor="naoCheckbox">Não</label>
                        </div>
                    </div>
                    <div>
                        <div className='areaForm'>
                            <label>
                                Possui disponibilidade para castrar e/ou vacinar?
                            </label>

                            <div className='checkboxItem'>
                                <input
                                    type="checkbox"
                                    id="castrarCheckbox"
                                    checked={possuiDisponibilidadeCastrar}
                                    onChange={handleCheckboxChangeCastrar}
                                />
                                <label htmlFor="castrarCheckbox">Castrar</label>

                                <input
                                    type="checkbox"
                                    id="vacinarCheckbox"
                                    checked={possuiDisponibilidadeVacinar}
                                    onChange={handleCheckboxChangeVacinar}
                                />
                                <label htmlFor="vacinarCheckbox">Vacinar</label>
                            </div>
                        </div>
                    </div>
                    <div className='areaForm'>
                        <label>Sobre Você:</label>
                        <textarea  cols="140" rows="8" value={sobreVoce} onChange={(e) => setSobreVoce(e.target.value)} />
                    </div>
                    <div className='areaForm' id='divIMG'>
                        <label>Foto principal:</label>
                        <input type='file' name="file" onChange={handleFileChange} />
                        <div className='previewImage'>
                            <img className='imgPerfil' src={previewImagem ? previewImagem : imgPerfil} alt="Perfil" />
                        </div>
                    </div>

                    <div className='buttonarea'>
                        <button onClick={handleSubmit}>Salvar</button>
                    </div>

                </S.area>
                <Footer />

            </S.areaPerfil>

        </S.editarPerfil>


    );
}


export default EditarPerfil;