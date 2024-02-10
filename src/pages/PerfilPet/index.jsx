import * as S from './styles'
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import imgPerfil from '../../imagens/pet-avatar 1.png';
import imgLocal from '../../imagens/download (5).png';
import imgProprietario from '../../imagens/download (6).png';
import imgContato from '../../imagens/download (4).png'
import { useParams } from 'react-router-dom';
import axios from 'axios';



const PerfilPet = () => {
    const { petId } = useParams();
    const [petData, setPetData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/perfilPet/${petId}`);
                console.log('Response data: ', response.data);
                setPetData(response.data);

                localStorage.setItem('petData', JSON.stringify(response.data));

            } catch (error) {
                console.error('Erro ao obter dados do pet:', error);
            }
        };

        if (!petData) {
            const storedPetData = JSON.parse(localStorage.getItem('petData'));

            if (storedPetData) {
                setPetData(storedPetData);
            } else {
                fetchData();
            }
        }
    }, [petId, petData]);



    return (
        <S.perfil>
            <S.areaPerfil>
                <Header />
                <S.areaMenu>
                    <p id='home'>Home /</p>
                    <p id='home'>Quero adotar /</p>
                    <p>{petData?.nomePet || 'Nome pet'}</p>
                </S.areaMenu>
                <S.area>
                    <S.secaoPerfil>
                        <img className='imgPerfil' src={imgPerfil} alt="Perfil" />
                        <div className='informacoes'>
                            <p id='nome'>{petData?.nomePet || 'Nome pet'}</p>
                            <p id='info'>{`${petData?.especie || 'Espécie '}| ${petData?.sexo || 'Sexo '}| ${petData?.idade || 'Idade '}| ${petData?.porte || 'Porte'}`}</p>
                            <div className='infoContainer'>
                                <div className='imgLocal'>
                                    <img src={imgLocal} alt="Localização" />
                                    <p id='local'>Está em {`${petData?.cidade || 'Cidade'}, ${petData?.estado || 'Estado'}`}</p>
                                </div>
                                <div className='imgProp'>
                                    <img src={imgProprietario} alt="Proprietario" />
                                    <p id='infoProp'>Publicado por  {petData?.proprietario.nome || 'Nome Usuario'}</p>
                                </div>
                                <div className='imgContato'>
                                    <img src={imgContato} alt="Contato" />
                                </div>
                                <div className='contato'>

                                    <p>Contatos | Para adotar esse pet ou saber mais sobre ele, entre em contato com o protetor:</p>
                                    <p>E-mail: {petData?.proprietario.email || 'N/A'}</p>
                                    <p>WhatsApp: {petData?.proprietario.whatsApp || 'N/A'}</p>
                                </div>
                                <div>
                                    <p>Sobre o Pet:</p>
                                    <textarea cols="50" rows="7" value={petData?.sobrePet || 'Não informado'} readOnly ></textarea>
                                </div>
                            </div>
                            <div>
                                <p>Mais detalhes sobre o pet</p>
                            </div>
                            {petData && (
                                <div>
                                    <h3>Cuidados Veterinários</h3>
                                    <ul>
                                        {Object.entries(petData.cuidadosVeterinarios).map(([key, value]) => (
                                            <li key={key}>{value ? key : ''}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {petData && (
                                <div>
                                    <h3>Temperamento</h3>
                                    <ul>
                                        {Object.entries(petData?.temperamento).map(([key, value]) => (
                                            <li key={key}>{value ? key : ''}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {petData && (
                                <div>
                                    <h3>Vive Bem com</h3>
                                    <ul>
                                        {Object.entries(petData?.viveBem).map(([key, value]) => (
                                            <li key={key}>{value ? key : ''}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {petData && (
                                <div>
                                    <h3>Sociável com</h3>
                                    <ul>
                                        {Object.entries(petData?.sociavelCom).map(([key, value]) => (
                                            <li key={key}>{value ? key : ''}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className='buttonarea'>
                                <button>Quero Adotar</button>
                            </div>
                        </div>
                       

                    </S.secaoPerfil>
                </S.area>
                <Footer />

            </S.areaPerfil>
        </S.perfil>

    );


}

export default PerfilPet