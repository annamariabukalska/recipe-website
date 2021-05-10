import './Footer.css';
import pinterestImage from '../../resources/icon-pinterest.png';

function Footer() {
    return (
      <footer>
          <p>
            PAPU
          </p>
      <copyright>
        <p>© 2021 Designet og kodet av Anna Maria Bukalska</p>
      </copyright>
      <img src={pinterestImage} alt="Pinterest" className="pinterest-logo" onClick={openPinterest}/>
      </footer>
    );
  }

  function openPinterest() {
    window.open('https:/pinterest.com/annamariabukalska')
  }

  export default Footer;
  