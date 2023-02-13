import banner from '../../assets/imagens/capa.png';
import oculos_grau from '../../assets/imagens/oculos01.png';
import oculos_transition from '../../assets/imagens/oculos02.png';
import oculos_sol from '../../assets/imagens/oculos03.png';
import oculos_infantil from '../../assets/imagens/oculos04.png';
import atendimento from '../../assets/imagens/atendimento.png';
import loja from '../../assets/imagens/loja.png';


import './Conteudo.css';

function Conteudo() {
    return (
        <main>
            <section id='section_banner'>
                <h1 id='texto_banner'>Preços baixos em
                    <strong id='texto_banner_strong'>
                        ÓCULOS DE
                    </strong> 
                    <strong id='texto_banner_strong_'>   
                        GRAU E DE SOL
                    </strong>
                    Você só encontra aqui!
                </h1>
                <img src={banner} alt='banner_imagem' id='banner'></img>
            </section>
            <section id='produtos'>
                <h2>NOSSOS PRODUTOS</h2>
                    <p>
                        Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
                    </p>
                    <p>
                        Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                    </p>

                <div id='card_oculos'>
                    <div className='oculos'>
                        <h2>Óculos de grau</h2>
                        <img src={oculos_grau}></img>
                        <h2>R$ 500,00</h2>
                    </div>
                    <div className='oculos'>
                        <h2>Óculos de grau</h2>
                        <img src={oculos_transition}></img>
                        <h2>R$ 750,00</h2>
                    </div>
                    <div className='oculos'>
                        <h2>Óculos de grau</h2>
                        <img src={oculos_sol}></img>
                        <h2>R$ 700,00</h2>
                    </div>
                    <div className='oculos'>
                        <h2>Óculos de grau</h2>
                        <img src={oculos_infantil}></img>
                        <h2>R$ 500,00</h2>
                    </div>
                </div>
                <ul id='produtos_incluem'>
                    <p>Todos os nossos produtos incluem:</p>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </section>
            <section id='sobre'>
                <h3>QUEM SOMOS NÓS</h3>
                <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. 
                </p>
                <div id='sobre_nos'>
                    <img src={loja}></img>
                    <span>
                        <h2>Nossas Filiais</h2>
                        <p>
                            Hoje temos mais de 20 filiais pelo Brasil e na América
                        </p>
                    </span>
                    <span>
                        <h2>Atendimento Flexível</h2>
                        <p>
                            Nossa equipe possui é treinada para te atender
                        </p>
                    </span>
                    <img src={atendimento}></img>
                </div>
            </section>
            
        </main>
    )
}

export default Conteudo;