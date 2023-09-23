import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="header">
      <div className="head">
        <img src="svg/Logo.svg" alt="SCISSOR" />
        <div className="headlist">
          <ul>
            <li>
              <a href="" style={{ color: "#005ae2" }}>
                My URLs
              </a>
            </li>
            {/* <li> <a href="" style="color: #141414;">Features</a><img src="svg/Vector.svg" alt="dropdown" /></li> */}
            <label htmlFor="features">
              Features
              <select name="" id="" />
            </label>
            <li>
              <a href="" style={{ color: "#141414" }}>
                Pricing
              </a>
            </li>
            <li>
              <a href="" style={{ color: "#141414" }}>
                Analytics
              </a>
            </li>
            <li>
              <a href="" style={{ color: "#141414" }}>
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="log">
          <p>
            <a href="" style={{ color: "#005ae2" }}>
              Log In
            </a>
          </p>
          <button>
            <a href="" style={{ color: "white" }}>
              Try for free
            </a>
          </button>
        </div>
      </div>
      <div className="frame1650">
        <div className="optframe">
          <div className="optimize">
            <h3>
              Optimize Your Online Experience with Our Advanced
              <span style={{ color: "#005ae2" }}>URL Shortening</span>
              Solution
            </h3>
            <img src="svg/Vector 3.svg" alt="stroke" />
          </div>
          <p>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </div>
        <div className="btnsign">
          <button>
            <a href="" style={{ color: "white" }}>
              Sign Up
            </a>
          </button>
          <a href="">Learn more</a>
        </div>
      </div>
      <div className="group2">
        <img className="vector2" src="svg/Vector 2.svg" alt="vector2" />
        <div className="link">
          <img src="svg/Frame 1000001716.svg" alt="Frame" />
          <h6>
            Seamlessly transform your long URLs into concise and shareable links
            with just few clicks.
          </h6>
        </div>
      </div>
      <div className="group3">
        <img src="svg/Ellipse 1.svg" alt="Ellipse" />
        <img src="svg/Rectangle 9.svg" alt="Rectangle 9" />
      </div>
    </div>
  );
}

export default Hero;
