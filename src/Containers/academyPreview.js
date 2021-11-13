import React from 'react'

const AcademyPreview = () => {
    return (
      <section>
        <div className="preview-box">
          <h1>Academy Preview</h1>
          <div className="video-card">
            <div className="videos">
              <iframe
                allowFullScreen
                className='main-video'
                title="swaggy stuff"
                // src='src="https://player.vimeo.com/video/581745495?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0#t="'
              ></iframe>
            </div>
          </div>
          <div className="option-box">
            <div className="option-box-main">
              <img src="" alt="icon" />
              <h3>Lifetime Access</h3>
              <p>
                Once you join, you’re a member for life, and you get access to
                every update.
              </p>
            </div>
            <div className="option-box-main">
              <img src="" alt="icon" />
              <h3>Lifetime Access</h3>
              <p>
                Once you join, you’re a member for life, and you get access to
                every update.
              </p>
            </div>
            <div className="option-box-main">
              <img src="" alt="icon" />
              <h3>Lifetime Access</h3>
              <p>
                Once you join, you’re a member for life, and you get access to
                every update.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AcademyPreview
