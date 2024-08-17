import Description from "../../components/Description/Description";
import './Apropos.css'
import imgApropos from '../../assets/img-Apropos.png'

function Apropos() {

      const fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
      const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
      const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
      const sécurité = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

      return (
            <div>
                  <img src={imgApropos} className="imgApropos" alt="imageApropos" />
                  <div className="aProposBtn">
                        <Description title="Fiabilité">{fiabilité}</Description>
                        <Description title="Respect">{respect}</Description>
                        <Description title="Service">{service}</Description>
                        <Description title="Sécurité">{sécurité}</Description>
                  </div>
            </div>
      )
}

export default Apropos