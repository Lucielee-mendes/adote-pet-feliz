import * as S from './styles'
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import imgLocal from '../../imagens/download (5).png';
import imgProprietario from '../../imagens/download (6).png';
import imgContato from '../../imagens/download (4).png'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import getBackendUrl from '../../utils/backendConfig';




const PerfilPet = () => {
     // Utiliza o hook useParams para obter o ID do pet da URL
    const { petId } = useParams();

     // Definição dos estados locais para armazenar os dados do pet, imagens e dados do usuário proprietário   
    const [petData, setPetData] = useState(null);
    const [images, setImages] = useState('')
    const [userData, setUserData] = useState([])
    
    // useEffect para buscar os dados do pet com base no ID fornecido na URL
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${getBackendUrl()}/perfilPet/${petId}`);
                setPetData(response.data);
                setPetData(response.data.perfilPet);
                setImages(response.data.perfilPet.fotos);

                localStorage.setItem('petData', JSON.stringify(response.data.perfilPet));


            } catch (error) {
                console.error('Erro ao obter dados do pet:', error);
            }
        };

        fetchData()
    }, [petId]);


    // useEffect para buscar os dados do usuário proprietário do pet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${getBackendUrl()}/perfilUsuario/${petData.proprietario}`);

                setUserData(response.data);
            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
            }
        };
        // Verifica se os dados do pet estão disponíveis antes de buscar os dados do usuário
        petData && fetchData()

    }, [petData]);

    // Expressão regular para substituir underscores por espaços nos nomes de categorias
    const regex = /_/g;

    // Função para lidar com o clique no botão "Quero Adotar". Direcionamento ao WhatsApp
    const handleQueroAdotar = () => {
        const mensagem = encodeURIComponent('Olá! Estou interessado(a) em adotar o seu pet. Gostaria de mais informações');
        window.open(`https://wa.me/${userData?.userData?.whatsApp}?text=${mensagem}`, '_blank');
    };

    return (
        <S.perfil>
            <S.areaPerfil>
                <Header />
                <S.areaMenu>
                    <Link to="/"> <p id='home'>Home /</p></Link>
                    <Link to="/queroAdotar"> <p id='home'>Quero adotar /</p></Link>
                    <p>{petData?.nomePet || 'Nome pet'}</p>
                </S.areaMenu>
                <S.area>
                    <S.secaoPerfil>

                                  <img className='imgPerfil' alt='img-pet'
                            src={`${getBackendUrl()}/getImagem/${petData?.fotos[0]?.file}` || images} />

                            

                      <div className='areaImg'>
                      {petData?.fotos?.map((foto)=>{
                            return(
                                  <img className='imgpets' alt='img-pet'
                            src={`${getBackendUrl()}/getImagem/${foto.file}` || images} />

                            )
                        })}

                      </div>
                      

                        <div className='informacoes'>
                            <p id='nome'>{petData?.nomePet || 'Nome pet'}</p>
                            <p id='info'>{`${petData?.especie || 'Espécie '} | ${petData?.sexo || 'Sexo '} | ${petData?.idade || 'Idade '} | ${petData?.porte || 'Porte'}`}</p>
                            <div className='infoContainer'>
                                <div className='imgLocal'>
                                    <img src={imgLocal} alt="Localização" />
                                    <p id='local'>Está em {`${petData?.cidade || 'Cidade'}, ${petData?.estado || 'Estado'}`}</p>
                                </div>
                                <div className='imgProp'>
                                    <img src={imgProprietario} alt="Proprietario" />
                                    <Link to={`/perfilUsuario/${userData?.userData?._id}`}>
                                        <p id='infoProp'>Publicado por  {userData?.userData?.nome || 'Nome Usuario'}</p>
                                    </Link>

                                </div>

                                <div className='contato'>
                                    <div className='imgContato'>
                                        <img src={imgContato} alt="Contato" />
                                    </div>
                                    <div className='infosContato'>
                                        <p>Contatos | Para adotar esse pet ou saber mais sobre ele, entre em contato com o protetor:</p>
                                        <p>E-mail: {userData?.userData?.email || 'N/A'}</p>
                                        <p>WhatsApp: {userData?.userData?.whatsApp || 'N/A'}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Sobre o Pet:</p>
                                    <textarea cols="50" rows="7" value={petData?.sobrePet || 'Não informado'} readOnly ></textarea>
                                </div>
                                <div>
                                    <p> Raça: {`${petData?.raca || 'Não informado'}`}</p>

                                </div>
                            </div>
                            <div>
                                <p>Mais detalhes sobre o pet</p>
                            </div>
                            {petData && (
                                <div>
                                    <ul style={{textTransform:'capitalize'}}>
                                        {Object.entries(petData.cuidadosVeterinarios).map(([key, value]) => {
                                            return (
                                                value === true && <li key={key}>{value === true && key}</li>
                                            )
                                        })}

                                    </ul>
                                </div>
                            )}
                            {petData && (
                                <div>
                                    <ul style={{textTransform:'capitalize'}}>
                                        {Object.entries(petData?.temperamento).map(([key, value]) => (
                                            value === true && <li key={key}>{value === true && key}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <h5>Vive bem em:</h5>

                            {petData && (
                                <div>
                                    <ul style={{textTransform:'capitalize'}}>
                                        {Object.entries(petData?.viveBem)
                                            .map(([key, value]) => (
                                                value === true && <li key={key}>{value === true && key.replace(regex, ' ')}</li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                            <h5>Sociável com:</h5>

                            {petData && (
                                <div>
                                    <ul style={{textTransform:'capitalize'}}>
                                        {Object.entries(petData?.sociavelCom).map(([key, value]) => (
                                            value === true && <li key={key}>{value === true && key}</li>

                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className='buttonarea'>
                                <button onClick={handleQueroAdotar}>Quero Adotar</button>
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