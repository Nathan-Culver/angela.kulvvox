import React, { useState } from 'react';
import CaseStudy from './CaseStudy/CaseStudy.js'
import ComfyCookingPortfolioImg from './Imgs/ComfyCooking.png';
import QualityBikesPortfolioImg from './Imgs/QualityBikes.png';
import './CaseStudies.css';

export default function CaseStudies(props) {

    const [caseStudiesData, setCaseStudiesData] = useState([
        {
            title: "Comfy Cooking",
            img: ComfyCookingPortfolioImg,
            text: 'This project was to create a cooking application that would help people learn to cook healthier foods in an organized way that would allow an individual to focus on more than just food in a day. It also wanted to build a sense of community around cooking to stave off loneliness during the time of Covid - 19. The end goal was to have a tested high fidelity user prototype.'
        },
        {
            title: "Quality Bikes",
            img: QualityBikesPortfolioImg,
            text: 'This project was to design updates for an existing website to increase user conversion. Two trouble areas had been identified, the first was that users could not compare the merchandise effectively enough to support making a purchase. The second was that users had no guest checkout option which limited users from completing purchases. The end goal was to have a tested high fidelity prototype of the website containing both a comparison feature and a guest checkout feature.'
        }
    ]) 

    return (
      <section className="container" id="caseStudies-container" >
          <div className="title" id="caseStudies-title-container" >
            <div className="container" id="caseStudies-title" >Case Studies</div>
          </div>
          {caseStudiesData.map((caseStudy, index) => (
            <CaseStudy
                caseStudy={caseStudy} 
                index={index} 
                home={props.home}
                setHome={props.setHome}
                portfolio={props.portfolio}
                setPortfolio={props.setPortfolio}
                contact={props.contact}
                setContact={props.setContact}
                comfyCooking={props.comfyCooking}
                setComfyCooking={props.setComfyCooking}
                qualityBikes={props.qualityBikes}
                setQualityBikes={props.setQualityBikes}
            />
          ))}
      </section>
    );
}