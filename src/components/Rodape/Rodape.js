import './Rodape.css';
import email from '../../assets/imagens/email.png';
import fb from '../../assets/imagens/fb.png';
import ig from '../../assets/imagens/ig.png';
import telefone from '../../assets/imagens/telefone.png';
import tt from '../../assets/imagens/tt.png';
import local from '../../assets/imagens/local.png';

function Rodape() {
    return (
        <footer>
            <section id='contato'>
                <h3>FALE CONOSCO</h3>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>
                <div id='contatos'>
                    <div id='contact'>
                        <h3>Contato</h3>
                        <ul>
                            <li>
                                <img src={local}></img>
                                <p>Nova Iguaçu, RJ</p>
                            </li>
                            <li>
                                <img src={telefone}></img>
                                <p>(21) 9999-9999</p>
                            </li>
                            <li>
                                <img src={email}></img>
                                <p>contato@oticavida.com</p>
                            </li>
                        </ul>
                    </div>
                    <div id='socias'>
                        <h3>Nossas Redes Sociais</h3>
                        <ul>
                            <li>
                                <img src={fb}></img>
                                <p>/OticaVida</p>
                            </li>
                            <li>
                                <img src={ig}></img>
                                <p>@oticavidarj</p>
                            </li>
                            <li>
                                <img src={tt}></img>
                                <p>@oticavidarj</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id='rodape'>
                <p>
                    © 2022 Óticas Vida. - Todos os direitos reservados.
                </p>
            </section>
        </footer>
    )
}

export default Rodape;