function Navbar() {
  return (
    <div className="navbar">

      <img src="./../" className="nav__image" alt="bonjour" />
      <a href="./../html/about.html" className="header__channy"> bonjour from channy</a>

      <a href="./../html/about.html" className="navbar__list-elem">about me</a>
      <a href="./../html/random.html" className="navbar__list-elem">random stuff</a>
      <a href="./../html/contact.html" className="navbar__list-elem">contact me</a>

    </div>
  );
}

export default Navbar;
