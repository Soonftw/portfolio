import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .img-thumbnail {
  }
  .skills-and-merits {
    margin-left: -20px;
  }
`;
export const CV = () => (
  <Styles>
    <dl className="row">
      <dt className="col-md-3">
        <img
          src="assets/profile1_cropped.jpg"
          alt="Portrait of me"
          className="img-thumbnail"
        />
      </dt>
      <dd className="col-md-8">
        <p className="text-justify text-right">+46 763 755 890</p>
        <p className="text-justify text-right">johannes.thessen@gmail.com</p>
      </dd>
      <dt className="col-md-12">
        <hr />
        <h3 className="text-center">Education</h3>
        <br />
      </dt>
      <dt className="col-md-3">
        <h5>2015―2020</h5>
      </dt>
      <dd className="col-md-8">
        <p>
          Master of Science in Engineering and in Education,{" "}
          <em>Royal Institute of Technology</em>, 300 credits: A five-year
          combination programme which results in both a Master of Science in
          Engineering (Information- and Communication Technology and
          Mathematics) and a teaching degree.
        </p>
      </dd>
      <dt className="col-md-3">
        <h5>2018-04―2018-08</h5>
      </dt>
      <dd className="col-md-8">
        <p>
          Exchange studies, <em>Shibaura Institute of Technology</em>, 30
          credits: A semester of exchange studies in Tokyo, where I studied
          various courses ranging from programming, mathematics and the Japanese
          language.
        </p>
      </dd>
      <dt className="col-md-3">
        <h5>2013-01―2013-05</h5>
      </dt>
      <dd className="col-md-8">
        <p>
          Swedish: Speak, write, convince, <em>Lund University</em>: Basic level
          course in rhetoric.
        </p>
        <p>
          Mathematical analysis, <em>Lund University</em>: A stand-alone course
          in mathematics.
        </p>
        <p>
          Algebra, <em>Lund University</em>: A stand-alone course in
          mathematics.
        </p>
      </dd>
      <dt className="col-md-3">
        <h5>2011-01―2011-08</h5>
      </dt>
      <dd className="col-md-8">
        <p>
          Security Guard Training, <em>Swedish Armed Forces</em>: An education
          necessary for being able to work as a guard of high security objects.
        </p>
        <p>
          Basic Military Training, <em>Swedish Armed Forces</em>: Voluntary
          military training.
        </p>
      </dd>
      <dt className="col-md-3">
        <h5>2007―2010</h5>
      </dt>
      <dd className="col-md-8">
        <p>
          IT programme, <em>John Bauer High School</em>: A three-year education
          in information technology.
        </p>
      </dd>
      <dt className="col-md-12">
        <hr />
        <h3 className="text-center">Experience</h3>
        <br />
      </dt>
      <dt className="col-md-3">
        <h5>2012―current year</h5>
      </dt>
      <dd className="col-md-8">
        <p>
          Reservist, <em>Swedish Armed Forces</em>: An ongoing temporary
          employment where I go in and work a couple of weeks each year.
        </p>
      </dd>
      <dt className="col-md-3">
        <h5>2016―2019</h5>
      </dt>
      <dd className="col-md-8">
        <p>
          Construction worker, <em>Stadsträdgården Winblad AB</em>: During the
          summer breaks from 2016–2019 I worked with everything related to
          constructing and maintaining gardens in Stockholm.
        </p>
      </dd>
      <dt className="col-md-3">
        <h5>2013―2015</h5>
      </dt>
      <dd className="col-md-8">
        <p>
          Personal assistant, <em>SveaCare</em>: I worked as a support in the
          daily life of a person with disabilities.
        </p>
        <p>
          Swedish Royal Guard, <em>Swedish Armed Forces</em>: On two different
          occasions my platoon was responsible for the outer security at
          Drottningholm Palace and at The Royal Palace.
        </p>
      </dd>
      <dt className="col-md-3">
        <h5>2012-12―2013-03</h5>
      </dt>
      <dd className="col-md-8">
        <p>
          Retail worker, <em>Clas Ohlson.</em>
        </p>
      </dd>
      <dt className="col-md-3">
        <h5>2011―2012</h5>
      </dt>
      <dd className="col-md-8">
        <p>
          Soldier, <em>Swedish Armed Forces</em>: I worked as a driver/signaller
          at the Air Defense regiment in Halmstad.
        </p>
      </dd>
      <dt className="col-md-12">
        <hr />
        <h3 className="text-center">Skills and merits</h3>
        <br />
      </dt>
      <dt className="col-md-3"></dt>
      <dd className="col-md-8">
        <ul className="skills-and-merits">
          <li>
            <p>
              Languages: Swedish (superior), English (advanced), German (novice)
              and Japanese (novice);
            </p>
          </li>
          <li>
            <p>
              Programming: Intermediate skills in object oriented programming
              languages with experience in Python, C and Java as well as some
              functional programming experience with Haskell;
            </p>
          </li>
          <li>
            <p>
              Platforms: Experience with Git, Google Cloud and Microsoft Azure;
            </p>
          </li>
          <li>
            <p>Web programming: HTML, CSS, Javascript, and React;</p>
          </li>
          <li>
            <p>B and C drivers licence (car and medium size trucks);</p>
          </li>
          <li>
            <p>
              Military drivers certificate (medium size trucks and minivan);
            </p>
          </li>
          <li>
            <p>Experience in managing a non-profit sports-association.</p>
          </li>
        </ul>
      </dd>
    </dl>
  </Styles>
);
