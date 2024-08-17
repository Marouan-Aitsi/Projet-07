import { Link } from 'react-router-dom'
import './Card.css'


function Card({ id, title, cover }) {
      return (
            <div className='card'>
                  <Link to={'/Logement/' + id} key={id} className="idCard">
                        <img className="imgCard" src={cover} alt={`${title} cover`} />
                        <h1 className="titleCard">{title}</h1>
                  </Link>
            </div>
      )
}

export default Card