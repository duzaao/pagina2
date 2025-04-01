import React from 'react';
import './service.css';
import { services } from '../../Data';

const Services = () => {
  const handleRedirect = (index) => {
    const files = ['public/tcc1.pdf', 'public/tcc2.pdf'];
    window.location.href = files[index % files.length];
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">Files</h2>
      <p className="section__subtitle">
          Meus <span>Arquivos TCC</span>
      </p>

      <div className="services__container container">
        {services.map(({ name, title, description }, index) => {
          return(
            <button className="services__item card card-one" key={index} onClick={() => handleRedirect(index)}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description" style={{ color: 'white' }}>{description}</p>
            </button>
          );
        })}
      </div>

      {/* <div className="section__deco deco__right"></div> */}
    </section>
  );
};

export default Services;
