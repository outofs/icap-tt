import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { XLg } from 'react-bootstrap-icons';
import { Overlay } from './Overlay';
import { useAppDispatch } from '../app/hooks';
import { hide } from '../features/art';

interface ItemInfo {
  img: string;
  title: string;
}

const items: ItemInfo[] = [
  {
    img: 'https://cdna.artstation.com/p/assets/images/images/040/717/838/large/alexandr-girych-bk-16cas.jpg?1629707262',
    title: "Betrayed King",
  },
  {
    img: 'https://cdnb.artstation.com/p/assets/images/images/045/522/859/large/alexandr-hirych-seraphim-st-16-9-1920x1080.jpg?1642940382',
    title: 'Seraphim',
  },
  {
    img: 'https://cdnb.artstation.com/p/assets/images/images/041/368/323/large/alexandr-girych-c123r.jpg?1631526524',
    title: "Cyclops",
  },
  {
    img: 'https://cdnb.artstation.com/p/assets/images/images/042/238/581/large/alexandr-girych-ct-x2.jpg?1633968149',
    title: "C'tan",
  },
  {
    img: 'https://cdnb.artstation.com/p/assets/images/images/039/439/007/large/alexandr-girych-siren-c1.jpg?1625906388',
    title: 'Siren',
  },
];

export const AboutMe = () => {
  const [index, setIndex] = useState(0);

  const disatch = useAppDispatch();

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Overlay>
      <XLg
        color='white'
        onClick={() => disatch(hide())}
        className='position-absolute top-0 end-0'
        role="button"
        size={50}
      />
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        slide={false}
        fade={true}
      >
        {items.map((item) => (
          <Carousel.Item>
            <img
              src={item.img}
              alt={item.title}
              style={{
                height: '90vh',
              }}
            />
            <Carousel.Caption>
              <p>{item.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Overlay>
  );
};
