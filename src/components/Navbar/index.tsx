import './styles.scss';

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar__left">
        {/* <img src="./../../../-.png" className="navbar__logo" alt="bonjour" /> */}
        <a href="#about" className="navbar__title"><h1 className="navbar__title">bonjour from channy</h1></a>
      </div>

      <div className="navbar__right">
        <a href="./../html/about.html" className="navbar__list-elem">about me</a>
        <a href="./../html/random.html" className="navbar__list-elem">random stuff</a>
        <a href="./../html/contact.html" className="navbar__list-elem">contact me</a>
      </div>

    </div>
  );
}

export default Navbar;
