import './Caroussel.css'
import Vector from '../../assets/Vector.png'
import { useState } from 'react'


function Carrousel({ pictures }) {
      const [index, setIndex] = useState(0);

      const handlePrevious = () => {
            setIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
      };

      const handleNext = () => {
            setIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
      };

      return (
            <div className='caroussel'>
                  <img src={Vector} alt='Vector' className='vector' onClick={handleNext} />
                  <img className="imgCaroussel" src={pictures[index]} alt="carrouselImg" />
                  <img src={Vector} alt='Vector' className='vector_2' onClick={handlePrevious} />
                  <div className='indicator'>
                        {index + 1}/{pictures.length}
                  </div>
            </div>
      );
};

export default Carrousel;
