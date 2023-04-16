import './styles.scss';

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar__left">
        <a href="/" className="navbar__title"><h1 className="navbar__title">bonjour from channy</h1></a>
      </div>

      <div className="navbar__right">
        <a href="/about" className="navbar__list-elem">about</a>
        <a href="mailto:channyhow@gmail.com" className="navbar__list-elem">connect</a>
      </div>

    </div>
  );
}

export default Navbar;
