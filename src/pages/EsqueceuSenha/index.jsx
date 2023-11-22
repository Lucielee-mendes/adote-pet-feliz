import * as S from './styles'
import imgBackground from '../../imagens/Login1.png'
import imgLogo from '../../imagens/image0 1logo.png'
import { useState } from 'react';


const EsqueceuSenha = () => {

    const [recuperaSenha, setRecuperaSenha] =  useState(false) // isso é um estado local uma constante que vai ser definida para essa pagina
    const [password, setPassword] = useState("")
    const [confirmePassword, setConfirmePassword] = useState("")
    const [errorSalvarSenha, setErrorSalvarSenha] = useState("")
    const [senhasConferem, setSenhasConferem] = useState("")

    const handlePassword = ()=>{
       if(recuperaSenha === false){
        if(password.length === 0 || confirmePassword.length === 0){
            setErrorSalvarSenha("Preencha todos os campos")
            setSenhasConferem("")
        } 
        if(password !== confirmePassword){
            setSenhasConferem("Senhas não estão iguais")
            setErrorSalvarSenha("")
        }

        if(password.length>0 && confirmePassword.length>0){
            if(password === confirmePassword){
                setRecuperaSenha(true)
                setErrorSalvarSenha("")
            }
        }else{
            setRecuperaSenha(false)
        }
          
        
    }
}

    return (
        <S.formulario>
            <S.areaImg>
                <S.ImgBackground src={imgBackground} alt="Background" />
            </S.areaImg>
            <S.areaForm>
                <img className='imgLogo' src={imgLogo} alt="Logo" />
                <h2>Esqueci minha senha</h2>
               <S.area>
                    {errorSalvarSenha?.length > 0 && (<p style={{ color: "red",textDecoration:"none", fontWeight:"bold" }}>{errorSalvarSenha}</p>)}
                    {senhasConferem?.length > 0 && (<p style={{ color: "red",textDecoration:"none", fontWeight:"bold" }}>{senhasConferem}</p>)}
                    {recuperaSenha && <p style={{ color: 'green', textDecoration: 'none',  fontWeight:"bold"  }}>Senha alterada com sucesso!</p>}
               <div className='areaForm'>

                    <label>Digite nova senha:</label>
                    <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <div className='areaForm'>
                    <label>Confirme sua senha:</label>
                    <input type='password' onChange={(e)=>setConfirmePassword(e.target.value)}/>
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