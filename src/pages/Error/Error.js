import { Link } from "react-router-dom"
import "./Error.css"


function Error() {
      return (
            <div className="error">
                  <p className="numberError">404</p>
                  <p className="msgError">Oups! La page que vous demandez n'existe pas.</p>
                  <Link className="linkError" to='/'>Retourner sur la page d'accueil</Link>
            </div>
      )
}

export default Error