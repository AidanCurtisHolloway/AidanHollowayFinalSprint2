import React from 'react'

import { Helmet } from 'react-helmet'

import './contacts.css'

const Contacts = (props) => {
  return (
    <div className="contacts-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="contacts-contacts">
        <span className="contacts-text">
          <span>Contact Me</span>
        </span>
        <img
          src="/external/rectangle2213-rmjg-1100w.png"
          alt="Rectangle2213"
          className="contacts-rectangle2"
        />
        <span className="contacts-text2">
          <span>aidan.holloway@keyin.com</span>
        </span>
        <span className="contacts-text4">
          <span>1(709)533-7316</span>
        </span>
      </div>
    </div>
  )
}

export default Contacts
