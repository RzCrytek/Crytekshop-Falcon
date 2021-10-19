import React from 'react';

import Slider from 'react-slick';

import dcComics from '../../../images/logos-collections/dc-comics.svg';
import funko from '../../../images/logos-collections/funko.svg';
import gameOfThrones from '../../../images/logos-collections/game-of-throne.svg';
import harryPotter from '../../../images/logos-collections/harry-potter.svg';
import marvel from '../../../images/logos-collections/marvel.svg';
import startWars from '../../../images/logos-collections/star-wars.svg';
import theLordOfTheRings from '../../../images/logos-collections/the-lord-of-the-rings.svg';
import umbrellaAcademy from '../../../images/logos-collections/umbrella-academy.svg';

const arrayLogos = [
  {
    src: dcComics,
    alt: 'Dc Comics',
  },
  {
    src: funko,
    alt: 'Funko',
  },
  {
    src: gameOfThrones,
    alt: 'Game of Thrones',
  },
  {
    src: harryPotter,
    alt: 'Harry Potter',
  },
  {
    src: marvel,
    alt: 'Marvel',
  },
  {
    src: startWars,
    alt: 'Start Wars',
  },
  {
    src: theLordOfTheRings,
    alt: 'The Lord Of The Rings',
  },
  {
    src: umbrellaAcademy,
    alt: 'Umbrella Academy',
  },
];

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
  infinite: true,
  centerMode: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  // cssEase: 'linear',
};

const RangeCollections = () => {
  return (
    <section id="range-collections">
      <Slider {...settings}>
        {arrayLogos.map((logo, index) => (
          <picture key={index}>
            <img src={logo.src} alt={logo.alt} />
          </picture>
        ))}
      </Slider>
    </section>
  );
};

export default RangeCollections;
