import React from "react";
import "./faq.css";

function Faq() {
  return (
    <div className="faqs">
      <div className="faqhead">
        <img src="svg/Line 70.svg" alt="Line 70" />
        <h5>FAQs</h5>
      </div>
      <div className="faqimg1">
        <img src="svg/Group 3faq.svg" alt="group3" />
      </div>
      <div className="faq-options">
        <div id="faq">
          <ul>
            <li>
              <input type="checkbox" defaultChecked="" />
              <i>
                <img src="svg/plus.svg" alt="" />
              </i>
              <h2>How does URL shortening work?</h2>
              <p>
                URL shortening works by taking a long URL and creating a
                shorter, condensed version that redirects to the original URL.
                When a user clicks on the shortened link, they are redirected to
                the intended destination.
              </p>
              <img src="svg/line.svg" alt="" />
            </li>
            <li>
              <input type="checkbox" defaultChecked="" />
              <i>
                <img src="svg/plus.svg" alt="" />
              </i>
              <h2>
                Is it necessary to create an account to use the URL shortening
                service?
              </h2>
              <img src="svg/line.svg" alt="" />
            </li>
            <li>
              <input type="checkbox" defaultChecked="" />
              <i>
                <img src="svg/plus.svg" alt="" />
              </i>
              <h2>Are the shortened links permanent? Will they expire?</h2>
              <img src="svg/line.svg" alt="" />
            </li>
            <li>
              <input type="checkbox" defaultChecked="" />
              <i>
                <img src="svg/plus.svg" alt="" />
              </i>
              <h2>
                Are there any limitations on the number of URLs I can shorten?
              </h2>
              <img src="svg/line.svg" alt="" />
            </li>
            <li>
              <input type="checkbox" defaultChecked="" />
              <i>
                <img src="svg/plus.svg" alt="" />
              </i>
              <h2>
                Can I customize the shortened URLs to reflect my brand or
                content?
              </h2>
              <img src="svg/line.svg" alt="" />
            </li>
            <li>
              <input type="checkbox" defaultChecked="" />
              <i>
                <img src="svg/plus.svg" alt="" />
              </i>
              <h2>Can I track the performance of my shortened URLs?</h2>
              <img src="svg/line.svg" alt="" />
            </li>
            <li>
              <input type="checkbox" defaultChecked="" />
              <i>
                <img src="svg/plus.svg" alt="" />
              </i>
              <h2>
                How secure is the URL shortening service? Are the shortened
                links protected against spam or malicious activity?
              </h2>
              <img src="svg/line.svg" alt="" />
            </li>
            <li>
              <input type="checkbox" defaultChecked="" />
              <i>
                <img src="svg/plus.svg" alt="" />
              </i>
              <h2>What is a QR code and what can it do?</h2>
              <img src="svg/line.svg" alt="" />
            </li>
            <li>
              <input type="checkbox" defaultChecked="" />
              <i>
                <img src="svg/plus.svg" alt="" />
              </i>
              <h2>
                Is there an API available for integrating the URL shortening
                service into my own applications or websites?
              </h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="faqimg2">
        <img src="svg/Group 2faq.svg" alt="group2" />
      </div>
    </div>
  );
}

export default Faq;
