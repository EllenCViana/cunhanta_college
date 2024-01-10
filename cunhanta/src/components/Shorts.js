import React, { useRef, useEffect, useState } from 'react';
import "./Shorts.css";

import cursohtml_css from "./../img/img1.jpg";
import cursohardware from "./../img/img2.jpg";
import cursojava from "./../img/img3.jpg";
import cursomarketing from "./../img/img4.jpg";
import cursoingles from "./../img/img5.jpg";
import cursologica_programacao from "./../img/img6.jpg";
import cursoprogramacao from "./../img/img7.jpg";
import cursopython from "./../img/img8.jpg";
import cursoreact from "./../img/img9.jpg";
import cursoredes_computadores from "./../img/imgg10.jpg";


const cursos = [
    {
        'id': 1,
        'titulo': 'Curso de HTML5 e CSS3',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Iniciante",
        'duracao': '9 Horas',
        'url': cursohtml_css
    },
    {
        'id': 2,
        'titulo': 'Curso de Hardware',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Avançado",
        'duracao': '15 Horas',
        'url': cursohardware
    },
    {
        'id': 3,
        'titulo': 'Curso de Java para Iniciantes',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Intermediário",
        'duracao': '11 Horas',
        'url': cursojava
    },
    {
        'id': 4,
        'titulo': 'Marketing Digital',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Iniciante",
        'duracao': '6 Horas',
        'url': cursomarketing
    },
    {
        'id': 5,
        'titulo': 'Inglês Avançado',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Avançado",
        'duracao': '19 Horas',
        'url': cursoingles
    },
    {
        'id': 6,
        'titulo': 'Lógica de Programação',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Intermediário",
        'duracao': '10 Horas',
        'url': cursologica_programacao
    },
    {
        'id': 7,
        'titulo': 'Curso de Programação',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Avançado",
        'duracao': '15 Horas',
        'url': cursoprogramacao
    },
    {
        'id': 8,
        'titulo': 'Python para iniciantes',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Iniciante",
        'duracao': '20 Horas',
        'url': cursopython
    },
    {
        'id': 9,
        'titulo': 'Marketing Digital',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Avançado",
        'duracao': '22 Horas',
        'url': cursoreact
    },
    {
        'id': 10,
        'titulo': 'Inglês Avançado',
        'subtitulo': 'Gustavo Guanabara',
        'nivel': "Avançado",
        'duracao': '18 Horas',
        'url': cursoredes_computadores
    },
];


const Shorts = () => {

    const carousel = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    const checkCarouselPosition = () => {
        const { scrollLeft, offsetWidth, scrollWidth } = carousel.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft + offsetWidth < scrollWidth - 1 );
    };

    useEffect(() => {
        const handleScroll = () => {
            checkCarouselPosition();
        };

        carousel.current.addEventListener('scroll', handleScroll);

        return () => {
            carousel.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div className="container_shorts">

            <h1>Shorts</h1>

            <div className="carousel" ref={carousel}>
                {
                    cursos.map(item => (
                        <div className="item">
                            <div className="image">
                                <img src={item.url} alt="curso" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="buttons">
                <button onClick={handleLeftClick} className="botao1" style={{ visibility: showLeftButton ? 'visible' : 'hidden' }}>
                    <img src="/left-arrow.svg" alt="Scroll Left" />
                </button>
                <button onClick={handleRightClick} className="botao2" style={{ visibility: showRightButton ? 'visible' : 'hidden' }}>
                    <img src="/right-arrow.svg" alt="Scroll Right" />
                </button>
            </div>
        </div>
    );
};

export default Shorts;
