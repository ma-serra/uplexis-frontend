import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';

const sliderData = [
    {
        image: image1,
        description: "Lorem, ipsum 1 dolor sit amet consectetur adipisicing elit. Placeat, laudantium iure aspernatur voluptatibus natus dolores fuga, doloribus, optio possimus nobis quisquam nemo excepturi illo officia? Facere, officia. Ratione, sequi libero"
    },
    {
        image: image2,
        description: "Lorem, ipsum 2 dolor sit amet consectetur adipisicing elit. Placeat, laudantium iure aspernatur voluptatibus natus dolores fuga, doloribus, optio possimus nobis quisquam nemo excepturi illo officia? Facere, officia. Ratione, sequi libero"
    },
    {
        image: image3,
        description: "Lorem, ipsum 3 dolor sit amet consectetur adipisicing elit. Placeat, laudantium iure aspernatur voluptatibus natus dolores fuga, doloribus, optio possimus nobis quisquam nemo excepturi illo officia? Facere, officia. Ratione, sequi libero"
    },
    {
        image: image4,
        description: "Lorem, ipsum 4 dolor sit amet consectetur adipisicing elit. Placeat, laudantium iure aspernatur voluptatibus natus dolores fuga, doloribus, optio possimus nobis quisquam nemo excepturi illo officia? Facere, officia. Ratione, sequi libero"
    },
];

export default function Slider() {
    const [current, setCurrent] = useState(0);
    const length = sliderData.length;

    function nextSlide() {
        setCurrent(current === length - 2 ? 0 : current + 2);
    }

    function previousSlide() {
        setCurrent(current === 0 ? length - 2 : current - 2);
    }

    useEffect(() => {
        setTimeout(() => setCurrent(current === sliderData.length - 2 ? 0 : current + 2), 5000);
    }, [current]);

    return (
        <section className="slider">
            <FaArrowLeft className="left-arrow" onClick={previousSlide} />
            <FaArrowRight className="right-arrow" onClick={nextSlide} />
            {sliderData.map((slide, index) => (
                <div className={index === current || index === current +1 ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <div className="slide__item">
                            <img src={slide.image} alt="Imagem do carrossel" />
                            <p>{slide.description}</p>
                        </div>
                    )}
                    {index === current + 1 && (
                        <div className="slide__item">
                            <img src={slide.image} alt="Imagem do carrossel" />
                            <p>{slide.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}