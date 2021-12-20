import React from "react";
import { FaChartArea, FaKey, FaStepForward } from "react-icons/fa";

const AcademyPreview = () => {
  return (
    <section>
      <div className="preview-box">
        <h1>Academy Preview</h1>
        <div className="video-card">
          <div className="videos">
            <iframe
              allowFullScreen
              className="main-video"
              title="swaggy stuff"
              // src='src="https://player.vimeo.com/video/581745495?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0#t="'
            ></iframe>
          </div>
        </div>
        <div className="option-box">
          <div className="option-box-main">
            <div>
              <span className="icons">
                <FaKey />
              </span>
            </div>
            <h3>Lifetime Access</h3>
            <p>
              Once you join, you’re a member for life, and you get access to
              every update.
            </p>
          </div>
          <div className="option-box-main">
            <div>
              <span className="icons">
                <FaStepForward />
              </span>
            </div>
            <h3>Step by Step</h3>
            <p>
              Video library, written content, quizzes, and downloadable PDFs.
            </p>
          </div>
          <div className="option-box-main">
            <div>
              <span className="icons">
                <FaChartArea />
              </span>
            </div>
            <h3>Biggest and Best</h3>
            <p>
              We’re the biggest Forex educational platform in the world. That
              isn’t for no reason.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyPreview;
