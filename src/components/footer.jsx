import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="imgfoot1">
        <img src="svg/Group 3fot.svg" alt="img-foot" />
      </div>
      <div className="footerbody">
        <div className="socials">
          <img src="svg/Logo.svg" alt="Logo" />
          <img src="svg/socials.svg" alt="socials" />
        </div>
        <div className="footermain">
          <div className="f1">
            <div className="whysciccors">
              <p>Why Scissor?</p>
              <li>Scissor 101</li>
              <li>Integrations and API</li>
              <li>Pricing</li>
            </div>
            <div className="resources">
              <p>Resources</p>
              <li>Blog</li>
              <li>Resource Library</li>
              <li>Developers</li>
              <li>App Connectors</li>
              <li>Support</li>
              <li>Trust Center</li>
              <li>Browser Extension</li>
              <li>Mobile App</li>
            </div>
          </div>
          <div className="f2">
            <div className="solutions">
              <p>Solutions</p>
              <li>Social Media</li>
              <li>Digital Marketing</li>
              <li>Customer Service</li>
              <li>For Developers</li>
            </div>
            <div className="features">
              <p>Features</p>
              <li>Branded Links</li>
              <li>Mobile Links</li>
              <li>Campaign</li>
              <li>Management and Analytics</li>
              <li>QR Code Generation</li>
            </div>
          </div>
          <div className="f3">
            <div className="products">
              <p>Products</p>
              <li>Link Management</li>
              <li>QR Codes</li>
              <li>Link-In-Bio</li>
            </div>
            <div className="legal">
              <p>Legal</p>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Term of Service</li>
              <li>Acceptable Use Policy</li>
              <li>Code of Conduct</li>
            </div>
          </div>
          <div className="f4">
            <div className="company">
              <p>Company</p>
              <li>About Scissor</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Press</li>
              <li>Contact</li>
              <li>Review</li>
            </div>
          </div>
        </div>
      </div>
      <div className="imgfoot2">
        <img src="svg/Group 2foot.svg" alt="" />
      </div>
      <div className="term">
        <h6>
          Term of Use <img src="svg/Vector 5.svg" alt="vector5" />
        </h6>
        <h6>
          Security <img src="svg/Vector 5.svg" alt="vector5" />
        </h6>
        <h6>© Scissor 2023</h6>
      </div>
    </div>
  );
}

export default Footer;
