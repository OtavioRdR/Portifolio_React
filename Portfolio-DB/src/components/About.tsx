import Skills from "./Skills.tsx";
import "../css/styles.css";
import "../css/mediaQuery.css";

const About: React.FC = () => {
    return (
        <section className="container">
            <div className="about">
                <h2>Sobre mim</h2>
                <p>Sou Otávio, desenvolvedor com experiência em Java, Node.js e ferramentas low-code como Power Apps.
        Atuo no desenvolvimento de soluções inovadoras, com foco em eficiência e qualidade, além de possuir
        conhecimentos em SQL, Git e metodologias ágeis. Estou sempre em busca de aprimorar minhas habilidades
        técnicas por meio de projetos desafiadores e aprendizagem contínua.</p>
            </div>
            <Skills/>
        </section>
    )
}

export default About;