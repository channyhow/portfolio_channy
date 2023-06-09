import './styles.scss';
import {
  FaLinkedinIn, FaEnvelope, FaMoon, FaSun,
} from 'react-icons/fa';
import {
  GrLocation,
} from 'react-icons/gr';
import { GiMonsteraLeaf } from 'react-icons/gi';

function Footer() {
  return (
    <div className="footer">

      <div className="footer__left">
        {/* <a href="#" className="footer__darkmode"> */}
        {/* <FaMoon /> */}
        {/* </a> */}
        <a href="https://www.paris.fr/">
          <GrLocation />
        </a>
        <span>Paris</span>
      </div>

      <div className="footer__right">

        <a href="mailto:channyhow@gmail.com" className="footer__elem">
          <FaEnvelope />
        </a>

        <a href="https://www.linkedin.com/in/channy-how" className="footer__elem">
          <FaLinkedinIn />
        </a>

        <a href="/" className="footer__bye"><GiMonsteraLeaf /></a>
      </div>

    </div>
  );
}

export default Footer;
