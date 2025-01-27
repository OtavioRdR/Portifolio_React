import {Link} from "react-router-dom";
import "../css/styles.css";
import "../css/mediaQuery.css";

const Header: React.FC = () => {
    const handleMenuToggle = () => {
        const linksNavegacao = document.getElementById('links-navegacao');
        const menuToggle = document.getElementById('menu-toggle');
        if (linksNavegacao && menuToggle) {
            linksNavegacao.classList.toggle('active');
            menuToggle.classList.toggle('active');
        };
    };
    return(
    <header>
        <nav id="navegacao">
            <a href="https://db.tec.br/" target="_blank" rel="">
                <img
                    id="logo"
                    src="/assets/Logo DB dark blue 1.png"
                    alt="Logo da DB"
                />
            </a>
            <button id="menu-toggle" aria-label="Abrir Menu" onClick={handleMenuToggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul id="links-navegacao">
                <li  style={{ width: '200px' }}>
                    <Link to="/">Sobre</Link>
                </li>
                <li  style={{ width: '200px' }}>
                    <a
                        href="https://drive.google.com/file/d/1rkxohMgyp6MY0Fr_Cu0jWjdbMUevv9ik/view?usp=sharing"
                        target="_blank"
                        rel=""
                    >
                        Currículo
                    </a>
                </li>
                <li  style={{ width: '200px' }}>
                    <Link to="/projetos">Projetos</Link>
                </li>
            </ul>
        </nav>
        <nav id="redes">
            <ul id="redes-sociais">
                <li>
                    <a href="https://github.com/OtavioRdR" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/Vector.png" alt="Logo GitHub"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/otavio-rosa-rodrigues/"
                        target="_blank"
                        rel=""
                    >
                        <img src="/assets/Vector (1).png" alt="Logo Linkedin"/>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export {Header};