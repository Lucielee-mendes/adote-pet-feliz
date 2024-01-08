import * as S from './styles'
import imgBackground from '../../imagens/Login1.png'
import imgLogo from '../../imagens/image0 1logo.png'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const history = useNavigate();

    const [isLogin, setIsLogin] = useState(false) // isso é um estado local uma constante que vai ser definida para essa pagina
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState('')
    const [isvalidEmail, setIsValidEmail] = useState(null)


    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputEmail);
        setIsValidEmail(isValid);
    };

    const handleLogin = async () => {
        if (isLogin === false) {
            if (email.length === 0 || password.length === 0) {
                setErrorLogin("Preencha todos os campos")
            }
            if (email.length > 0) {
                validateEmail(email);

            }

            if (isvalidEmail && password.length > 0) {
                try {
                    // Fazer a chamada para o backend
                    const response = await axios.post('http://localhost:3001/login', {
                        email,
                        senha: password,
                    });

                    if (response.data.message === 'Login efetuado com sucesso') {
                    
                        localStorage.setItem('userData', JSON.stringify(response.data.user));
                        history('/perfilUsuario/${userId}' + response.data.user.id);
                        setErrorLogin('');
                    } else {
                        setIsLogin(false);
                        setErrorLogin('Erro ao fazer login. Verifique suas credenciais.');
                    }
                } catch (error) {
                    console.error(error);
                    setIsLogin(false);
                    setErrorLogin('Erro ao fazer login. Verifique sua conexão.');
                }
            } else {
                setIsLogin(false)
            }
        }
    };

    return (
        <S.formulario>
            <S.areaImg>
                <S.ImgBackground src={imgBackground} alt="Background" />
            </S.areaImg>
            <S.areaForm>
                <img className='imgLogo' src={imgLogo} alt="Logo" />
                <h2>Faça seu login</h2>
                <p>Para Divulgar ou Adotar um animalzinho, você precisa ter um cadastro</p>
                <S.area>
                    {errorLogin?.length > 0 && (<p style={{ color: "red", textDecoration: "none", fontWeight: "bold" }}>{errorLogin}</p>)}
                    {isvalidEmail === false && <p style={{ color: 'red', textDecoration: 'none', fontWeight: "bold" }}>E-mail invalido</p>}
                    {isLogin && <p style={{ color: 'green', textDecoration: 'none', fontWeight: "bold" }}>Login efetuado com sucesso</p>}

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


export default LoginPage