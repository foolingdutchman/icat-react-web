import React from "react";
import image1 from "../images/home/image1.png";
import image2 from "../images/home/image2.png";
import image3 from "../images/home/image3.png";
function Features() {
  return (
    <>
      <section id="features">
        <div className="container">
          <div className="row">
            <div className="single-features">
              <div
                className="col-sm-5 wow fadeInLeft"
                data-wow-duration="500ms"
                data-wow-delay="300ms"
              >
                <img src={image1} className="img-responsive" alt="" />
              </div>
              <div
                className="col-sm-6 wow fadeInRight"
                data-wow-duration="500ms"
                data-wow-delay="300ms"
              >
                <h2>A PET GAME</h2>
                <p>
                  It is a pet game, you need to take care of your pet ,as feed
                  water, food, play with it,to make it happy and healthy.
                </p>
              </div>
            </div>
            <div className="single-features">
              <div
                className="col-sm-6 col-sm-offset-1 align-right wow fadeInLeft"
                data-wow-duration="500ms"
                data-wow-delay="300ms"
              >
                <h2>Token in the Game</h2>
                <p>
                  All supplies as water,food,music etc is not free for you in
                  the game, you need to use a in game token named as shitcoin to
                  buy them for your pet.
                </p>
              </div>
              <div
                className="col-sm-5 wow fadeInRight"
                data-wow-duration="500ms"
                data-wow-delay="300ms"
              >
                <img src={image2} className="img-responsive" alt="" />
              </div>
            </div>
            <div className="single-features">
              <div
                className="col-sm-5 wow fadeInLeft"
                data-wow-duration="500ms"
                data-wow-delay="300ms"
              >
                <img src={image3} className="img-responsive" alt="" />
              </div>
              <div
                className="col-sm-6 wow fadeInRight"
                data-wow-duration="500ms"
                data-wow-delay="300ms"
              >
                <h2>Productivity</h2>
                <p>
                  The female cat can produce new cat by company with a male cat,
                  the more healthy and happy parents has more possibility to
                  produce a new baby cat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
