import './Footer.css';

function Footer() {
    return (
      <footer>
          <p>
            PAPU
          </p>
        <p>© 2021 Designet og kodet av Anna Maria Bukalska</p>
      <img src="images/icon-pinterest.png" alt="Pinterest" className="pinterest-logo" onClick={openPinterest}/>
      </footer>
    );
  }

  function openPinterest() {
    window.open('https:/pinterest.com/annamariabukalska')
  }

  export default Footer;
  