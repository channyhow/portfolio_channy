import './styles.scss';
// import {FaLinkedinIn} from 'react-icons/all';
function Footer() {
  return (
    <div className="footer">

      <div className="footer__left">
        {/* <a href="#" className="footer__elem">DARK</a> */}
        <a href="#" className="footer__elem">FR</a>

      </div>

      <div className="footer__right">

        <a href="mailto:channyhow@gmail.com" className="footer__elem">
          channyhow@gmail.com
          {/* <img src="./../../../icones-18.png" alt="channy contact" /> */}
        </a>
        {' '}
        <a href="https://www.linkedin.com/in/channy-h-9093255a" className="footer__elem"><img src="./../../../icones-19.png" alt="linkedin" /></a>
        {/* <a href="#" className="footer__elem"></a> */}
        à bientôt
      </div>

    </div>
  );
}

export default Footer;
