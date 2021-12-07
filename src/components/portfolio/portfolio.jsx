import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/portfolio/project01/trb.jpg";
import Preview2 from "../../assets/portfolio/project02/neba.jpg";
import Preview3 from "../../assets/portfolio/project03/matrix.jpg";
import Preview4 from "../../assets/portfolio/project04/dread.jpg";
import Preview5 from "../../assets/portfolio/project05/canoura.jpg";
import Preview6 from "../../assets/portfolio/project06/luckylion.jpg";
import Preview9 from "../../assets/portfolio/project09/latigo.jpg";
import Preview10 from "../../assets/portfolio/project010/hamburgesa.jpg";

import Preview11 from "../../assets/portfolio/project011/gulf.png";
import Preview12 from "../../assets/portfolio/project012/gulf.jpg";

import archivo from "../../assets/audios/Gulf.mp3"
import archivo1 from "../../assets/audios/Falic.mp3"
import archivo2 from "../../assets/portfolio/project03/imagenG.jpg"
import archivo3 from "../../assets/audios/Matrix.mp3"
import archivo4 from "../../assets/audios/jingle.mp3"
import archivo9 from "../../assets/video/WhatsApp.mp4"
import archivo10 from "../../assets/portfolio/project010/hamb2.jpg"
import archivo11 from "../../assets/video/WhatsApp.mp4"
import archivo12 from "../../assets/portfolio/project012/gulfCalle.png"

//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "FALIC",
          tag: "radio",
          arc: archivo1
        },
        {
          id: "2",
          preview: Preview2,
          title: "neba",
          tag: "via",
          arc: archivo2
        },
        {
          id: "3",
          preview: Preview3,
          title: "matrix",
          tag: "radio",
          arc: archivo3

        },
        {
          id: "4",
          preview: Preview4,
          title: "Sneakers",
          tag: "evento",
          arc: archivo4
        },
        {
          id: "5",
          preview: Preview5,
          title: "mendia",
          tag: "radio",
          arc: archivo4
        },
        {
          id: "6",
          preview: Preview6,
          title: "lemons",
          tag: "branding",
        },
        {
          id: "7",
          preview: Preview6,
          title: "lemons",
          tag: "grafica",
        },
        {
          id: "8",
          preview: Preview6,
          title: "lemons",
          tag: "radio",
        },
        {
          id: "9",
          preview: Preview9,
          title: "latigo",
          tag: "evento",
          arc: archivo9
        },
        {
          id: "10",
          preview: Preview10,
          title: "lemons",
          tag: "grafica",
          arc: archivo10,
        },
        {
          id: "11",
          preview: Preview11,
          title: "gulf",
          tag: "via",
          arc: archivo11,
        },
        {
          id: "12",
          preview: Preview12,
          title: "gulf",
          tag: "grafica",
          arc: archivo12

        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "todos",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("todos");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "todos") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} arc={project.arc} />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if (this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
            NEWEST
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="TRABAJOS." />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul className="lista">
                  <div className="primero">
                    <li className={this.state.pickedFilter === "todos" ? "portfolio__nav-active font8" : "font8"} onClick={() => this.filterGallery("todos")}>
                      TODOS
                    </li>
                    <li
                      className={this.state.pickedFilter === "produccion" ? "portfolio__nav-active font8" : "font8"}
                      onClick={() => this.filterGallery("produccion")}
                    >
                      PRODUCCIÓN
                    </li>
                    <li
                      className={this.state.pickedFilter === "radio" ? "portfolio__nav-active font7" : "font7"}
                      onClick={() => this.filterGallery("radio")}
                    >
                      RADIO
                    </li>
                  </div>
                  <div className="primero">
                    <li className={this.state.pickedFilter === "grafica" ? "portfolio__nav-active font7" : "font7"} onClick={() => this.filterGallery("grafica")}>
                      GRAFICA
                    </li>
                    <li className={this.state.pickedFilter === "via" ? "portfolio__nav-active font7" : "font7"} onClick={() => this.filterGallery("via")}>
                      V.PUBLICA
                    </li>
                    <li className={this.state.pickedFilter === "eventos" ? "portfolio__nav-active font7" : "font7"} onClick={() => this.filterGallery("evento")}>
                      E.CULTURAL
                    </li>
                  </div>
                </ul>
              </div>
            </Col>
            {/* <Col xs={12} sm={12} md={4} lg={3}>
              <div className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font12">{this.state.pickedFilterDropdown} FIRST</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col> */}
          </Row>
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="TRABAJA CON NOSOTROS" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
