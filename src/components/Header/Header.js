import './Header.css';
import headerLogo from '../../assets/logoHeader.png'
import { Link } from 'react-router-dom';


function Banner() {
    return (
        <header className='header'>
            <img src={headerLogo} alt='headerLogo' />
            <nav className='headerLink'>
                <Link className='accueilLink' to='/'>Accueil</Link>
                <Link className='aproposLink' to='/Apropos/Apropos'>A propos</Link>
            </nav>
        </header>
    );
};

export default Banner;