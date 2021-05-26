import React, { useState } from 'react';
import './DesignSprint.css';

export default function DesignSprint(props) {
  
      const [designSprintText, setDesignSprintText] = useState(true);
  
      const switchDesignSprintText = () => {
        setDesignSprintText(!designSprintText);
      }
  
      const textStyle = {
        height: '20%',
      };

    return (
      <div className="container" id={"designSprint-container-"+props.index} onMouseEnter={switchDesignSprintText} onMouseLeave={switchDesignSprintText} >
          <div className="title" id={"designSprint-title-"+props.index} >{props.designSprint.title}</div>
          {designSprintText ?
              <img className="img" id={"designSprint-img-"+props.index} src={props.designSprint.img} alt={''} />
          : 
          <div className="container" id={"designSprint-container-text-"+props.index} >
              <img className="img" id={"designSprint-img-"+props.index} src={props.designSprint.img} alt={''} style={textStyle} />
              <p className="text" id={"designSprint-text-"+props.index}>{props.designSprint.text}</p>
          </div>
          }
      </div>
    );
}

