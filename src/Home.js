import React, { Component } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Styles = styled.div`
  .img-thumbnail {
    border-radius: 5%;
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
              <Fade right>
                <div className="col-md-6 col-sm-6">
                  <div className="showcase-right">
                    <h1>Welcome to my portfolio</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium dolorem earum natus at nisi? Provident numquam
                      quod expedita placeat nisi praesentium, amet, quasi
                      incidunt in, neque facilis quaerat tenetur odio.
                    </p>
                  </div>
                  <button className="btn btn-outline-secondary btn-lg showcase-btn">
                    Read More
                  </button>
                </div>
              </Fade>
            </div>
          </section>

          <Zoom>
            <section id="testimonial">
              <blockquote class="blockquote text-right">
                <p class="mb-0">"Johannes är så bra"</p>
                <footer class="blockquote-footer">
                  William Shakespeare in{" "}
                  <cite title="Source Title">New York Times</cite>
                </footer>
              </blockquote>
            </section>
          </Zoom>

          <section id="info1">
            <div className="row">
              <Zoom>
                <div className="col-md-6 col-sm-6">
                  <div className="info-left">
                    <h2>See my previous work</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, cum vitae? Incidunt amet odit perferendis
                      accusantium modi? Delectus sapiente id at tempora dolore
                      vero, numquam, reprehenderit, illo necessitatibus cum
                      laborum.
                    </p>
                  </div>
                </div>
              </Zoom>
              <Zoom>
                <div className="col-md-6 col-sm-6">
                  <div className="info-right">
                    <img
                      className="img-thumbnail"
                      src="assets/profile1.jpg"
                      alt="Profile 1"
                    />
                  </div>
                </div>
              </Zoom>
            </div>
          </section>

          <section id="info2">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <Fade left>
                  <div className="info-left">
                    <h2>Info Block</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, cum vitae? Incidunt amet odit perferendis
                      accusantium modi? Delectus sapiente id at tempora dolore
                      vero, numquam, reprehenderit, illo necessitatibus cum
                      laborum.
                    </p>
                    {/* <img
                    className="img-thumbnail"
                    src="assets/DSC_4420.jpg"
                    alt="profile2"
                  /> */}
                  </div>
                </Fade>
              </div>
              <div className="col-md-6 col-sm-6">
                <Fade right>
                  <div className="info-right">
                    <h2>Info Block</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, cum vitae? Incidunt amet odit perferendis
                      accusantium modi? Delectus sapiente id at tempora dolore
                      vero, numquam, reprehenderit, illo necessitatibus cum
                      laborum.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </section>

          <section id="contact">
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
          </section>

          <footer>
            <p className="text-center">Copyright &copy; 2020</p>
          </footer>
        </Styles>
      </React.Fragment>
    );
  }
}

export default Home;
