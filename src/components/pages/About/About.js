import React from 'react';

import "./About.css";

export default function About() {
  return (
    <div className="container-fluid about">
      <div><br/><br/></div>
      <h1 className="heading">Bio</h1>
      
      <p className="text-centered">
      Columbia University Coding Bootcamp Graduate
      </p>
      <div class="row align-items-start">
        <div class="col">
        
        </div>
        <div class="col">
        <img src="./images/Self.jpeg" className="img-responsive" height="300px" alt=""/>
        </div>
        <div class="col">
        </div>
      </div>
      
      <p className="text-centered">My fascination with coding started when I was a teenager learning how to customize blogs with codes on music and games. Since then, I've always wanted to learn how to produce video games and etc.</p>

      <div><br/><hl/><br/></div>

      <h1 className="heading">Skills <i className = "fa fa-code"></i></h1>
      <ul class="twocolumns">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Java</li>
          <li>JQuery</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>Express.js</li>
          <li>Node.js</li>
      </ul>

      <div><br/><br/><br/><br/><br/><br/><br/><br/></div>
    </div>
  );
}