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
            <p>
              <ol>
                <li>Pass (P)</li>
                <li>
                  Excellent (A), Very Good (B), Good (C), Satisfactory (D),
                  Sufficient (E)
                </li>
                <li>Pass with Disctinction (VG), Pass (G)</li>
              </ol>
            </p>
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
                  <th>Scale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF0003?l=en">
                      Introductory Course in Mathematics
                    </a>
                  </td>
                  <td>1.5 fup</td>
                  <td>P</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF1661?l=en">
                      Perspectives on Mathematics
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>B</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/ED1100?l=en">
                      Engineering Science
                    </a>
                  </td>
                  <td>7.5 hp</td>
                  <td>P</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/UMK212?l=en">
                      Mathematics Education and Pre-service Placement for Upper
                      Secondary School
                    </a>
                  </td>
                  <td>7.5 hp</td>
                  <td>G</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/UCK210?l=en">
                      Theoretical and Empirical Perspectives on Learning
                    </a>
                  </td>
                  <td>8.5 hp</td>
                  <td>B</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DD1314?l=en">
                      Programming for Interactive Media
                    </a>
                  </td>
                  <td>8 hp</td>
                  <td>B</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/MJ1530?l=en">
                      Physics, Chemistry, Energy and the Environment
                    </a>
                  </td>
                  <td>15 hp</td>
                  <td>C</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF1662?l=en">
                      Discrete Mathematics
                    </a>
                  </td>
                  <td>7.5 hp</td>
                  <td>C</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/UMK310?l=en">
                      Development and Learning in Science and Technology
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>C</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF1624?l=en">
                      Algebra and Geometry
                    </a>
                  </td>
                  <td>7.5 hp</td>
                  <td>E</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/IS1500?l=en">
                      Computer organization and Components
                    </a>
                  </td>
                  <td>9 hp</td>
                  <td>D</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF1625?l=en">
                      Calculus in One Variable
                    </a>
                  </td>
                  <td>7.5 hp</td>
                  <td>D</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/UCK310?l=en">
                      Social Relations and Educational Leadership
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>A</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF1626?l=en">
                      Calculus in Several Variables
                    </a>
                  </td>
                  <td>7.5 hp</td>
                  <td>D</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DD1325?l=en">
                      Applied Computer Science with Ethics
                    </a>
                  </td>
                  <td>7.5 hp</td>
                  <td>E</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DH2624?l=en">
                      Human-Computer Interaction - a Didactive Perspective
                    </a>
                  </td>
                  <td>7.5 hp</td>
                  <td>A</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DD2310?l=en">
                      Java Programming for Python Programmers
                    </a>
                  </td>
                  <td>1.5 hp</td>
                  <td>P</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF1633?l=en">
                      Differential Equations I
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>C</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF1514?l=en">
                      Numerical Methods, Basic Course
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>E</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DD1395?l=en">
                      In-depth Essay in Computer Science
                    </a>
                  </td>
                  <td>3 hp</td>
                  <td>P</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DH2320?l=en">
                      Introduction to Visualization and Computer Graphics
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>P</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DD1393?l=en">
                      Software Engineering
                    </a>
                  </td>
                  <td>10.5 hp</td>
                  <td>A</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/MJ2612?l=en">
                      Teaching and Sustainable Development
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>D</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/EH2070?l=en">
                      Project Management and Business Development
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>B</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF1917?l=en">
                      Probability Theory and Statistics
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>E</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DD2350?l=en">
                      Algorithms, Data Structures and Complexity
                    </a>
                  </td>
                  <td>9.5 hp</td>
                  <td>D</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/UMK702?l=en">
                      Teaching and Assessment in Mathematics and Technology or
                      Science
                    </a>
                  </td>
                  <td>9 hp</td>
                  <td>D</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DH2642?l=en">
                      Interaction Programming and the Dynamic Web
                    </a>
                  </td>
                  <td>7.5 hp</td>
                  <td>C</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/ME2084?l=en">
                      Organizational Analysis and Professional Roles
                    </a>
                  </td>
                  <td>4 hp</td>
                  <td>P</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF2717?l=en">
                      Mathematics, Advanced Course
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>D</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/LT1035?l=en">
                      VFU2: Experiments and Informal Learning Environments
                    </a>
                  </td>
                  <td>11 hp</td>
                  <td>G</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/UQK701?l=en">
                      Special Education- Youth and Adults
                    </a>
                  </td>
                  <td>5 hp</td>
                  <td>B</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/SF2719?l=en">
                      The History of Mathematics
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>E</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DD1368?l=en">
                      Database Technology
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>B</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/AK2055?l=en">
                      Theory of Science and Research Methodology for Teachers
                    </a>
                  </td>
                  <td>4 hp</td>
                  <td>C</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/UMK803?l=en">
                      Curriculum Theory and Subject Didactics
                    </a>
                  </td>
                  <td>6 hp</td>
                  <td>B</td>
                  <td>2</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/UMK704?l=en">
                      School Placement III with Subject Didactics
                    </a>
                  </td>
                  <td>15 hp</td>
                  <td>VG</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/LT200X?l=en">
                      Degree Project in Technology and Learning, Second Cycle
                    </a>
                  </td>
                  <td>30 hp</td>
                  <td>P</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://www.kth.se/student/kurser/kurs/DD1361?l=en">
                      Programming Paradigms
                    </a>
                  </td>
                  <td>7.5 hp</td>
                  <td></td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1>Courses taken abroad</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Course Name</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Software Design</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Information Accessibility</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Seminar on Technology and Society 1</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>
                    Introduction to Information and Communication Engineering 1
                  </td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Introduction to Computer Programming in C</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Japanese Language 1</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td>Applied Mathematics</td>
                  <td>A</td>
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
