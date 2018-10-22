import React, { Component } from 'react'
import Link from 'gatsby-link'
import smoothscroll from 'smoothscroll-polyfill';

import '../assets/main.css';

import Carousel from '../components/Carousel';

import introImg from '../assets/header1.jpeg';

import salon1 from '../assets/salon1.jpg';
import salon2 from '../assets/salon2.jpg';
import salon3 from '../assets/salon3.jpg';
import salon4 from '../assets/salon4.jpg';

import cover4 from '../assets/cover2.jpg';

import salonIcon from '../assets/barber.svg';
import cosmeticIcon from '../assets/cosmetics.svg';
import cameraIcon from '../assets/camera.svg';
import logo from '../assets/white-logo.png';

export default class IndexPage extends Component {
  componentDidMount() {
    //kick this polyfill into gear
    smoothscroll.polyfill();
  }
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__intro">
            {/* <h1>
              <em>The</em>Hair Source <span>Salon Suites</span>
            </h1>
            <p>
              Affordable spacious for all your business needs!
              month to month, no long term commitment required!
              perfect walking distance to everything downtown libertyville.
            </p> */}
            <div className="header__logo">
              <img src={logo} />
            </div>
            <div className="header__button">
              <button>
                <span>Contact us Today</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
          <div className="header__carousel">
            <Carousel />
            <div className="mobileBack"></div>
          </div>
        </header>
        <div className="header__caller"></div>
        <main>
          {/* section to describe comp */}
          <section className="intro">
            <div>
              <img src={cover4} />
            </div>
            <div>
              <div className="intro__wrap">
                <h2>Complete Business Bootstrapping</h2>
                <p>
                  Affordable spacious suites for all your business needs!
                  month to month, no long term commitment required!
                  Only a short 5 minute walk to everything downtown libertyville.
                </p>
                <p>
                  There's also a back entrance from the local train station directly to Salon Suites.
                  The salon complex is street view, with some street view suites available.
                </p>
              </div>
            </div>
            <div className="intro__flair"></div>
          </section>
          {/* section for icons showing solutions offered */}
          <section className="featured">
            <div>
              <h2>We offer solutions for many businesses</h2>
              <p>This list is not extensive, to confirm we supply your specialty, contact us today.</p>
            </div>
            <div>
              {/* Icons Here */}
              <div className="featured__item">
                <img src={salonIcon} />
                <h4>Barber Shops</h4>
              </div>
              <div className="featured__item">
                <img src={cosmeticIcon} />
                <h4>Beauty Parlors</h4>
              </div>
              <div className="featured__item">
                <img src={cameraIcon} />
                <h4>Photography studios</h4>
              </div>
            </div>
            <div className="featured__button">
              <a className="button" href="">
                Contact us to Discover Options
              </a>
            </div>
          </section>
          {/* section with carousel of examples of furnishing solutions */}
          <section className="suiteInfo">
            <div className="suiteInfo__list">
              <h2>You're in Complete Control of Your Suite</h2>
              <p>
                Hair Source Salon Suites will furnish your suite with NO Long-term commitment required.
                Every suite features:
              </p>
              <ul>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DB1313" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Complete control of your suite</span>
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DB1313" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  Personalize your suite
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DB1313" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  Fully furnished rooms
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DB1313" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  Complimentary Wifi
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DB1313" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  Complimentary laundry
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DB1313" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span>Includes utilities: Gas, Water, Electricity, Liability Insurance</span>
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DB1313" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  Freedom to sell product lines/retail of your choice
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DB1313" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  Freedom to share or sublease your suite at no additional cost
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DB1313" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  Suites available with street view & wide window view
                </li>
                <li>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#DB1313" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  Salon Complex is street view w/ an entrance to the train station
                </li>
              </ul>
            </div>
            <div className="suiteInfo__img">
              <img src={salon1} />
            </div>
            <div className="flair"></div>
          </section>
          {/* section about no long term commitment */}
          <section className="suiteExamples">
            <div>
              <h2>We Pride Ourselves on Design</h2>
              <p>Every suite is hand selected to fit any design scheme.</p>
            </div>
            <div>
              <div className="suiteExamples__item">
                <img src={salon2} />
              </div>
              <div className="suiteExamples__item">
                <img src={salon3} />
              </div>
              <div className="suiteExamples__item">
                <img src={salon4} />
              </div>
            </div>
          </section>
          {/* section about salon furnishing */}
          <section></section>
        </main>
        <footer className="footer">
          {/* attribute author for icons */}
          <div className="footer__info">
            {/* <img src={logo} /> */}
            <h2>Contact us today</h2>
            <p>For more information or for pricing on any of our suites,
              please contact us via phone or email using the information below. Drop by to see the suites in person today!</p>
          </div>
          <div className="footer__contact">
            <ul>
              <li>Addr.
                <span>731 N Milwaukee Ave</span>
                <span>Libertyville, IL 60048</span>
              </li>
              <li>Phone Number
                <span>(847) 573 - 1993</span>
              </li>
              <li>Email
                <span>spikeychapman@yahoo.com</span>
              </li>
              <li>Social media
                <span><a href="https://www.facebook.com/salonlibertyville">Facebook</a></span>
              </li>
            </ul>

            <form action="https://formspree.io/spikeychapman@yahoo.com" method="POST">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="_replyto" />
              </div>
              <div>
                <label htmlFor="text">Message</label>
                <textarea name="text"></textarea>
              </div>
              <div>
                <button>SEND MESSAGE</button>
              </div>
            </form>
          </div>

          <div className="footer__links">
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top</span>
            <span onClick={
              () => {
                document
                  .querySelector('.suiteExamples')
                  .scrollIntoView({
                    behavior: 'smooth'
                  })
              }
            }>Portfolio</span>
            <span onClick={
              () => {
                document
                  .querySelector('.featured')
                  .scrollIntoView({
                    behavior: 'smooth'
                  })
              }
            }>solutions</span>
          </div>
          <div className="copy">
            <span>
              Icons: <a href="https://creativemarket.com/eucalyp" rel="nofollow">Eucalyp</a>, <a href="www.flaticon.com" rel="nofollow">flaticon.com</a>
            </span>
          </div>

          <div className="footer__back"></div>
        </footer>
      </div>
    )
  }
} 
