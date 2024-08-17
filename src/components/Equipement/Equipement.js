import React, { useState, useRef } from 'react';
import './Equipement.css'
import arrow from '../../assets/arrow_back.png'

function Equipement({ title, children }) {
      const [show, setShow] = useState(false);
      const parentRef = useRef(null);

      return (
            <div className='divEquip'>
                  <button className='buttonEquipement' type='button' onClick={() => setShow(!show)}>
                        {title}
                        {show === true ? <img className='arrowDown' src={arrow} alt="voir les équipements" /> : <img className='arrowUp' src={arrow} alt="masquer les équipements" />}
                  </button>
                  <div
                        className="equipement-content"
                        ref={parentRef}
                        style={
                              show
                                    ? { height: parentRef.current.scrollHeight + 'px' }
                                    : { height: '0px' }
                        }
                  >
                        <div className="content">{children}</div>
                  </div>
            </div>
      );
};

export default Equipement;
