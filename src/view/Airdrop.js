import React from "react";
function Airdrop() {
  return (
    <>
      <section id="airdrop">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="text-center coming-content">
                <h1>Airdrop</h1>
                <p>
                  As the mainet canister deployed, 10000 NFT cat will be
                  automatically minted, we will airdrop 5000 ICAT to our fans.
                  <br />
                  Please subscirbe our newsletter and join our social channel to
                  stay up to date.
                </p>
                <div className="social-link">
                  <span>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="time-count">
                <ul id="countdown">
                  <li className="angle-one">
                    <span className="days time-font">00</span>
                    <p>Days</p>
                  </li>
                  <li className="angle-two">
                    <span className="hours time-font">00</span>
                    <p>Hours</p>
                  </li>
                  <li className="angle-three">
                    <span className="minutes time-font">00</span>
                    <p className="minute">Mins</p>
                  </li>
                  <li className="angle-four">
                    <span className="seconds time-font">00</span>
                    <p>Secs</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Airdrop;
