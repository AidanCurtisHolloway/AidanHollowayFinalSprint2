import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-home">
        <img
          src="/external/summerheat217-n3wc-1600w.png"
          alt="SummerHeat217"
          className="home-summer-heat"
        />
        <span className="home-text">
          <span>Hi</span>
        </span>
        <span className="home-text2">
          <span>I’m Aidan Holloway</span>
        </span>
        <span className="home-text4">
          <span>I’m a UI/UX Designer, and Graphic Designer</span>
        </span>
        <img
          src="/external/img202306242204221242-sg7c-500w.png"
          alt="IMG202306242204221242"
          className="home-img202306242204221"
        />
      </div>
    </div>
  )
}

export default Home
