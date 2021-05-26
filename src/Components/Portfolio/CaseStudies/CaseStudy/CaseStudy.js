import React, { useState } from 'react';
import './CaseStudy.css';

export default function CaseStudy(props) {

    const [caseStudyText, setCaseStudyText] = useState(true);

    const switchCaseStudyText = () => {
      setCaseStudyText(!caseStudyText);
    }

    const switchToCaseStudy = () => {
      console.log(props.caseStudy.title)
      switch(props.caseStudy.title) {
        case "Comfy Cooking":
          props.setComfyCooking(true);
          props.setQualityBikes(false);
          props.setHome(false);
          props.setPortfolio(false);
          props.setContact(false);
          break;
        case "Quality Bikes":
          props.setQualityBikes(true);
          props.setComfyCooking(false);
          props.setHome(false);
          props.setPortfolio(false);
          props.setContact(false);
          break;
        default:
          console.log("Default")
      }
    }

    const textStyle = {
      height: '20%',
    };

    return (
      <div className="container" id={"caseStudy-container-"+props.index} onMouseEnter={switchCaseStudyText} onMouseLeave={switchCaseStudyText} onClick={switchToCaseStudy}>
          <div className="title" id={"caseStudy-title-"+props.index} >{props.caseStudy.title}</div>
          {caseStudyText ?
          <img className="img" id={"caseStudy-img-"+props.index} src={props.caseStudy.img} alt={''} />
          : 
          <div className="container" id={"caseStudy-container-text-"+props.index} >
            <img className="img" id={"caseStudy-img-"+props.index} src={props.caseStudy.img} alt={''} style={textStyle} />
            <p className="text" id={"caseStudy-text-"+props.index}>{props.caseStudy.text}</p>
          </div>
          }
      </div>
    );
}