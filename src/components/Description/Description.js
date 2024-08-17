import React, { useState, useRef } from 'react';
import './Description.css'
import arrow from '../../assets/arrow_back.png'

function Description({ title, children }) {
      const [show, setShow] = useState(false);
      const parentRef = useRef(null);

      return (
            <div className='divDescri'>
                  <button className='buttonDescription' type='button' onClick={() => setShow(!show)}>
                        {title}
                        {show === true ? <img className='arrowDown' src={arrow} alt="voir la description" /> : <img className='arrowUp' src={arrow} alt="masquer la description" />}
                  </button>
                  <div
                        className="description-content"
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

export default Description;
