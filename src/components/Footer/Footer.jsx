import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/eduardofpacheco/" className="footer__social-link" target="_blank">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/duzaao" className="footer__social-link" target="_blank">
                    <FaGithub />
                </a>
            </div>

            <p className="footer__copyright text-cs">
                &copy; 2025 <span>Eduardo</span>. Todos os direitos Reservados
            </p>

            <p className="footer__copyright text-cs">
                Desenvolvido por <span>Eduardo Pacheco</span>
            </p>
        </div>
    </footer>
    );
};

export default Footer;