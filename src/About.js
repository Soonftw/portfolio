import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .img-thumbnail {
  }
`;
export const About = () => (
  <Styles>
    <dl class="row">
      <dt class="col-sm-3">Description lists</dt>
      <dd class="col-sm-9">
        A description list is perfect for defining terms.
      </dd>

      <dt class="col-sm-3">Euismod</dt>
      <dd class="col-sm-9">
        <p>
          Vestibulum id ligula porta felis euismod semper eget lacinia odio sem
          nec elit.
        </p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
      </dd>

      <dt class="col-sm-3">Malesuada porta</dt>
      <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

      <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
      <dd class="col-sm-9">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus.
      </dd>

      <dt class="col-sm-3">Nesting</dt>
      <dd class="col-sm-9">
        <dl class="row">
          <dt class="col-sm-4">Nested definition list</dt>
          <dd class="col-sm-8">
            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
          </dd>
        </dl>
      </dd>
    </dl>
    {/* Image and contact row */}
    <div className="row">
      <div className="col-md-2">
        <img src="DSC_4420.jpg" alt="Portrait of me" className="img-fluid" />
      </div>
      <div className="col-md-10">
        <p className="text-justify text-right">+46 763 755 890</p>
        <p className="text-justify text-right">johannes.thessen@gmail.com</p>
      </div>
    </div>
    {/* Education title*/}
    <div className="row">
      <div className="col-md-12">
        <p className="text-center">Education</p>
      </div>
    </div>
    {/* Education list */}
    <div className="row">
      <div className="col-md-2">
        <p>2015―current year</p>
      </div>
      <div className="col-md-10">
        <p>
          Master of Science in Engineering and in Education, Royal Institute of
          Technology, 300 credits: A five-year combination programme which
          results in both a Master of Science in Engineering degree and a
          teaching degree. I am currently on my fifth and last year within the
          Mathematics and Information- and Communication Technology discipline.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <p>2013-01―2013-05</p>
      </div>
      <div className="col-md-10">
        <p>
          Swedish: Speak, write, convince, Lund University: Basic level course
          in rhetoric. Mathematical analysis, Lund University: A stand-alone
          course in mathematics. Algebra, Lund University: A stand-alone course
          in mathematics.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <p>2011-01―2011-08</p>
      </div>
      <div className="col-md-10">
        <p>
          Security Guard Training, Swedish Armed Forces: An education necessary
          for being able to work as a guard of high security objects. Basic
          Military Training, Swedish Armed Forces: Voluntary military training.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <p>2007―2010</p>
      </div>
      <div className="col-md-10">
        <p>
          IT programme, John Bauer High School: A three-year education in
          information technology.
        </p>
      </div>
    </div>
    {/* Experience title */}
    <div className="row">
      <div className="col-md-12">
        <p className="text-center">Experience</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <p>2012―current year</p>
      </div>
      <div className="col-md-10">
        <p>
          Reservist, Swedish Armed Forces: An ongoing temporary employment where
          I go in and work a couple of weeks each year.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <p>2016―2019</p>
      </div>
      <div className="col-md-10">
        <p>
          Construction worker, Stadsträdgården Winblad AB: During the summer
          breaks from 2016–2019 I worked with everything related to constructing
          and maintaining gardens in Stockholm.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <p>2013―2015</p>
      </div>
      <div className="col-md-10">
        <p>
          Personal assistant, SveaCare: I worked as a support in the daily life
          of a person with disabilities. Swedish Royal Guard, Swedish Armed
          Forces: On two different occasions my platoon was responsible for the
          outer security at Drottningholm Palace and at The Royal Palace.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <p>2012-12―2013-03</p>
      </div>
      <div className="col-md-10">
        <p>Retail worker, Clas Ohlson.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">
        <p>2011―2012</p>
      </div>
      <div className="col-md-10">
        <p>
          Soldier, Swedish Armed Forces: I worked as a driver/signaller at the
          Air Defense regiment in Halmstad.
        </p>
      </div>
    </div>

    {/* Skills and merits title */}
    <div className="row">
      <div className="col-md-12">
        <p className="text-center">Skills and merits</p>
      </div>
    </div>
  </Styles>
);
