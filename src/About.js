import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .img-thumbnail {
    max-height: 5%
    max-width: 5%
  }
`;
export const About = () => (
  <Styles>
    <dl class="row">
      <dt class="col-sm-3">
        <img
          src="DSC_4420.jpg"
          alt="Portrait of me"
          className="img-thumbnail"
        />
      </dt>
      <dd class="col-sm-8">
        <p className="text-justify text-right">+46 763 755 890</p>
        <p className="text-justify text-right">johannes.thessen@gmail.com</p>
      </dd>

      <dt class="col-sm-12">
        <hr />
        <p className="text-center">Education</p>
      </dt>

      <dt class="col-sm-3">
        <p>2015―current year</p>
      </dt>
      <dd class="col-sm-8">
        <p>
          Master of Science in Engineering and in Education,{" "}
          <em>Royal Institute of Technology</em>, 300 credits: A five-year
          combination programme which results in both a Master of Science in
          Engineering degree and a teaching degree. I am currently on my fifth
          and last year within the Mathematics and Information- and
          Communication Technology discipline.
        </p>
      </dd>
      <dt class="col-sm-3">
        <p>2013-01―2013-05</p>
      </dt>
      <dd class="col-sm-8">
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

      <dt class="col-sm-3">
        <p>2011-01―2011-08</p>
      </dt>
      <dd class="col-sm-8">
        <p>
          Security Guard Training, <em>Swedish Armed Forces</em>: An education
          necessary for being able to work as a guard of high security objects.
        </p>
        <p>
          Basic Military Training, <em>Swedish Armed Forces</em>: Voluntary
          military training.
        </p>
      </dd>

      <dt class="col-sm-3">
        <p>2007―2010</p>
      </dt>
      <dd class="col-sm-8">
        <p>
          IT programme, <em>John Bauer High School</em>: A three-year education
          in information technology.
        </p>
      </dd>

      <dt class="col-sm-12">
        <hr />
        <p className="text-center">Experience</p>
      </dt>

      <dt class="col-sm-3">
        <p>2012―current year</p>
      </dt>
      <dd class="col-sm-8">
        <p>
          Reservist, <em>Swedish Armed Forces</em>: An ongoing temporary
          employment where I go in and work a couple of weeks each year.
        </p>
      </dd>

      <dt class="col-sm-3">
        <p>2016―2019</p>
      </dt>
      <dd class="col-sm-8">
        <p>
          Construction worker, <em>Stadsträdgården Winblad AB</em>: During the
          summer breaks from 2016–2019 I worked with everything related to
          constructing and maintaining gardens in Stockholm.
        </p>
      </dd>

      <dt class="col-sm-3">
        <p>2013―2015</p>
      </dt>
      <dd class="col-sm-8">
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

      <dt class="col-sm-3">
        <p>2012-12―2013-03</p>
      </dt>
      <dd class="col-sm-8">
        <p>
          Retail worker, <em>Clas Ohlson.</em>
        </p>
      </dd>

      <dt class="col-sm-3">
        <p>2011―2012</p>
      </dt>
      <dd class="col-sm-8">
        <p>
          Soldier, <em>Swedish Armed Forces</em>: I worked as a driver/signaller
          at the Air Defense regiment in Halmstad.
        </p>
      </dd>

      <dt class="col-sm-12">
        <hr />
        <p className="text-center">Skills and merits</p>
      </dt>

      <dt class="col-sm-3"></dt>
      <dd class="col-sm-8">
        <ul>
          <li>
            Languages: Swedish (superior), English (advanced), German (novice)
            and Japanese (novice);
          </li>
          <li>
            Programming: Intermediate skills in object oriented programming
            languages with experience in Python, C and Java as well as some
            functional programming experience with Haskell;
          </li>
          <li>
            Platforms: Experience with Git, Google Cloud and Microsoft Azure;
          </li>
          <li>Web programming: HTML, CSS, Javascript, and React;</li>
          <li>B and C drivers licence (car and medium size trucks);</li>
          <li>
            Military drivers certificate (medium size trucks and minivan);
          </li>
          <li>Experience in managing a non-profit sports-association.</li>
        </ul>
      </dd>
    </dl>
  </Styles>
);
