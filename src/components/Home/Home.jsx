import React from 'react';
import './home.css';
import profile from '../../assets/edu.jpeg'
import shapeOne from '../../assets/icon-react.png';
import shapetwo from '../../assets/icon-js.png';
import shapethree from '../../assets/icon-node.png';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import CV from '../../assets/cv-Eduardo_Pacheco.pdf'

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__wrapper">
            <div className="home__container container">
                <p className="home__subtitle text-cs">
                    Olá, esse é o meu  <span>TCC</span>
                </p>

                <h1 className="home__title text-cs"><span>EDUARDO</span> PACHECO</h1>

                <p className="home__job">
                    <span className="text-cs">Eu sou um</span> <b>Cientista da Computação</b>
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profile} alt="Minha imagem de perfil" className="home__profile" />
                    </div>

                    {/*<p className="home__data home__data-one">
                        <span className="text-lg">
                            2 <b>+</b>
                        </span>

                        <span className="text-sm text-cs">
                            Years of <span>Experience</span>
                        </span>
                    </p>

                    <p className="home__data home__data-two">
                        <span className="text-lg">30</span>

                        <span className="text-sm text-cs">
                            Completed <span>Projects</span>
                        </span>
                    </p>*/}

                    <img src={shapeOne} alt="" className="shape shape__1"/>
                    <img src={shapetwo} alt="" className="shape shape__2"/>
                    <img src={shapethree} alt="" className="shape shape__3"/>
                </div>

                <p className="home__text">
                        Esse será o site que tera informações do meu trabalho de conclusão de curso, onde irei apresentar o projeto e o artigo científico. 
                </p>

                <div className="home__socials">
                    <a href="https://www.linkedin.com/in/eduardofpacheco/" className="home__social-link" target="_blank">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/duzaao" className="home__social-link" target="_blank">
                        <FaGithub />
                    </a>
                </div>

                <div className="home__btns">
                    <a download="" href={CV} className="btn text-cs">Dowload CV</a>
                    {/*<a href="" className="btn text-cs">Dowload CV</a>*/}
                </div>
            </div>

            {/* <div className="section__deco deco__left"></div> */}
        </div>
    </section>
  );
};

export default Home;