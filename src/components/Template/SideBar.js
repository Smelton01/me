import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Simon M Juba</h2>
        <p><a href="mailto:scimail09@gmail.com">scimail09@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Simon. I like building things.
        I am currently a Master&apos;s student in the Graduate School of lnformation Science and Electrical Engineering, <a href="https://www.isee.kyushu-u.ac.jp/">Kyushu University</a>, Currently based in Fukuoka, Japan. I am originally from Zimbabwe and I came to Japan as a <a href="https://www.studyinjapan.go.jp/en/planning/scholarship/"> MEXT Undergraduate Scholar </a> in 2015.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Simon M Juba<Link to="/">smelton01.github.io/personal-site</Link>.</p>
    </section>
  </section>
);

export default SideBar;
