import React from "react";
import "./desktopEleven.css";

function DesktopEleven() {
  return (
    <div className="desktop11">
      <div className="dsk11img">
        <img src="svg/Group 3.svg" alt="Group 3" />
      </div>
      <div className="img11">
        <img src="svg/Group 2.svg" alt="Group 2" />
      </div>
      <div className="dsk11">
        <div className="form">
          <div className="form1">
            <input type="text" placeholder="Paste URL here..." />
          </div>
          <div className="form2">
            <input type="text" placeholder="Choose Domain " />
            <input type="text" placeholder="Type Alias here" />
          </div>
        </div>
        <div className="trimurl">
          <button>
            <a href="" style={{ color: "white" }}>
              {" "}
              Trim URL{" "}
            </a>
            <img src="svg/Vector 1.svg" alt="Wand" />
          </button>
          <div className="clicking">
            <p>
              By clicking TrimURL, I agree to the
              <span style={{ fontWeight: "bold" }}>
                term of Service, Privacy Policy
              </span>
              and Use of Cookies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopEleven;
