import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import logements from '../../datas/logements.json';
import Description from '../../components/Description/Description'
import './Logement.css'
import Equipement from '../../components/Equipement/Equipement'
import Tags from '../../components/Tags/Tags'
import Rating from '../../components/Rating/Rating'
import Caroussel from '../../components/Caroussel/Caroussel';
import Host from '../../components/Host/Host'

function Logement() {
      const { id } = useParams();
      const logement = logements.find(logement => logement.id === id);

      if (!logement) {
            return <Navigate to='/Error' />;
      }

      return (
            <div className="logement">
                  <Caroussel pictures={logement.pictures} />
                  <h1 className='titleLogement'>{logement.title}</h1>
                  <p>{logement.location}</p>
                  <Tags tags={logement.tags} />
                  <div className='host-rating'>
                        <Host name={logement.host && logement.host.name} img={logement.host && logement.host.picture} />
                        <Rating rating={logement.rating} />
                  </div>
                  <div className='btn'>
                        <Description title="Description">
                              {logement.description}
                        </Description>
                        <Equipement title="Equipement">
                              {logement.equipments.map((logements) => (
                                    <div key={logements}>{logements}</div>
                              ))}
                        </Equipement>
                  </div>
            </div>
      );
}

export default Logement;
