/* eslint-disable max-len */
import {
  RiArrowDropRightFill, RiArrowDropLeftFill,
} from 'react-icons/ri';
import './styles.scss';

function About() {
  return (
    <div className="about">

      <div className="about__container">
        <div className="about__objective">
          <h2 className="about__header">Hi, I'm Channy!</h2>

          <section>
            I'm a French full stack JavaScript developer in the making, meaning I am back in school studying Javascript.
          </section>

          <section>
            In a not so far past life, I was living
            <span> in China </span>
            working as a product developer in footwear, then funded my own footwear label in Hong Kong, which I ran from
            {' '}
            <span>2017 to 2021. </span>
            In 2022, I came home to France, thought it was time to broaden my horizons and change directions, so here I am!
          </section>

          <section>
            I've only started in December of 2022, so I'm a full newbie in most technologies, however I'm pretty keen on
            {' '}
            <span>React, I've used Express, NodeJs, Sequelize, EJS, Typescript,</span>
            {' '}
            although I'm not yet an expert.
            It is after all, only the beginning of what I hope will be a great adventure.
          </section>

        </div>

        {/* <div className="about__education">

          <div className="about__exp">

            <div className="about__details">
              <h1>Full stack Javascript developer training</h1>
              <a href="https://oclock.io/"><h2>O'Clock</h2></a>
              <h3>2022-current, Paris | France</h3>

            </div>
            <div className="about__description">
              Back to school. Training to be a JS Full stack web dev.
            </div>
          </div>

          <div className="about__exp">

            <div className="about__details">
              <h1>Chinese Language Studies Associate degree</h1>
              <a href="http://english.blcu.edu.cn/">
                <h2>Beijing Language and Culture University</h2>
              </a>
              <h3>2009-2011, Beijing | China </h3>
            </div>
          </div>
        </div>

        <div className="about__exp">

          <div className="about__details">
            <h1>Marketing and Advertising</h1>
            <a href="https://www.iscom.fr/">
              <h2>ISCOM</h2>
            </a>
            <h3>2005-2008, Paris | France </h3>
          </div>
        </div> */}

        <h2 className="about__header">Skills</h2>
        <div className="about__skills">
          <div className="about__left">
            <ul>
              <li>
                CSS
                <RiArrowDropLeftFill />
              </li>
              <li>
                NodeJs
                <RiArrowDropLeftFill />
              </li>
              <li>
                JavaScript (ES6+)
                <RiArrowDropLeftFill />
              </li>
              <li>
                TypeScript
                <RiArrowDropLeftFill />
              </li>
            </ul>
          </div>

          <div className="about__right">
            <ul>
              <li>
                <RiArrowDropRightFill />
                React
              </li>
              <li>
                <RiArrowDropRightFill />
                English
              </li>
              <li>
                <RiArrowDropRightFill />
                French
              </li>
              <li>
                <RiArrowDropRightFill />
                Mandarin
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
