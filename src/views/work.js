import React from 'react'

import { Helmet } from 'react-helmet'

import './work.css'

const Work = (props) => {
  return (
    <div className="work-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="work-work">
        <span className="work-text">
          <span>My Works</span>
        </span>
        <img
          src="/external/summerheat144-2zd-300h.png"
          alt="SummerHeat144"
          className="work-summer-heat"
        />
        <img
          src="/external/fairytales146-iy5-300h.png"
          alt="FairyTales146"
          className="work-fairy-tales"
        />
        <img
          src="/external/screenshot202308171445071168-rsgh-300h.png"
          alt="Screenshot202308171445071168"
          className="work-screenshot202308171445071"
        />
        <img
          src="/external/rectangle3218-cvus-200h.png"
          alt="Rectangle3218"
          className="work-rectangle3"
        />
        <span className="work-text2">
          <span>
            https://www.figma.com/file/JSNqg6SeMJvgucZayR0zmL/Final?type=design&amp;node-id=0-1&amp;mode=design&amp;t=ngNenrOE8LrAskQU-0
          </span>
        </span>
        <img
          src="/external/rectangle4243-8sde-200h.png"
          alt="Rectangle4243"
          className="work-rectangle4"
        />
        <span className="work-text4">
          <span>
            Wallpapers that I made.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
    </div>
  )
}

export default Work
