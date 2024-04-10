import * as S from './styles';
import imgBackground from '../../imagens/Login1.png';
import imgLogo from '../../imagens/image0 1logo.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const LoginPage = () => {
    const history = useNavigate();

    // Definição do estado local
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState('');

    // Função para validar o formato do email
    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    };

    // Função para lidar com o processo de login
    const handleLogin = async () => {
        // Verifica se os campos estão vazios
        if (email.length === 0 || password.length === 0) {
            setErrorLogin('Preencha todos os campos');
            return;
        }

        // Verifica se o formato do email é válido
        if (!validateEmail(email)) {
            setErrorLogin('E-mail inválido');
            return;
        }

        try {
            // Requisição para o backend para autenticar o usuário
            const response = await axios.post('http://localhost:3001/login', {
                email,
                senha: password,
            });

            if (response.status === 200 && response.data.message === 'Login bem-sucedido') {
                // Verifica se o login foi bem-sucedido
                if (response.data.user && response.data.user._id) {
                     // Salva os dados do usuário no localStorage
                    localStorage.setItem('userData', JSON.stringify(response.data.user));
                    // Navega para a página de perfil do usuário
                    history(`/perfilUsuario/${response.data.user._id}`);
                } else {
                    setErrorLogin('Credenciais inválidas');
                }
            } else {
                if (response.data && response.data.error) {
                    setErrorLogin(response.data.error);
                } else {
                    setErrorLogin('Credenciais inválidas');
                }
            }
        } catch (error) {
            // Verificar se o erro é de conexão
            if (error.message.includes('Network Error')) {
                setErrorLogin('Erro ao fazer login. Verifique sua conexão.');
            } else {
                setErrorLogin('Credenciais inválidas');
            }
        }
    };

    return (
        <S.formulario>
            <S.areaImg>
                <S.ImgBackground src={imgBackground} alt="Background" />
            </S.areaImg>
            <S.areaForm>
                <Link to="/">
                    <img className='imgLogo' src={imgLogo} alt="Logo" />
                </Link>
                <h2>Faça seu login</h2>
                <p>Para Divulgar ou Adotar um animalzinho, você precisa ter um cadastro</p>
                <S.area>
                    {errorLogin && <p style={{ color: "red", fontWeight: "bold" }}>{errorLogin}</p>}

                    <div className='areaForm'>
                        <label>E-mail:</label>
                        <input placeholder='seuEmail@exemple.com' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='areaForm'>
                        <label>Senha:</label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} />
                        <a href={"/esqueciSenha"}>Esqueceu sua senha?</a>
                    </div>
                    <div className='buttonarea'>
                        <button onClick={handleLogin}>Entrar</button>
                    </div>
                    <a href={"/cadastro"}>Não tenho cadastro</a>
                </S.area>
            </S.areaForm>
        </S.formulario>
    );
};

export default LoginPage;
