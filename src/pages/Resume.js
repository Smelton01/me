import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Skills from '../components/Resume/Skills';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';
import Experience from '../components/Resume/Experience';

const sections = [
  'Work Experience',
  'Education',
  'Skills',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Simon Juba's Resume. School of Information Science and Electrical Engineering, Kyushu University."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Experience data={positions} />
      <Education data={degrees} />
      <Skills skills={skills} categories={categories} />

    </article>
  </Main>
);

export default Resume;
