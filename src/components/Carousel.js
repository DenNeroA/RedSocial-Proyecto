import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagen from '../imagenes/image.png';
import imagen2 from '../imagenes/image2.png';
import imagen4 from '../imagenes/imagen4.png';
import imagen5 from '../imagenes/imagen5.png';
import imagen6 from '../imagenes/imagen6.png';
import imagen8 from '../imagenes/imagen8.png';
import person1 from '../imagenes/persona1.png';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const imageStyle = {
    width: '80%', // Reducir el tamaño de las imágenes
    height: 'auto', // Mantener la proporción de aspecto
    objectFit: 'cover', // Para asegurarse de que la imagen cubra todo el espacio del contenedor
    borderRadius: '10px', // Bordes redondeados para un aspecto más atractivo
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombra ligera para resaltar las imágenes
  };

  return (
    <Slider {...settings} className="carousel">
      <div className="carousel-item">
        <img src={person1} alt="Person 1" style={imageStyle} />
      </div>
      <div className="carousel-item">
        <img src={imagen} alt="imagen" style={imageStyle} />
      </div>
      <div className="carousel-item">
        <img src={imagen2} alt="imagen2" style={imageStyle} />
      </div>
      <div className="carousel-item">
        <img src={imagen4} alt="imagen4" style={imageStyle} />
      </div>
      <div className="carousel-item">
        <img src={imagen5} alt="imagen5" style={imageStyle} />
      </div>
      <div className="carousel-item">
        <img src={imagen6} alt="imagen6" style={imageStyle} />
      </div>
      <div className="carousel-item">
        <img src={imagen8} alt="imagen8" style={imageStyle} />
      </div>
    </Slider>
  );
}

export default Carousel;
