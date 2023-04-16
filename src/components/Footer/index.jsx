import './styles.scss';
import {
  FaLinkedinIn, FaEnvelope, FaMoon, FaSun,
} from 'react-icons/fa';
import { GiMonsteraLeaf } from 'react-icons/gi';

function Footer() {
  return (
    <div className="footer">

      <div className="footer__left">
        <a href="#" className="footer__darkmode">
          <FaMoon />
        </a>

      </div>

      <div className="footer__right">

        <a href="mailto:channyhow@gmail.com" className="footer__elem">
          <FaEnvelope />
        </a>

        <a href="https://www.linkedin.com/in/channy-h-9093255a" className="footer__elem">
          <FaLinkedinIn />
        </a>

        <a href="/" className="footer__bye"><GiMonsteraLeaf /></a>
      </div>

    </div>
  );
}

export default Footer;
