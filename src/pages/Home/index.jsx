import React, { useState, useEffect } from 'react';
import * as S from './styles'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import imgBanner from "../../imagens/Group 3.png"
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const HomePage = () => {
   
        const [petData, setPetData] = useState([]);
    
        useEffect(() => {
            const fetchPets = async () => {
                try {
                    const response = await axios.get('http://localhost:3001/pets');
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
                        <img src={imgBanner} alt="" />

                    </div>

                    <div className="petsCadastrados">
                        <p id="titulo">Novos amiguinhos cadastrados!</p>
                        <p>Nossa plataforma está repleta de animais adoráveis ansiosos por encontrar uma família. Venha conhecer!</p>

                    </div>
                    <S.petList>
                {limitedPets && limitedPets.length > 0 ? (
                    limitedPets.map((pet, index) => (
                        <Link key={index} to={`/perfilPet/${pet._id}`}>
                            <div className='card'>
                                <img src={`http://localhost:3001/getImagem/${pet?.fotos[0]?.file}`} alt={pet.nomePet} />
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
                </div>


            </S.areaPerfil>
        </S.perfil>


    )
}




export default HomePage