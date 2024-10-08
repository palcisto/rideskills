import * as React from 'react';
import RSLogo from './svg/rs-logo';
import LongS from './svg/long-s';
import * as styles from '../styles/homepage.module.css';

interface HomepageProps {}

export default function Homepage(props: HomepageProps) {
  return (
    <div>
      <header>
        <RSLogo className="logo" />
        <ul>
          <li>Book A Lesson</li>
          <li>Testimonials</li>
        </ul>
        <button className="menu-toggle">
          <span className="visually-hidden">Toggle Menu</span>
        </button>
      </header>
      <section>
        <h1>Ride With Confidence</h1>
        <p>
          At Ride Skills, we believe a confident rider is a better rider and a
          better rider is a happier rider.
        </p>
        {/* <p>As a result, we offer an exciting program where you can learn to ride safely and comfortably.</p> */}
        <a href="#">Book A Lesson</a>
      </section>

      <main>
        <section>
          <div>
            <svg></svg>
            <h2>Private Mountain Bike Lesson</h2>
            <ul>
              <li>Personalized coaching</li>
              <li>1-4 people of all ability levels</li>
              <li>2 hour minimum</li>
            </ul>
            <p>
              1 on 1 bike mountain bike coaching is the quickest way to increase
              your mtb skill set. We can work on what you want to learn if you
              have something specific in mind or I can come up with a lesson
              plan through the use of a questionnaire and skills assessment.
            </p>
            <a href="">Book Now</a>
          </div>
          <div>
            <svg></svg>
            <h2>Group Mountain Bike Lesson</h2>
            <ul>
              <li>Personalized coaching</li>
              <li>5-7 people of all ability levels</li>
              <li>3 hour minimum</li>
            </ul>
            <p>
              1 on 1 bike mountain bike coaching is the quickest way to increase
              your mtb skill set. We can work on what you want to learn if you
              have something specific in mind or I can come up with a lesson
              plan through the use of a questionnaire and skills assessment.
            </p>
            <a href="">Book Now</a>
          </div>
        </section>
      </main>

      <footer>
        <RSLogo className="logo" />
        <ul>
          <li>Book A Lesson</li>
          <li>Testimonials</li>
        </ul>
        <p>
          <span>Ride Skills, LLC</span>
          <span>Charlotte, NC</span>
          <a href="tel:1-704-559-9202">(704) 559-9202</a>
        </p>
        <p>
          Find us on Instagram!
          <a href="https://www.instagram.com/rideskills.bike/">
            <svg className="instagram"></svg>
          </a>
        </p>
      </footer>

      <button>
        <span>To Top</span>
      </button>
    </div>
  );
}
