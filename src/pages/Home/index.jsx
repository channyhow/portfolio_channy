/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './styles.scss';

function Home() {
  return (

    <div className="home">
      Hi there!
      <div className="home__name"> I'm Channy How,</div>
      nice to meet you!
      <div className="home__info">
        I'm a Front-end developer in the making
        <div>
          and I'm looking for an
          <span> internship!</span>
        </div>

      </div>
    </div>

  );
}

export default Home;
