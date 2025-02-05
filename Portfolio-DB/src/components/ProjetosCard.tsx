import "../css/styles.css";
import "../css/mediaQuery.css";

const ProjetosCard: React.FC = () => {
    return (
        <main>
            <section>
                <div className="head-card">
                    <h2>Meus</h2>
                    <h1>Projetos</h1>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="/assets/hANDtRACKING.png" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>Hands Tracking</h2>
                            <span>Python</span>
                            <p>Um aplicativo em Python que permite desenhar na tela usando gestos das mãos. 
                                Aponta com o dedo indicador para desenhar e levanta dois dedos (indicador e médio) para apagar.
                                Utiliza OpenCV para captura de imagem e Mediapipe para detecção e rastreamento das mãos.</p>
                            <div className="buttons">
                                <button><a href="https://github.com/OtavioRdR/Hands-Tracking/tree/main" target="_blank"
                                           rel="noopener noreferrer">Github</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/robozinho.png" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>Sauce Labs</h2>
                            <span>Python</span>
                            <p>O ProjetoCyDB é um conjunto de testes automatizados E2E desenvolvidos com Cypress para validar
                                a usabilidade e funcionalidades do site SauceDemo. Ele abrange cenários essenciais como login,
                                adição e remoção de itens no carrinho, ordenação de produtos e fluxo completo de checkout, 
                                garantindo uma experiência confiável para os usuários. 🚀</p>
                            <div className="buttons">
                                <button><a href="https://github.com/OtavioRdR/ProjetoCyDB" target="_blank"
                                           rel="noopener noreferrer">Github</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/APICEP.png" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>Validação de CEP 🌍📬</h2>
                            <span> JAVA</span>
                            <p>Projeto para validar CEPs utilizando a API pública do ViaCEP. 
                            Utiliza RestAssured para requisições HTTP e JUnit 5 para testes unitários.
                            Cobre cenários de CEPs válidos e inválidos, formatos diversos e tempo de resposta da API.</p>
                            <div className="buttons">
                                <button><a href="https://github.com/OtavioRdR/Desafio-API---testes" target="_blank">Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </main>
    )
}

export default ProjetosCard;