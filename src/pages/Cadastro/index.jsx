import * as S from './styles'
import imgBackground from '../../imagens/Login1.png'
import imgLogo from '../../imagens/image0 1logo.png'
import imgPerfil from '../../imagens/download (2) 1.png'
import { useState } from 'react';
import estados from './estados.json'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';




const Cadastro = () => {
    const history = useNavigate();

    const [isCadastro, setIsCadastro] = useState(false) // isso é um estado local uma constante que vai ser definida para essa pagina
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [password, setPassword] = useState("")
    const [whatsApp, setWhatsApp] = useState("")
    const [errorCadastro, setErrorCadastro] = useState('')
    const [telefone, setTeletone] = useState("")
    const [confereEmail, setConfereEmail] = useState("")
    const [isvalidEmail, setIsValidEmail] = useState(null)
    const [isValidTelefone, setIsValidTelefone] = useState(null);
    const [numberPhone, setNumberPhone] = useState('')
    const [sobreVoce, setSobreVoce] = useState("");
    const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
    const [previewImagem, setPreviewImagem] = useState(null);


    const handleArquivoChange = (e) => {
        const file = e.target.files[0];

        if (file) {


            setArquivoSelecionado(file);

            const leitor = new FileReader();

            leitor.onloadend = () => {
                setPreviewImagem(leitor.result);
            };

            leitor.readAsDataURL(file);
        }
    };



    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputEmail);
        setIsValidEmail(isValid);
    };


    const handleChangePhone = (e) => {
        setWhatsApp(e.target.value)
        const numberFormat = formatarNumeroCelular(e.target.value)
        setNumberPhone((numberFormat))
    }

    const formatarNumeroCelular = (numero) => {
        const numeroLimpo = numero.replace(/\D/g, '');

        const regexFormato = /^(\d{2})(\d{5})(\d{4})$/;
        const numeroFormatado = numeroLimpo.replace(regexFormato, '($1) $2-$3');

        return numeroFormatado;
    };
    const validateTelefone = (inputTelefone) => {
        const telefoneRegex = /^\d{10,}$/; // Pelo menos 10 dígitos numéricos
        const isValid = telefoneRegex.test(inputTelefone);
        setIsValidTelefone(isValid);
    };



    const handleCadastro = async () => {

        if (isCadastro === false) {
            if (nome.length === 0 || email.length === 0 || confirmEmail.length === 0 || password.length === 0 || whatsApp.length === 0) {
                setErrorCadastro("Preencha todos os campos")
                return;
            }
            if (email.length > 0) {
                validateEmail(email);

            }

            if (whatsApp.length > 0) {
                validateTelefone(whatsApp);
            }

            if (email !== confirmEmail) {
                setConfereEmail("E-mail não estão iguais")
                setErrorCadastro("")
                return;
            }


            if (isvalidEmail && password.length > 0) {
                const formData = new FormData();
                formData.append('image', arquivoSelecionado);

                const userData = {
                    nome,
                    email,
                    confirmEmail,
                    senha: password,
                    whatsApp,
                    telefone,
                    estado: estadoSelecionado,
                    cidade: cidadeSelecionada,
                    possuiCasaTelada,
                    possuiDisponibilidadeCastrar,
                    possuiDisponibilidadeVacinar,
                    sobreVoce,

                };
                formData.append('json', JSON.stringify(userData))

                try {
                    const response = await axios.post('http://localhost:3001/cadastro', formData);

                    if (response.status === 201) {
                        // Armazenar dados no localStorage após o cadastro bem-sucedido
                        localStorage.setItem('userData', JSON.stringify(userData));
                        setIsCadastro(true);

                        history('/login');
                    } else {
                        setIsCadastro(false);
                        console.error('Error response data:', response.data || 'No response data available'); // Alteração aqui
                        setErrorCadastro(response.data.error || 'Erro ao cadastrar usuário');
                    }
                } catch (error) {
                    console.error('Erro ao cadastrar usuário:', error);
                    console.error('Error response data:', error.response.data); // Adiciona esta linha para capturar detalhes da resposta
                    setIsCadastro(false);
                    setErrorCadastro('Erro ao cadastrar usuário');
                }
            } else {
                setIsCadastro(false);
            }
        }
    }


    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');


    const handleEstadoChange = (event) => {
        setEstadoSelecionado(event.target.value);
        setCidadeSelecionada(''); // Resetar a cidade ao trocar de estado
    };

    const handleCidadeChange = (event) => {
        setCidadeSelecionada(event.target.value);
    };

    const [possuiCasaTelada, setPossuiCasaTelada] = useState(false);

    const handleCheckboxChange = (value) => {
        setPossuiCasaTelada(value);
    };

    const [possuiDisponibilidadeCastrar, setPossuiDisponibilidadeCastrar] = useState(false);
    const [possuiDisponibilidadeVacinar, setPossuiDisponibilidadeVacinar] = useState(false);

    const handleCheckboxChangeCastrar = () => {
        setPossuiDisponibilidadeCastrar(!possuiDisponibilidadeCastrar);
    };

    const handleCheckboxChangeVacinar = () => {
        setPossuiDisponibilidadeVacinar(!possuiDisponibilidadeVacinar);
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
                <h2>Faça seu cadastro</h2>
                <p>Preencha seus dados a seguir</p>
                <S.area>
                    {errorCadastro?.length > 0 && (<p style={{ color: "red", textDecoration: "none", fontWeight: "bold" }}>{errorCadastro}</p>)}
                    {isvalidEmail === false && <p style={{ color: 'red', textDecoration: 'none', fontWeight: "bold" }}>E-mail invalido</p>}
                    {isValidTelefone === false && <p style={{ color: 'red', textDecoration: 'none', fontWeight: "bold" }}>whatsApp invalido</p>}
                    {isCadastro && <p style={{ color: 'green', textDecoration: 'none', fontWeight: "bold" }}>Cadastro com sucesso</p>}
                    {confereEmail?.length > 0 && (<p style={{ color: "red", textDecoration: "none", fontWeight: "bold" }}>{confereEmail}</p>)}


                    <div className='areaForm'>
                        <label>Nome completo:*</label>
                        <input placeholder='' onChange={(e) => setNome(e.target.value)} />

                    </div>
                    <div className='areaForm'>
                        <label>E-mail:*</label>
                        <input placeholder='seuEmail@exemple.com' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='areaForm'>
                        <label>Confirmação do E-mail:*</label>
                        <input placeholder='seuEmail@exemple.com' onChange={(e) => setConfirmEmail(e.target.value)} />
                    </div>
                    <div className='areaForm'>
                        <label>Senha:*</label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='areaForm'>
                        <label>WhatsApp*:</label>
                        <input value={numberPhone} onChange={(e) => handleChangePhone(e)} />
                    </div>
                    <div className='areaForm'>
                        <label>Telefone:</label>
                        <input value={telefone} onChange={(e) => setTeletone(e.target.value)} />
                    </div>
                    <div className='areaForm' id='divIMG'>
                        <label>Foto principal:</label>
                        <input type='file' name="file" onChange={handleArquivoChange} />
                        <div className='previewImage'>
                            <img className='imgPerfil' src={previewImagem ? previewImagem : imgPerfil} alt="Perfil" />
                        </div>
                    </div>
                    <div className='areaForm'>
                        <div className='areaForm'>
                            <label>Selecione seu estado:</label>
                            <select value={estadoSelecionado} onChange={handleEstadoChange}>
                                <option value="">Todos os Estados</option>
                                {estados.estados.map((estado) => (
                                    <option key={estado.sigla} value={estado.sigla}>
                                        {estado.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='areaForm'>
                            <label>Selecione sua cidade:</label>
                            <select value={cidadeSelecionada} onChange={handleCidadeChange}>
                                <option value="">Todas as Cidades</option>
                                {estadoSelecionado
                                    ? estados.estados
                                        .find((estado) => estado.sigla === estadoSelecionado)
                                        .cidades.map((cidade) => (
                                            <option key={cidade} value={cidade}>
                                                {cidade}
                                            </option>
                                        ))
                                    : estados.estados
                                        .flatMap((estado) => estado.cidades)
                                        .map((cidade) => (
                                            <option key={cidade} value={cidade}>
                                                {cidade}
                                            </option>
                                        ))}
                            </select>
                        </div>
                    </div>
                    <div className='areaForm'>
                        <label>
                            Possui casa telada?
                        </label>

                        <div className='checkArea'>
                            <input
                                type="checkbox"
                                id="simCheckbox"
                                checked={possuiCasaTelada}
                                onChange={() => handleCheckboxChange(true)}
                            />
                            <label htmlFor="simCheckbox">Sim</label>

                            <input
                                type="checkbox"
                                id="naoCheckbox"
                                checked={!possuiCasaTelada}
                                onChange={() => handleCheckboxChange(false)}
                            />
                            <label htmlFor="naoCheckbox">Não</label>
                        </div>
                    </div>
                    <div>
                        <div className='areaForm'>
                            <label>
                                Possui disponibilidade para castrar e/ou vacinar?
                            </label>

                            <div className='checkArea'>
                                <input
                                    type="checkbox"
                                    id="castrarCheckbox"
                                    checked={possuiDisponibilidadeCastrar}
                                    onChange={handleCheckboxChangeCastrar}
                                />
                                <label htmlFor="castrarCheckbox">Castrar</label>

                                <input
                                    type="checkbox"
                                    id="vacinarCheckbox"
                                    checked={possuiDisponibilidadeVacinar}
                                    onChange={handleCheckboxChangeVacinar}
                                />
                                <label htmlFor="vacinarCheckbox">Vacinar</label>
                            </div>
                        </div>
                    </div>
                    <div className='areaForm'>
                        <label >Sobre você</label>
                        <textarea cols="30" rows="10" value={sobreVoce} onChange={(e) => setSobreVoce(e.target.value)}></textarea>

                    </div>

                    <div className='buttonarea'>
                        <button onClick={handleCadastro}>Salvar</button>
                    </div>
                    <a href={"/login"}>Ja tenho cadastro</a>

                </S.area>
            </S.areaForm>
        </S.formulario >
    );
};


export default Cadastro