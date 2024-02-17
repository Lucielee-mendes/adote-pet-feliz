import * as S from './styles'
import imgBackground from '../../imagens/Login1.png'
import imgLogo from '../../imagens/image0 1logo.png'
import { useState } from 'react';
import axios from 'axios';


const EsqueceuSenha = () => {

    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState("")
    const [confirmePassword, setConfirmePassword] = useState("")
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);


    const handlePassword = async () => {
        console.log("Email:", email); // Verifica se o email está sendo passado corretamente
        console.log("Senha:", senha); //
        try {
            if (!email || !senha || !confirmePassword) {
                setError('Preencha todos os campos');
                return;
            }

            if (senha !== confirmePassword) {
                setError("Senhas não estão iguais")
                return;
            }

            const response = await axios.post('http://localhost:3001/esqueceuSenha', { email, senha });
           
            
            if (response.status === 200) {
                setSuccess(true);
                setError('');
            } else {
                setSuccess(false);
                setError('Erro ao redefinir a senha');
            }
        } catch (error) {
            console.error('Erro ao redefinir a senha:', error);
            setError('Erro ao redefinir a senha');
        }
    };


    return (
        <S.formulario>
            <S.areaImg>
                <S.ImgBackground src={imgBackground} alt="Background" />
            </S.areaImg>
            <S.areaForm>
                <img className='imgLogo' src={imgLogo} alt="Logo" />
                <h2>Esqueci minha senha</h2>
                <S.area>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>Senha alterada com sucesso!</p>}
                    <div className='areaForm'>
                        <label>Digite seu e-mail:</label>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='areaForm'>
                        <label>Digite nova senha:</label>
                        <input type='password' onChange={(e) => setsenha(e.target.value)} />
                    </div>
                   <div className='areaForm'>
                        <label>Confirme sua senha:</label>
                        <input type='password' onChange={(e) => setConfirmePassword(e.target.value)} />
                    </div>
                    <div className='buttonarea'>
                        <button onClick={handlePassword}>Salvar</button>
                    </div>
                    <a href={"/cadastro"}>Não tenho cadastro</a>
                </S.area>
            </S.areaForm>
        </S.formulario>
    );
};




export default EsqueceuSenha