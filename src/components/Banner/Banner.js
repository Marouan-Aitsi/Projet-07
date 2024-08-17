import './Banner.css'
import imgBanner from '../../assets/Image_1.png'

function Banner() {
      return (
            <div className='banner'>
                  <p>Chez vous, partout et ailleurs</p>
                  <img src={imgBanner} alt='imgBanner' />
            </div>
      )
}

export default Banner