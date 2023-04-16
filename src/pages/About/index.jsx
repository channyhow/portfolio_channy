/* eslint-disable max-len */
import {
  TiArrowSortedDown,
} from 'react-icons/ti';

import './styles.scss';

function About() {
  return (
    <div className="about">

      <div className="about__objective">
        <h2>About me</h2>
        <p>I'm a French Front-end developer in the making, meaning, I'm still studying in school. </p>
        <p>In a not so far past life, I was living abroad working a product developer in footwear, then funded my own footwear label, which I ran from 2017 to 2021.</p>

      </div>
      <div className="about__skills">
        <h2>Skills</h2>
        <div className="about__skills-left">
          <li>
            <TiArrowSortedDown />
            CSS

          </li>
          <li>
            <TiArrowSortedDown />
            NodeJs

          </li>
          <li>
            <TiArrowSortedDown />
            JavaScript (ES6+)

          </li>
          <li>
            <TiArrowSortedDown />
            TypeScript

          </li>
          <li>
            <TiArrowSortedDown />
            React

          </li>
        </div>
        <div className="about__skills-right">
          <li>
            <TiArrowSortedDown />
            English

          </li>
          <li>
            <TiArrowSortedDown />
            French

          </li>
          <li>
            <TiArrowSortedDown />
            Mandarin

          </li>

        </div>

      </div>

      <div className="about__education">
        <p />
      </div>
      <div className="about__history">
        <p />
      </div>
    </div>

  );
}

export default About;
