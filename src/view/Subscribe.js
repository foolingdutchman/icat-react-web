import React from "react";

function Subscirbe() {
  return (
    <>
      <section id="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    <i className="fa fa-envelope-o"></i> SUBSCRIBE TO OUR NEWSLETTER
                  </h2>
                  <p>
                    Join our community by subscribe our newsletter.
                    <br /> Also Please follow our twetter and join out telegram
                    and discord channel.
                  </p>
                </div>
                <div className="col-sm-6 newsletter">
                  <form id="newsletter">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value=""
                      placeholder="Enter Your email"
                    />
                    <i className="fa fa-check"></i>
                  </form>
                  <p>Don't worry we will not use your email for spam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscirbe;
