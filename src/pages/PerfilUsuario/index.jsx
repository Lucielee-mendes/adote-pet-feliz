import * as S from './styles'
import imgPerfil from '../../imagens/download (2) 1.png'
import imgContato from '../../imagens/download (4) 1.png'
import imgExcluir from '../../imagens/excluir.png'
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import getBackendUrl from '../../utils/backendConfig';



const PerfilUsuario = () => {

    const navigate = useNavigate();

    // Utiliza o hook useParams para obter o ID do usuário da URL
    const { userId } = useParams();
    
    // Definição dos estados locais para armazenar os dados
    const [userData, setUserData] = useState(null);
    const [isOwnProfile, setIsOwnProfile] = useState(false);
    const [image, setImage] = useState('')
    const [petData, setPetData] = useState([]);

    // useEffect para buscar os dados do usuário com base no ID fornecido na URL
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${getBackendUrl()}/perfilUsuario/${userId}`);

                const storedUserData = JSON.parse(localStorage.getItem('userData'));

                setUserData(response.data);

                // Verifica se o usuário logado é o proprietário do perfil
                if (storedUserData && response.data._id === storedUserData._id || storedUserData._id === userId) {
                    setIsOwnProfile(true);
                } else {
                    setIsOwnProfile(false);
                }

            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
            }
        };

        fetchData()
    }, [userId]);

    // useEffect para buscar a imagem principal do usuário
    useEffect(() => {
        const getImage = async () => {
            const response = await axios.get(`${getBackendUrl()}/getImagem/${userData?.fotoPrincipal}`);
            setImage(response.config.url)
        }
        userData && getImage()
    }, [userData])

    // Função para lidar com o logout do usuário
    const handleLogout = () => {
        localStorage.removeItem('userData'); // Limpa os dados de usuário armazenados no localStorage
        navigate('/'); // Redireciona para a página inicial após o logout
    };

 // Função para lidar com a exclusão da conta do usuário
    const handleDeleteAccount = async () => {
        try {
            const response = await axios.delete(`${getBackendUrl()}/excluirConta/${userId}`);
            if (response.status === 200) {
                alert('Conta excluída com sucesso');
                handleLogout(); // Redireciona para a página de login após a exclusão da conta
            }
        } catch (error) {
            console.error('Erro ao excluir conta:', error);
            alert('Erro ao excluir conta. Por favor, tente novamente mais tarde.');
        }
    };

    // Função para lidar com a exclusão de um pet
    const handleDeletePet = async (petId) => {
        try {
            const response = await axios.delete(`${getBackendUrl()}/perfilPet/${petId}`);
            if (response.status === 200) {
                alert('Pet excluído com sucesso.');
                // Atualizar a lista de pets após a exclusão bem-sucedida
                const updatedPetData = petData.filter(pet => pet._id !== petId);
                setPetData(updatedPetData);
                window.location.reload();// Recarrega a página após a exclusão
            }
        } catch (error) {
            console.error('Erro ao excluir cadastro do pet:', error);
            alert('Erro ao excluir cadastro do pet. Por favor, tente novamente mais tarde.');
        }
    };
    
    // useEffect para buscar os pets divulgados pelo usuário
    useEffect(() => {
        const fetchPets = async (userId) => {
            try {
                let url = `${getBackendUrl()}/pets`;
                if (userId) {
                    url += `?userId=${userId}`;
                }
                const response = await axios.get(url);
                setPetData(response.data);
            } catch (error) {
                console.error('Erro ao buscar pets:', error);
            }
        };
        fetchPets(userId);
    }, [userId]);

    return (
        <S.perfil>
            <S.areaPerfil>
                <Header />
                <S.areaMenu >
                    <Link to="/"> <p id='home'>Home</p></Link>
                    <p>/ Meu Perfil</p>
                </S.areaMenu>
                <S.area>
                    <S.secaoPerfil>
                        <img className='imgPerfil' src={image || imgPerfil} alt="Perfil" />
                        <div className='informacoes'>
                            <p id='nome'>{userData?.nome || userData?.userData?.nome || 'Nome Usuario'}</p>
                            <p id='cidade'>{`${userData?.cidade || userData?.userData?.cidade || 'Cidade'}, ${userData?.estado || userData?.userData?.estado || 'Estado'}`}</p>
                            <div className='imgContato'>
                                <img src={imgContato} alt="Contato" />
                            </div>
                            <div className='contato'>
                                <p>Contatos</p>
                                <p>E-mail: {userData?.email || userData?.userData?.email || 'N/A'}</p>
                                <p>WhatsApp: {userData?.whatsApp || userData?.userData?.whatsApp || 'N/A'}</p>
                            </div>
                            {isOwnProfile && (
                                <>
                                    <div className='botao1'>
                                        <button onClick={() => window.location.href = "/cadastroPet/:userId"}>Cadastrar novo pet</button>
                                    </div>
                                    <div className='botao2'>
                                        <button onClick={() => window.location.href = `/editarPerfil/${userId}`}  >Editar Perfil</button>
                                        <button onClick={() => window.location.href = "/esqueciSenha"}>Alterar Senha</button>
                                        <button onClick={handleLogout}>Sair</button>
                                        <button onClick={handleDeleteAccount}>Excluir Conta</button>
                                    </div>
                                </>
                            )}
                            {!isOwnProfile && (
                                <>
                                    <div className='infoAdicional'>
                                        <div className='infoLabel'>
                                            <p>Capacidade de Vacinação:</p>
                                            <span>{userData?.possuiDisponibilidadeVacinar || userData?.userData?.possuiDisponibilidadeVacinar ? 'Sim' : 'Não'}</span>
                                        </div>
                                        <div className='infoLabel'>
                                            <p>Capacidade de Castração:</p>
                                            <span>{userData?.possuiDisponibilidadeCastrar || userData?.userData?.possuiDisponibilidadeCastrar ? 'Sim' : 'Não'}</span>
                                        </div>
                                        <div className='infoLabel'>
                                            <p>Possui Casa Telada:</p>
                                            <span>{userData?.possuiCasaTelada || userData?.userData?.possuiCasaTelada ? 'Sim' : 'Não'}</span>
                                        </div>
                                        <div>
                                            <p>Sobre o usuário:</p>
                                            <textarea cols="30" rows="7" value={userData?.sobreVoce || userData?.userData?.sobreVoce || 'Não informado'} readOnly ></textarea>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                    </S.secaoPerfil>
                    <S.Divulgados>
                        <div className='pets'>
                            <p id='petsDivulgados'>Pets divulgados</p>
                            {petData && petData.length > 0 ? (
                                petData.map((pet) => (
                                    <div className='card'>
                                        <img src={`${getBackendUrl()}/getImagem/${pet.fotos[0].file}`} alt={pet._id}
                                            onClick={() => window.location.href = `http://localhost:3000/perfilPet/${pet._id}`} />
                                        <div className='card-info'>
                                            <p className='name'>{pet.nomePet}</p>
                                            <div className='groupInfos'>
                                                <p>{pet.sexo} - </p>
                                                <p>{pet.idade}</p>
                                            </div>
                                            <div className='groupInfos'>
                                                <p>{pet.cidade} ,</p>
                                                <p>{pet.estado}</p>
                                            </div>
                                            {isOwnProfile &&
                                                <a className='iconRemove' onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDeletePet(pet._id); }}> <img src={imgExcluir} /></a>
                                            }
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Nenhum pet cadastrado</p>
                            )}
                        </div>
                    </S.Divulgados>
                </S.area>

                <Footer />
            </S.areaPerfil>
        </S.perfil>
    );
};


export default PerfilUsuario