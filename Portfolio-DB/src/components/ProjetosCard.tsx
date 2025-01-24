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
                        <img src="/assets/FutebolAi.png" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>API de Partidas de Futebol</h2>
                            <span> JAVA</span>
                            <p>Desenvolvimento de uma API que gerencia dados sobre partidas de futebol,
                                como equipes, horários e resultados. 
                                A API permite cadastro, consulta e atualização de informações
                                com foco na eficiência e acessibilidade.</p>
                            <div className="buttons">
                                <button><a href="https://github.com/OtavioRdR/Projeto-Final" target="_blank">Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/CrudPessoasAi.png" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>Pessoas Endereços</h2>
                            <span> JAVA</span>
                            <p>Sistema CRUD para criar, ler, atualizar e excluir dados de pessoas e endereços.
                                A aplicação facilita a gestão de informações em banco de dados,
                                integrando funcionalidades com segurança e praticidade.</p>
                            <div className="buttons">
                                <button><a href="https://github.com/OtavioRdR/DB_CRUD"
                                           target="_blank">Github</a>
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