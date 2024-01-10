import React, { useRef } from 'react';
import "./Recomendados.css";

import curso_html_css from "./../img/curso-html-css.jpg";
import curso_hardware from "./../img/curso-de-hardware.jpg";
import curso_java from "./../img/curso-de-java.jpg";
import curso_marketing from "./../img/curso-de-marketing.jpg";
import curso_ingles from "./../img/curso-ingles.jpg";
import curso_logica_programacao from "./../img/curso-logica-de-programacao.jpg";
import curso_programacao from "./../img/curso-programacao.jpg";
import curso_python from "./../img/curso-python.jpg";
import curso_react from "./../img/curso-react.jpg";
import curso_redes_computadores from "./../img/curso-redes-computadores.jpg";


const cursos = [
    {
        'id': 1,
        'titulo': 'Curso de HTML5 e CSS3',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Iniciante",
        'duracao': '9 Horas',
        'url': curso_html_css
    },
    {
        'id': 2,
        'titulo': 'Curso de Hardware',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Avançado",
        'duracao': '15 Horas',
        'url': curso_hardware
    },
    {
        'id': 3,
        'titulo': 'Curso de Java para Iniciantes',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Intermediário",
        'duracao': '11 Horas',
        'url': curso_java
    },
    {
        'id': 4,
        'titulo': 'Marketing Digital',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Iniciante",
        'duracao': '6 Horas',
        'url': curso_marketing
    },
    {
        'id': 5,
        'titulo': 'Inglês Avançado',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Avançado",
        'duracao': '19 Horas',
        'url': curso_ingles
    },
    {
        'id': 6,
        'titulo': 'Lógica de Programação',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Intermediário",
        'duracao': '10 Horas',
        'url': curso_logica_programacao
    },
    {
        'id': 7,
        'titulo': 'Curso de Programação',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Avançado",
        'duracao': '15 Horas',
        'url': curso_programacao
    },
    {
        'id': 8,
        'titulo': 'Python para iniciantes',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Iniciante",
        'duracao': '20 Horas',
        'url': curso_python
    },
    {
        'id': 9,
        'titulo': 'Marketing Digital',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Avançado",
        'duracao': '22 Horas',
        'url': curso_react
    },
    {
        'id': 10,
        'titulo': 'Inglês Avançado',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Avançado",
        'duracao': '18 Horas',
        'url': curso_redes_computadores
    },
];


const Recomendados = () => {

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
      };
    
      const handleRightClick = (e) => {
        e.preventDefault();
    
        carousel.current.scrollLeft += carousel.current.offsetWidth;
      };
    return (

        <div className="container_recomendados">

            <h1>Recomendados</h1>

            <div className="carousel" ref={carousel}>
                {
                    cursos.map(item => (
                        <div className="item">
                            <div className="image">
                                <img src={item.url} alt="curso" />
                            </div>
                            <div className="info">
                                <h1>{item.titulo}</h1>
                                <h2>{item.subtitulo}</h2>
                                <div>
                                    <img className="level_img" src="/nivel-iniciante.svg" alt="nível" />
                                    <h3 className="level">{item.nivel}</h3>
                                    <img className="clock_img" src="/clock.svg" alt="duração" />
                                    <h3 className="duration">{item.duracao}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="buttons">
                    <button onClick={handleLeftClick}><img src="/left-arrow.svg" alt="Scroll Left" /></button>
                    <button onClick={handleRightClick}><img src="/right-arrow.svg" alt="Scroll Right" /></button>
                </div>
            </div>

        </div>
    );
};

export default Recomendados;
