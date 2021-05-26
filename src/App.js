import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav.js';
import Main from './Components/Main/Main.js'
import Portfolio from './Components/Portfolio/Portfolio.js'
import ComfyCooking from './Components/Portfolio/CaseStudies/ICS/ComfyCooking/ComfyCooking.js'
import QualityBikes from './Components/Portfolio/CaseStudies/ICS/QualityBikes/QualityBikes.js'
import Footer from './Components/Footer/Footer.js';

function App() {

  const [home, setHome] = useState(true) 
  const [portfolio, setPortfolio] = useState(false) 
  const [contact, setContact] = useState(false) 
  const [comfyCooking, setComfyCooking] = useState(false) 
  const [qualityBikes, setQualityBikes] = useState(false) 

  return (
    <div className="App">
        <Nav 
          home={home}
          setHome={setHome}
          portfolio={portfolio}
          setPortfolio={setPortfolio}
          contact={contact}
          setContact={setContact}
          comfyCooking={comfyCooking}
          setComfyCooking={setComfyCooking}
        />
        {home === true ?
          <Main 
            contact={contact}
          />
        : 
          null
        }
        {portfolio === true ?
          <Portfolio 
            home={home}
            setHome={setHome}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            contact={contact}
            setContact={setContact}
            comfyCooking={comfyCooking}
            setComfyCooking={setComfyCooking}
            qualityBikes={qualityBikes}
            setQualityBikes={setQualityBikes}
          />
        : 
          null
        }
        {comfyCooking === true ?
          <ComfyCooking />
        : 
          null
        }
        {qualityBikes === true ?
          <QualityBikes />
        : 
          null
        }
        <Footer />
    </div>
  );
}

export default App;
