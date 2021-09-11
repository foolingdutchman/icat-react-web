import React from "react";

function Action() {
  return (
    <>
      <section id="action" className="responsive">
        <div className="vertical-center">
          <div className="container">
            <div className="row">
              <div className="action take-tour">
                <div
                  className="col-sm-7 wow fadeInLeft"
                  data-wow-duration="500ms"
                  data-wow-delay="300ms"
                >
                  <h1 className="title">Participate our Airdrop!</h1>
                  <p>Join our community to get the free airdrop icat.</p>
                </div>
                <div
                  className="col-sm-5 text-center wow fadeInRight"
                  data-wow-duration="500ms"
                  data-wow-delay="300ms"
                >
                  <div className="tour-button">
                    <a href="#airdrop" className="btn btn-common">
                      TAKE THE TOUR
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Action;
