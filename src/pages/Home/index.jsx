import React, { useState, useEffect } from 'react';
import * as S from './styles'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import imgBanner from "../../imagens/Group 3.png"
import imgCard1 from "../../imagens/card1.png"
import imgCard2 from "../../imagens/card2.png"
import imgCard3 from "../../imagens/card3.png"
import imgCard4 from "../../imagens/card4.png"
import axios from 'axios';
import { Link } from 'react-router-dom';
import getBackendUrl from '../../utils/backendConfig';



const HomePage = () => {

    // Definição do estado local para armazenar dados dos pets
    const [petData, setPetData] = useState([]);

    //buscar os dados dos pets ao carregar a página
    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get(`${getBackendUrl()}/pets`);
                setPetData(response.data);
            } catch (error) {
                console.error('Erro ao buscar pets:', error);
            }
        };
        fetchPets();
    }, []);

    const limitedPets = petData.slice(0, 8); // Limita a exibição a apenas os 8 primeiros pets

    return (
        <S.perfil>
            <S.areaPerfil>
                <Header />
                <div className="areaBody">

                    <div className="Banner">
                      <Link to="/queroAdotar"> <img src={imgBanner} alt="" /></Link> 

                    </div>

                    <div className="petsCadastrados">
                        <p id="titulo">Novos amiguinhos cadastrados!</p>
                        <p>Nossa plataforma está repleta de animais adoráveis ansiosos por encontrar uma família. Venha conhecer!</p>

                    </div>
                    <S.petList>
                        {limitedPets && limitedPets.length > 0 ? (
                            limitedPets.map((pet, index) => (
                                <Link id="petLink" key={index} to={`/perfilPet/${pet._id}`}>
                                    <div className='card'>
                                        <img src={`${getBackendUrl()}/getImagem/${pet?.fotos[0]?.file}`} alt={pet.nomePet} />
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
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>Nenhum pet cadastrado</p>
                        )}
                    </S.petList>
                    <div className='vermais'>
                        <button onClick={() =>{window.location.href = `/queroAdotar`}}> Ver mais</button>
                    </div>
                    <div>
                        <p id='titulo'>Por que escolher a adoção?</p>
                    </div>
                    <div className='Container'>
                        <div className='CardContainer'>
                            <img src={imgCard1} alt="" />
                            <p>Neste exato momento, inúmeros amiguinhos de quatro patas aguardam ansiosamente por alguém para compartilhar amor e um lar.</p>
                        </div>
                        <div className='CardContainer'>
                            <img src={imgCard2} alt="" />
                            <p>E não há recompensa maior do que testemunhar a transformação deles, à medida que se tornam companheiros felizes e saudáveis, graças a uma dose generosa de cuidado e carinho.</p>
                        </div>
                    </div>
                    <div className='Container'>
                        <div className='CardContainer'>
                            <img src={imgCard3} alt="" />
                            <p>Adotar é mais do que apenas dar um lar a um animal; é dar a si mesmo a oportunidade de descobrir a alegria de cuidar de um amigo peludo e receber amor incondicional em troca.</p>
                        </div>
                        <div className='CardContainer'>
                            <img src={imgCard4} alt="" />
                            <p>Refletindo sobre isso, a pergunta que surge é: se você pode ser a razão pela qual um animal de rua ganha um novo começo, por que não agir?</p>
                        </div>
                    </div>
                    <div className='vermais'>
                        <button id='adote'>Encontre seu melhor amigo!</button>
                    </div>



                </div>

                <Footer />
            </S.areaPerfil>
        </S.perfil>


    )
}




export default HomePage