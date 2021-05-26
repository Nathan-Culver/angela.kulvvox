import React, { useState } from 'react';
import DesignSprint from './DesignSprint/DesignSprint.js'
import GramCityPorfolioImage from './Imgs/GramCityPorfolioImage.png';
import './DesignSprints.css';

export default function CaseStudies() {

    const [designSprintsData, setDesignSprintsData] = useState([
        {
            title: "Gram City",
            img: GramCityPorfolioImage,
            text: 'This design sprint was prompted to me with two existing persona’s and an identified goal for the project. The persona’s both encapsulated users who enjoy travel and were looking for instagram worthy photo opportunities in cities they had never been to before. The goal was that the users would be able to utilize this application to locate the ideal photo opportunity spots.'
        },
    ]) 

    const designSprintContainerStyle = {
      justifyContent: 'flex-start',
    };

    const designSprintTitleContainerStyle = {
      marginBottom: '40px',
    };

    return (
      <section className="container" id="designSprints-container" style={designSprintsData.length === 1 ? designSprintContainerStyle : null} >
          <div className="title" id="designSprints-title-container" style={designSprintsData.length === 1 ? designSprintTitleContainerStyle : null} >
            <div className="title" id="designSprints-title" >Design Sprints</div>
          </div>
          {designSprintsData.map((designSprint, index) => (
            <DesignSprint
                designSprint={designSprint} 
                index={index} 
            />
          ))}
      </section>
    );
}