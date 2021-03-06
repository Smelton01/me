import React from 'react';
import { Link } from 'react-router-dom';
import EmailLink from '../components/Contact/EmailLink';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Simon M Juba's personal website. Fukuoka, Japan based Information Science Graduate Student at Kyushu University"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated work in progress.
            React application written with modern Javascript.
          </p>
        </div>
      </header>
      <EmailLink />
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/smelton01/me">here</a>.</p>
    </article>
  </Main>
);

export default Index;
