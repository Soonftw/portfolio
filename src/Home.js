import React, { Component } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Styles = styled.div`
  .img-thumbnail {
    border-radius: 5%;
  }
  .img-thumbnail2 {
    border-radius: 5%;
    max-width: 65%;
  }
  .fa-linkedin {
    color: #2867b2;
  }
  .fa-github {
    color: #333;
  }
  .fa-twitter {
    color: #1da1f2;
  }
  .fab {
    &:hover {
      opacity: 0.5;
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Styles>
          <section id="showcase">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <Zoom>
                  <div class="showcase-left">
                    <img
                      className="img-thumbnail"
                      src="./assets/profile2.jpg"
                      alt="Profile 2"
                    />
                  </div>
                </Zoom>
              </div>
              <Zoom>
                <div className="col-md-6 col-sm-6">
                  <div className="showcase-right">
                    <h1>Welcome to my portfolio</h1>
                    <p>
                      I am a competent and creative software engineer with with
                      a passion for mathematics, programming and education. My
                      diverse background helps me approach a wide range of
                      problem domains in a pragmatic and all-encompassing way.
                    </p>
                  </div>
                  <a
                    className="btn btn-outline-secondary btn-lg showcase-btn"
                    href="mailto:johannes.thessen@gmail.com"
                  >
                    Contact me
                  </a>
                </div>
              </Zoom>
            </div>
          </section>

          <hr className="featurette-divider" />

          <div className="container marketing">
            <div className="row">
              <Fade left>
                <div className="col-lg-5 text-center">
                  <i className="fas fa-code fa-7x" id="softwareIcon"></i>
                  <h2>Engineer</h2>
                  <p>
                    My interests range from front- to backend: Frontend-wise I
                    have done projects with HTML, CSS, Javascript and React; on
                    the backend I have experience with SQL using PostgreSQL. The
                    object-oriented languages I have used are mainly Python and
                    Java, although I have explored other paradigms such as logic
                    programming with Prolog and functional programming with
                    Haskell. Apart from my formal education I have in my spare
                    time experimented with websites, projects with Raspberry Pi,
                    Arduino, as well as explored the three main cloud services.
                  </p>
                </div>
              </Fade>
              <div className="col-lg-1"></div>
              <Fade right>
                <div className="col-lg-5 text-center">
                  <i
                    className="fas fa-chalkboard-teacher fa-7x"
                    id="teacherIcon"
                  ></i>
                  <h2>Teacher</h2>
                  <p>
                    Whether I'm in a leadership role or acting as a team member,
                    I enjoy bringing out the best in other people. No matter
                    where I end up, the most important thing for me is that it
                    is a creative workplace where I feel that I can develop and
                    help other people develop.
                  </p>
                </div>
                {/* <div className="col-lg-1"></div> */}
              </Fade>
            </div>

            <hr className="featurette-divider" />
          </div>

          {/* <section>
            <div className="row">
              <div className="col-md-6 col-sm-6 text-center icons">
                <Zoom>
                  <i className="fas fa-code fa-7x" id="softwareIcon"></i>
                  <p>
                    My interests range from front- to backend: Frontend-wise I
                    have done projects with HTML, CSS, Javascript and React; on
                    the backend I have experience with SQL using PostgreSQL. The
                    object-oriented languages I have used are mainly Python and
                    Java, although I have explored other paradigms such as logic
                    programming with Prolog and functional programming with
                    Haskell. Apart from my formal education I have in my spare
                    time experimented with websites, projects with Raspberry Pi,
                    Arduino, as well as explored the three main cloud services.
                  </p>
                </Zoom>
              </div>
              <div className="col-md-6 col-sm-6 text-center icons">
                <Zoom>
                  <i
                    className="fas fa-chalkboard-teacher fa-7x"
                    id="teacherIcon"
                  ></i>
                  <p>
                    Whether I'm in a leadership role or acting as a team member,
                    I enjoy bringing out the best in other people. No matter
                    where I end up, the most important thing for me is that it
                    is a creative workplace where I feel that I can develop and
                    help other people develop.
                  </p>
                </Zoom>
              </div>
            </div>
          </section> */}

          {/* <section id="info2">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <Fade left>
                  <div className="info-left">
                    <h2>Engineer</h2>
                    <p>
                      My interests range from front- to backend: Frontend-wise I
                      have done projects with HTML, CSS, Javascript and React;
                      on the backend I have experience with SQL using
                      PostgreSQL. The object-oriented languages I have used are
                      mainly Python and Java, although I have explored other
                      paradigms such as logic programming with Prolog and
                      functional programming with Haskell. Apart from my formal
                      education I have in my spare time experimented with
                      websites, projects with Raspberry Pi, Arduino, as well as
                      explored the three main cloud services.
                    </p>
                    <img
                    className="img-thumbnail"
                    src="assets/DSC_4420.jpg"
                    alt="profile2"
                  />
                  </div>
                </Fade>
              </div>
              <div className="col-md-6 col-sm-6">
                <Fade right>
                  <div className="info-right">
                    <h2>Teacher</h2>
                    <p>
                      Whether I'm in a leadership role or acting as a team
                      member, I enjoy bringing out the best in other people. No
                      matter where I end up, the most important thing for me is
                      that it is a creative workplace where I feel that I can
                      develop and help other people develop.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </section> */}

          <section id="info1">
            <div className="row">
              <Zoom>
                <div className="col-md-6 col-sm-6">
                  <div className="info-right">
                    <h2>Who am I?</h2>
                    <p>
                      What is most important for me is that the work is creative
                      and developing. As a person I am conscientious and
                      adaptable. I especially enjoy working in groups and
                      solving problems. My spare time is spent on video games,
                      books, and copious amounts of physical exercise (martial
                      arts and strength training have captivated the most time).
                      A couple of years ago I also realized how much I missed
                      playing the drums as a kid, and thus bought a digital drum
                      set. In recent years I have been trying to regain some
                      proficiency in the instrument.
                    </p>
                  </div>
                </div>
              </Zoom>
              <Zoom>
                <div className="col-md-5 col-sm-5">
                  <div className="info-right">
                    <img
                      className="img-fluid img-thumbnail2"
                      src="assets/profile1.jpg"
                      alt="Profile 1"
                    />
                  </div>
                  <div className="col-md-1 col-sm-1"></div>
                </div>
              </Zoom>
            </div>
          </section>

          <hr className="featurette-divider" />

          <section id="socialIcons">
            <div className="row">
              <div className="col-md-3 col-sm-3"></div>
              <div className="col-md-2 col-sm-2">
                <a href="https://www.linkedin.com/in/johannes-thess%C3%A9n-ab6235175/">
                  <i className="fab fa-linkedin fa-7x"></i>
                </a>
              </div>
              <div className="col-md-2 col-sm-2">
                <a href="https://github.com/Soonftw">
                  <i className="fab fa-github fa-7x"></i>
                </a>
              </div>
              <div className="col-md-2 col-sm-2">
                <a href="https://twitter.com/RaptorThessen">
                  <i className="fab fa-twitter fa-7x"></i>
                </a>
              </div>
              <div className="col-md-3 col-sm-3"></div>
            </div>
          </section>

          <hr className="featurette-divider" />

          {/* <Zoom>
            <section id="testimonial">
              <blockquote class="blockquote text-right">
                <p class="mb-0">"Johannes är så bra"</p>
                <footer class="blockquote-footer">
                  William Shakespeare in{" "}
                  <cite title="Source Title">New York Times</cite>
                </footer>
              </blockquote>
            </section>
          </Zoom> */}

          {/* <section id="contact">
            <div className="row">
              <div className="col-md-5">
                <form id="contact-form">
                  <div className="form-group">
                    <label>Name: </label>
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      value=""
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email: </label>
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      value=""
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message: </label>
                    <textarea
                      className="form-control"
                      name=""
                      value=""
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-outline-secondary btn-lg showcase-btn"
                    type="submit"
                    form="contact-form"
                    value="Submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-7"></div>
            </div>
          </section> */}
        </Styles>
      </React.Fragment>
    );
  }
}

export default Home;
