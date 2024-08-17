import starRed from '../../assets/star-active.png'
import starEmpty from '../../assets/star-inactive.png'
import './Rating.css';


function Rating(stars) {

      const ratingString = [];

      for (let i = 0; i < stars.rating; i++) {
            ratingString.push(
                  <img key={"Rating" + i} src={starRed} alt={'nombre étoiles ' + stars.rating}></img>);
      }

      for (let i = stars.rating; i < 5; i++) {
            ratingString.push(
                  <img key={"Rating" + i} src={starEmpty} alt={'nombre étoiles ' + stars.rating}></img>);
      }

      return (
            <div className="rating">
                  {ratingString}
            </div>
      );
};

export default Rating;