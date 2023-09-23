import React from "react";
import "./desktopOne.css";

function DesktopOne() {
  return (
    <div className="desktop1">
      <div className="priceperfect">
        <img src="svg/Line 70.svg" alt="Line 70" />
        <div className="perfect">
          <h5>
            A <span style={{ color: "#005ae2" }}>price perfect</span> for your
            needs.
          </h5>
          <p>
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </div>
      </div>
      <div className="dsk1card">
        <div className="basic">
          <h5>Basic</h5>
          <div className="free">
            <div className="freeplan">
              <h4>Free</h4>
              <p>Free plan for all users</p>
            </div>
            <div className="unlimitedlist">
              <div className="unlimited">
                <img src="svg/check-circle.svg" alt="check-circle" />
                <p>Unlimited URL Shortening</p>
              </div>
              <div className="basiclnk">
                <img src="svg/check-circle.svg" alt="check-circle" />
                <p>Basic Link Analytics</p>
              </div>
              <div className="shortlnk">
                <img src="svg/check-circle.svg" alt="check-circle" />
                <p>Customizable Short Links</p>
              </div>
              <div className="standard">
                <img src="svg/check-circle.svg" alt="check-circle" />
                <p>Standard Support</p>
              </div>
              <div className="ads">
                <img src="svg/check-circle.svg" alt="check-circle" />
                <p>Ad-supported</p>
              </div>
            </div>
          </div>
        </div>
        <div className="professional">
          <h5>Professional</h5>
          <div className="month5">
            <div className="month5head">
              <h4>$15/month</h4>
              <p>Ideal for business creators</p>
            </div>
            <div className="month5body">
              <div className="enhanced">
                <img src="svg/check-circle-white.svg" alt="check-circle" />
                <p>Enhanced Link Analytics</p>
              </div>
              <div className="domains">
                <img src="svg/check-circle-white.svg" alt="check-circle" />
                <p>Custom Branded Domains</p>
              </div>
              <div className="advanced">
                <img src="svg/check-circle-white.svg" alt="check-circle" />
                <p>Advanced Link Customization</p>
              </div>
              <div className="support">
                <img src="svg/check-circle-white.svg" alt="check-circle" />
                <p>Priority Support</p>
              </div>
              <div className="experience">
                <img src="svg/check-circle-white.svg" alt="check-circle" />
                <p>Ad-free Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="teams">
          <h5>Teams</h5>
          <div className="month25">
            <div className="share10">
              <h4>$25/month</h4>
              <p>Share with up to 10 users</p>
            </div>
            <div className="month25list">
              <div className="teamc">
                <img src="svg/check-circle.svg" alt="check-circle" />
                <p>Team Collaboration</p>
              </div>
              <div className="roles">
                <img src="svg/check-circle.svg" alt="check-circle" />
                <p>User Roles and Permission</p>
              </div>
              <div className="security">
                <img src="svg/check-circle.svg" alt="check-circle" />
                <p>Enhanced Security</p>
              </div>
              <div className="api">
                <img src="svg/check-circle.svg" alt="check-circle" />
                <p>API Accesst</p>
              </div>
              <div className="dedicated">
                <img src="svg/check-circle.svg" alt="check-circle" />
                <p>Dedicated Account Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardbutton">
        <button>Get Custom Pricing</button>
        <button>Select Pricing</button>
      </div>
    </div>
  );
}

export default DesktopOne;
