import React from "react";
import "./desktopTen.css"

function DesktopTen() {
  return (
    <div className="desktop10">
      <div className="desk1">
        <div className="dsk1">
          <h4>
            One Stop. <br />
            Four <span style={{ color: "#005ae2" }}>Possibilities.</span>
          </h4>
        </div>
        <div className="m3">
          <div className="dsk2">
            <div className="dsk21">
              <h4>3M</h4>
              <h6>Active Users</h6>
            </div>
            <div className="dsk22">
              <h4>6M</h4>
              <h6>Links &amp; QR codes created</h6>
            </div>
          </div>
          <div className="dsk3">
            <div className="dsk31">
              <h4>1B</h4>
              <h6>Clicked &amp; Scanned Connections</h6>
            </div>
            <div className="dsk32">
              <h4>300K</h4>
              <h6>App Integrations</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="whychoose">
        <div className="choose1">
          <div className="choosehead">
            <img src="svg/Line 70.svg" alt="Line 70" />
            <h3>
              Why choose <span style={{ color: "#005ae2" }}>Scissors.</span>
            </h3>
          </div>
          <p>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>
        <div className="choose2">
          <div className="url">
            <div className="shortening">
              <img src="svg/Group 6.svg" alt="Group 6" />
              <div className="shortening1">
                <a href="">URL Shortening</a>
                <p>
                  Scissor allows you to shorten URLs of your business, events.
                  Shorten your URL at scale, URL redirects.
                </p>
              </div>
            </div>
            <div className="custom">
              <img src="svg/Frame 1000001695.svg" alt="Frame 1695" />
              <div className="custom1">
                <a href="">Custom URLs</a>
                <p>
                  With Scissor, you can create custom URLs, with the length you
                  want! A solution for socials and businesses.
                </p>
              </div>
            </div>
          </div>
          <div className="qrcodes">
            <div className="qr">
              <img src="svg/Frame 10000016951.svg" alt="Frame QR" />
              <div className="qr1">
                <a href="">QR codes</a>
                <p>
                  Generate QR codes to your business, events. Bring your
                  audience and customers to your doorstep with this scan and go
                  solution.
                </p>
              </div>
            </div>
            <div className="data">
              <img src="svg/Group 6q.svg" alt="Data" />
              <div className="data1">
                <a href="">Data Analytics</a>
                <p>
                  Receive data on the usage of either your shortened URL, custom
                  URLs or generated QR codes. Embedded to monitor progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopTen;