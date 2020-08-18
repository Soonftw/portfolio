import React, { Component } from "react";
import axios from "axios";
import FadeIn from "react-fade-in"; //Styling for loadingbar
import Lottie from "react-lottie"; //Styling for loadingbar
import * as loadImage from "./loading"; //Styling for loadingbar

// let programme =
//   "https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://api.kth.se/api/kopps/v2/programme/CLGYM";
// let info =
//   "https://cors-anywhere.herokuapp.com/https://www.kth.se/api/kopps/v2/programmes/CLGYM/studyprogramme/version/20182?l=en";
// let courseList =
//   "https://cors-anywhere.herokuapp.com/https://www.kth.se/api/kopps/v2/studyprogramme/9508/curriculums?l=en";

// const defaultOptions = {
//   //Options used for formatting the loading bar when fetching API request
//   loop: true,
//   autoplay: true,
//   animationData: loadImage.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };

class Education2 extends Component {
  constructor() {
    super();

    // this.handleOnSubmit = this.handleOnSubmit.bind(this);

  //   this.state = {
  //     done: undefined,
  //     data: {},
  //     programmeObjectives: "",
  //     knowledgeObjectives: "",
  //     skillsObjectives: "",
  //     abilityObjectives: "",
  //     extent: "",
  //     eligibility: "",
  //     structure: "",
  //     courseRules: "",
  //     gradingSystem: "",
  //     participation: "",
  //     previousStudies: "",
  //     studiesAbroad: "",
  //     degreeProject: "",
  //     degree: "",
  //     courses: [],
  //   };
  // }

  // componentDidMount() {
  //   //fetch program information
  //   axios
  //     .all([programme, info, courseList], { headers: { header1: "Origin" } })
  //     .then(
  //       axios.spread((...responses) => {
  //         const responseOne = responses[0];
  //         const responseTwo = responses[1];
  //         const responseThree = responses[2];
  //         console.log(responseOne);
  //         console.log(responseTwo);
  //         console.log(responseThree);
  //         // use/access the results
  //       })
  //     )
  //     .catch((errors) => {
  //       console.log(errors);
  //     });
  // }
  render() {
    const programme = this.state.data;
    return (
      <div>
        <h2>Hello World!</h2>
        <div className="row">
          {!this.state.done ? ( //If the data is not yet retrieved - show loading bar
            <FadeIn>
              <div className="d-flex justify-content-center align-items-center">
                <h1>Loading flowers from database</h1>
                <Lottie options={defaultOptions} height={120} width={120} />
              </div>
            </FadeIn>
          ) : (
            <div className="col-md-12">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Programme</th>
                    <th>Programme Code</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{programme.titleOtherLanguage}</td>
                    <td>{programme.programmeCode}</td>
                    <td>{programme.credits + programme.creditUnitAbbr}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <p>
          Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin.
          Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd
          boksättare tog att antal bokstäver och blandade dem för att göra ett
          provexemplar av en bok. Lorem ipsum har inte bara överlevt fem
          århundraden, utan även övergången till elektronisk typografi utan
          större förändringar. Det blev allmänt känt på 1960-talet i samband med
          lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med
          mjukvaror som Aldus PageMaker.
        </p>
        <p>
          Det är ett välkänt faktum att läsare distraheras av läsbar text på en
          sida när man skall studera layouten. Poängen med Lorem Ipsum är att
          det ger ett normalt ordflöde, till skillnad från "Text här, Text här",
          och ger intryck av att vara läsbar text. Många publiseringprogram och
          webbutvecklare använder Lorem Ipsum som test-text, och en sökning
          efter "Lorem Ipsum" avslöjar många webbsidor under uteckling. Olika
          versioner har dykt upp under åren, ibland av olyckshändelse, ibland
          med flit (mer eller mindre humoristiska).
        </p>
        <p>
          I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord.
          Det har sina rötter i ett stycke klassiskt litteratur på latin från 45
          år före år 0, och är alltså över 2000 år gammalt. Richard McClintock,
          en professor i latin på Hampden-Sydney College i Virginia, översatte
          ett av de mer ovanliga orden, consectetur, från ett stycke Lorem Ipsum
          och fann dess ursprung genom att studera användningen av dessa ord i
          klassisk litteratur. Lorem Ipsum kommer från styckena 1.10.32 och
          1.10.33 av "de Finibus Bonorum et Malorum" (Ytterligheterna av ont och
          gott) av Cicero, skriven 45 före år 0. Boken är en avhandling i
          teorier om etik, och var väldigt populär under renäsanssen. Den
          inledande meningen i Lorem Ipsum, "Lorem Ipsum dolor sit amet...",
          kommer från stycke 1.10.32. Den ursprungliga Lorem Ipsum-texten från
          1500-talet är återgiven nedan för de intresserade. Styckena 1.10.32
          och 1.10.33 från "de Finibus Bonorum et Malorum" av Cicero hittar du
          också i deras originala form, åtföljda av de engelska översättningarna
          av H. Rackham från 1914.
        </p>
      </div>
    );
  }
}

export default Education2;
