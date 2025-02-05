import Skills from "./Skills.tsx";
import "../css/styles.css";
import "../css/mediaQuery.css";

const About: React.FC = () => {
    return (
        <section className="container">
            <div className="about">
                <h2>Sobre mim</h2>
                <p>Sou Otávio, profissional com experiência em Quality Assurance e desenvolvimento de software. 
                   Tenho conhecimento em testes automatizados e manuais, garantindo a qualidade e eficiência das aplicações.
                   Além disso, possuo experiência com Java, Node.js, SQL, Git e metodologias ágeis. Busco aprimorar minhas 
                   habilidades continuamente por meio de desafios técnicos e inovação.</p>
            </div>
            <Skills/>
        </section>
    )
}

export default About;