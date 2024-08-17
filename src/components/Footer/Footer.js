import './Footer.css'
import footerLogo from '../../assets/logoFooter.png'

function Footer() {
      return (
            <footer>
                  <img src={footerLogo} alt='footerLogo' />
                  <p>© 2020 Kasa. All rights reserved</p>
            </footer>
      )
}

export default Footer