import * as S from './styles'
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import imgPerfil from '../../imagens/pet-avatar 1.png';
import imgLocal from '../../imagens/localizacao.png';
import imgProprietario from '../../imagens/usuario.png';
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
                                </div>
                                <div className='info'>
                                    <p>Está em {`${petData?.cidade || 'Cidade'}, ${petData?.estado || 'Estado'}`}</p>
                                </div>
                                <div className='imgProp'>
                                    <img src={imgProprietario} alt="Proprietario" />
                                </div>
                            </div>

                        </div>

                    </S.secaoPerfil>
                </S.area>


            </S.areaPerfil>
        </S.perfil>

    );


}

export default PerfilPet