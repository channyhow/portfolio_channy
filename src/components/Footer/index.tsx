import './styles.scss';
// import {FaLinkedinIn} from 'react-icons/all';
function Footer() {
  return (
    <div className="navbar">

      <div className="footer__left">
        <a href="#" className="footer__elem">DARK</a>
        <a href="#" className="footer__elem">FR</a>

      </div>

      <div className="footer__right">
        <p>à bientôt!</p>
        <a href="https://www.linkedin.com/in/channy-h-9093255a" className="footer__elem"><img src="./../../../bonjour icones_icon linkedin.png" alt="linkedin" /></a>
        <a href="mailto:channyhow@gmail.com" className="footer__elem"><img src="./../../../bonjour icones_icon mail.png" alt="channy contact" /></a>
      </div>

    </div>
  );
}

export default Footer;
