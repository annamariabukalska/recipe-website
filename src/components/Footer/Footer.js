import './Footer.css';

function Footer() {
    return (
      <footer>
          <h2>
            PAPU
          </h2>
        <p className="copyright">© 2021 Designet og kodet av Anna Maria Bukalska</p>
      <img src="images/icon-pinterest.png" alt="Pinterest" className="pinterest-logo" onClick={openPinterest}/>
      </footer>
    );
  }

  function openPinterest() {
    window.open('https://no.pinterest.com/annamariabukals/')
  }

  export default Footer;
  