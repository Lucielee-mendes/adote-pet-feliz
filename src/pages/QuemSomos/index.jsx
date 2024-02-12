import * as S from './styles'
import Header from '../../components/Header';
import Footer from '../../components/Footer';



const QuemSomos = () => {

    return (
        <S.quemSomos>
            <S.areaQuemSomos>
                <Header />
                <S.areaMenu>
                    <p id='home'>Home</p>
                    <p>/ Quem somos</p>
                </S.areaMenu>
                <S.area>
                    <div>
                        <p id='titulo'>Sobre o Adote Pet Feliz</p>
                    </div>
                    <div>
                        <p>Acreditamos em lares para todos os animais de rua. <br></br>
                            Nossa missão é conectar animais que estão em abrigos ou que precisam de um lar com pessoas que desejam dar um lar amoroso a um doguinho ou gatinho.</p>
                    </div>
                    <div>
                        <p id='titulo'>Como Funciona:</p>
                    </div>
                    <div>
                        <p>Nosso site é uma plataforma dedicada à adoção responsável de animais. Aqui está como funciona:</p>
                        <ul>
                            <li>Divulgar um Animal para Adoção: Se você tem um animal que precisa de um lar ou está oferecendo lar temporário, crie uma conta no site e publique o perfil do bichinho. Quanto mais informações e fotos você fornecer, melhor. Isso ajuda a encontrar o match perfeito e reduz as chances de decepções no futuro. Lembre-se de ser honesto sobre a saúde e características do animal. Venda de animais é estritamente proibida, pois acreditamos na adoção responsável.</li>
                            <li>Adotar um Amigo: Navegue por nossas listagens de cães e gatos que aguardam um lar amoroso. </li>
                        </ul>
                    </div>
                    <div>
                        <p id='titulo'>Adoção Responsável</p>
                    </div>
                    <div>
                        <p>Acreditamos firmemente que a adoção de um animal de estimação é um compromisso para toda a vida e deve ser feito com responsabilidade. Animais de estimação não são brinquedos, mas seres vivos que compartilham as mesmas necessidades básicas e emoções que nós.
                            Bichinhos de estimação podem viver em média 18 anos, precisam de cuidados, amor, vacinação, alimentação adequada e atenção constante. Não são apenas adições temporárias à família, mas membros de pleno direito. A responsabilidade de adotar um animal é significativa e duradoura.
                            Antes de adotar, é crucial refletir sobre a sua capacidade de cuidar e proporcionar uma vida saudável e feliz a um novo membro da família. Se você não tiver condições de fornecer os cuidados necessários, seja consciente e não adote. A adoção não é uma tendência passageira, mas uma responsabilidade séria.
                            Muitos dos animais que aguardam adoção têm histórias tristes de abandono e sofrimento. Quando você decide adotar, acredita estar salvando um animal, mas com o tempo, percebe que foi ele quem te salvou. Animais de estimação têm uma capacidade incrível de entender nossos sentimentos e nos oferecer amor incondicional.
                            Eles são companheiros verdadeiros, leais e honestos em suas emoções, e nos enchem de alegria e afeto. Se você já tem um animal de estimação, sabe que eles trazem vida, alegria e amor para sua casa.
                            Lembre-se de que a adoção responsável envolve cuidado contínuo, apoio médico e amor duradouro. Se você estiver pronto para assumir essa responsabilidade e desejar adotar um amigo peludo, explore nossas listagens e faça a diferença na vida de um animal que aguarda um lar amoroso."</p>
                        <p>
                            Agora que você conhece nossa iniciativa, está pronto para fazer a diferença na vida de um animal e encontrar um amigo peludo para chamar de seu. Clique no botão abaixo para começar sua jornada de adoção ou para ajudar a divulgar animais que precisam de um lar.
                        </p>
                    </div>
                    <div className='botao'>
                        <button>Adotar agora!</button>
                        <button onClick={() => window.location.href = "/cadastroPet/:userId"}>Divulgar agora!</button>

                    </div>


                </S.area>

                <Footer />

            </S.areaQuemSomos>

        </S.quemSomos>
    )

}

export default QuemSomos