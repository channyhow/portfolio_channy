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
          <h2 className="about__title">Hi, I'm Channy!</h2>
          <p>
            I'm a French Front-end developer in the making, meaning, I'm still studying in school.
            <br />
            In a not so far past life, I was living abroad working a product developer in footwear, then funded my own footwear label, which I ran from 2017 to 2021.
            In 2022, I came home to France and decided to broaden my horizons and get back to studying, so here I am!

            I've just started using React and I'm looking for opportunities to learn and practice more.

          </p>
        </div>

        <div className="work__history">

<div className="work__exp">
  <h1>Full stack Javascript developer</h1>
  <div className="work__details">
    <h2>O'Clock</h2>
    <h3>2022-current, Paris | France</h3>

  </div>
  <div className="work__description">
    Back to school.
  </div>
</div>
<div className="work__exp">
  <h1>Founder & Creative Director</h1>
  <div className="work__details">
    <h2>Les voyageuses</h2>
    <h3>2017 – 2021, Sydney | Australia</h3>

  </div>
  <div className="work__description">
    <li>Founded and developed a boutique footwear label focusing on noble materials.</li>
    <li>Built a business plan and strategy and raised capital to start Les voyageuses</li>
    <li>Managed a full set of processes from sketch for sample development to retail.</li>
    <li>Planned marketing strategy, content marketing, social media marketing.</li>
    <li>Created content for social, website, advertising, EDM.</li>
    <li>Developed a B2C platform on Shopify and adapted it for better customer experience</li>

  </div>

</div>
</div>

        <h2 className="about__title">Skills</h2>
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
