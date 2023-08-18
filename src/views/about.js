import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="about-about">
        <span className="about-text">
          <span>About Me</span>
        </span>
        <img
          src="/external/rectangle1202-635c-600h.png"
          alt="Rectangle1202"
          className="about-rectangle1"
        />
        <span className="about-text2">
          <span>
            <span>
              I&apos;m a 19-year-old student from Glovertown, Newfoundland, and
              I&apos;m really into graphic design. I&apos;m a bit quiet when you
              first meet me, but once we get talking, I can chat up a storm.
              Designing is my thing, especially websites. I&apos;ve got a good
              sense for what people like and how they feel, which helps me
              create simple and minimalist designs that click.
            </span>
            <br></br>
            <span>
              I love the whole less-is-more vibe, and I&apos;m all about making
              things look clean and stylish. I might not be the loudest voice,
              but my designs do the talking for me. Websites are my jam, and
              I&apos;m not just about the looks – I&apos;m into making them easy
              to use too. I like playing around with how things work and making
              them look cool at the same time.
            </span>
            <br></br>
            <span>
              I keep an eye on the latest design trends and tools to stay in the
              loop. Whether I turn this passion into a job or not, I&apos;m just
              enjoying the ride. If you want to talk about graphic design, web
              design, or anything like that, I&apos;m all ears!
            </span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default About
