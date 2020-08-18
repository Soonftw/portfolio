import React, { Component } from "react";

class Transcript extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Transcript</h1>
            <p>Following is a complete transcript of grades. </p>
            <p>
              60 credits (hp) represent a full academic year. 60 pre-education
              credits (fup) represents a full academic year.
            </p>
            <h3>Grading scale</h3>
            <p>1: Grading Scale: Pass (P)</p>
            <p>
              2. Grading Scale: Excellent (A), Very Good (B), Good (C),
              Satisfactory (D), Sufficient (E)
            </p>
            <p>3. Gradign Scale: Pass with Disctinction (VG), Pass (G)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Course Name</th>
                  <th>Scope</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{"Master of Science in Engineering and in Education"}</td>
                  <td>{"300 hp"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Transcript;
