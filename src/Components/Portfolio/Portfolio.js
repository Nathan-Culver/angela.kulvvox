import CaseStudies from './CaseStudies/CaseStudies.js'
import DesignSprints from './DesignSprints/DesignSprints.js'
import './Portfolio.css';

export default function Portfolio(props) {
    return (
      <main className="container" id="portfolio-container" >
          <CaseStudies
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
          <div className="divider" id="portfolio-divider" />
          <DesignSprints />
      </main>
    );
  }