import './QualityBikes.css';
import becky from './Imgs/Becky.png';
import better1 from './Imgs/Better1.png';
import better2 from './Imgs/Better1.png';
import laptop from './Imgs/Laptop.png';
import link from './Imgs/Link.png';
import newDesign1 from './Imgs/NewDesign1.png';
import newDesign2 from './Imgs/NewDesign2.png';
import pretty1 from './Imgs/Pretty1.png';
import pretty2 from './Imgs/Pretty2.png';
import pretty3 from './Imgs/Pretty3.png';
import pretty4 from './Imgs/Pretty4.png';
import product1 from './Imgs/Product1.png';
import product2 from './Imgs/Product2.png';
import research1 from './Imgs/Research1.png';
import research2 from './Imgs/Research2.png';
import thumbnail from './Imgs/Thumbnail.png';
import userFlows1 from './Imgs/UserFlows1.png';
import userFlows2 from './Imgs/UserFlows2.png';
import wireFrames1 from './Imgs/WireFrames1.png';
import wireFrames2 from './Imgs/WireFrames2.png';
import wireFrames3 from './Imgs/WireFrames3.png';
import wireFrames4 from './Imgs/WireFrames4.png';
import wireFrames5 from './Imgs/WireFrames5.png';
import wireFrames6 from './Imgs/WireFrames6.png';

export default function QualityBikes() {

    return (
      <div className="container" id="qualityBikes-container" >
        <section className="container" id="title-laptop-container" >
          <h1 className="title" id="qualityBikes-title" >Quality Bikes</h1>
          <img className="img" id="laptop-img" src={laptop} alt="Laptop" />
        </section>
        <section className="container" id="beginning-container" >
          <h2 className="title" id="beginning-title" >The Beginning</h2>
          <p className="text" id="beginning-text" >For this project an online retail company that sells bikes, wanted updates for an existing website to increase user conversion. </p>
        </section>
        <section className="question-container" id="question-container-1" >
          <div className="question-card-container" id="question-card-container-1" >
            <div className="card-container-outer" id="card-container-outer-1" >
              <div className="problem-card-container-inner" id="card-container-inner-1" >
                <p className="card-problem" id="card-problem-1" >Problem #1</p>
                <p className="card-problem" id="card-problem-2" >Users open an average of seven tabs, for seven separate items, and then make no purchases.</p>
              </div>
            </div>
          </div>
          <div className="question-card-container" id="question-card-container-2" >
            <div className="card-container-outer" id="card-container-outer-2" >
              <div className="problem-card-container-inner" id="card-container-inner-2" >
              <p className="card-problem" id="card-problem-3" >Problem #2</p>
                <p className="card-problem" id="card-problem-4" >Users select an item for purchase but leave the site when reaching the registration page.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="persona’s-container">
          <h2 className="title" id="persona’s-title">The Goal</h2>
          <p className="text" id="similarities-text" >Improve the website and increase user conversion in these specific areas.</p>
        </section>
        <section className="container" id="persona’s-container">
          <h2 className="title" id="persona’s-title">The User</h2>
          <div className="container" id="becky-img-container">
              <img className="img" id="becky-img" src={becky} alt="Becky" />
          </div>
        </section>
        <section className="container" id="testing-container">
          <div className="container" id="qualityBikes-titles-container">
            <h2 className="title" id="testing-title">The Research</h2>
            <h2 className="title" id="testing-title">Step #1</h2>
          </div>
          <div className="container" id="testing-img-text-container">
            <div className="container" id="research-img-container">
              <img className="testing-img" id="research-img-1" src={research1} alt="Testing" />
              <img className="testing-img" id="research-img-2" src={research2} alt="Testing" />
            </div>
            <div className="container" id="testing-text-container">
              <p className="qualityBikes-research-text" id="testing-text-1" >Secondary and Competitive Research</p>
              <p className="qualityBikes-research-text" id="testing-text-2" >I started by looking at TrekBike, a leading competitor to Quality Bikes.</p>
              <p className="qualityBikes-research-text" id="testing-text-3" >I also looked at top leading online retailers such as Amazon and Target.</p>
              <p className="qualityBikes-research-text" id="testing-text-4" >I wanted to see what they offer users for both comparing items and guest checkout features on their websites.</p>
            </div>
          </div>
        </section>
        <section className="container" id="testing-container">
          <div className="container" id="qualityBikes-titles-container">
            <h2 className="title" id="testing-title">The User Flows</h2>
            <h2 className="title" id="testing-title">Step #2</h2>
          </div>
          <div className="container" id="testing-img-text-container">
            <div className="container" id="userFlows-img-container">
              <img className="testing-img" id="userFlows-img-1" src={userFlows1} alt="Testing" />
              <img className="testing-img" id="userFlows-img-2" src={userFlows2} alt="Testing" />
            </div>
            <div className="container" id="testing-text-container">
              <p className="qualityBikes-userFlows-text" id="testing-text-1" >Starting the Design Process</p>
              <p className="qualityBikes-userFlows-text" id="testing-text-2" >I started by identifying the users steps from the consumer landing page to conversion.</p>
              <p className="qualityBikes-userFlows-text" id="testing-text-3" >I illustrated in these images the user steps when checking out of a website that offers a guest checkout as well as the steps of a compare feature.</p>
            </div>
          </div>
        </section>
        <section className="container" id="testing-container">
          <div className="container" id="qualityBikes-titles-container">
            <h2 className="title" id="testing-title">The Wireframing</h2>
            <h2 className="title" id="testing-title">Step #3</h2>
          </div>
          <div className="container" id="testing-img-text-container">
            <div className="container" id="wireFrames-img-container">
              <img className="testing-img" id="wireFrames-img-1" src={wireFrames1} alt="Testing" />
              <img className="testing-img" id="wireFrames-img-2" src={wireFrames2} alt="Testing" />
            </div>
            <div className="container" id="testing-text-container">
              <p className="qualityBikes-wireFrames-text" id="testing-text-1" >Building the Foundation</p>
              <p className="qualityBikes-wireFrames-text" id="testing-text-2" >After the user steps for each of these two designs had been sufficiently identified I started on drafting the wireframes to show what each of the identified steps would look like visually for a user who was visiting the website.</p>
            </div>
          </div>
        </section>
        <section className="container" id="qualityBikes-product-container">
          <div className="container" id="qualityBikes-product-titles-container">
            <h2 className="hifiDesign-text" id="hifiDesign-title">Testing the Product</h2>
            <h2 className="title" id="product-title">Step #4</h2>
          </div>
          <div className="container" id="hifiDesign-text-container-1">
            <p className="hifiDesign-text" id="hifiDesign-text-1" >User Low Fidelity Prototype Testing</p>
          </div>
          <div className="container" id="product-text-container-2">
            <p className="hifiDesign-text" id="product-text-2" >After the wireframes were designed I developed a low fidelity click through prototype using the wireframe pages. I was able to host successful user testing via Zoom.</p>
          </div>
          <div className="container" id="product-img-container-1">
            <img className="img" id="product-img-1" src={product1} alt="HiFi Design" />  
          </div>
          <div className="container" id="product-img-container-2">
            <img className="img" id="product-img-2" src={product2} alt="HiFi Design" />  
          </div>
        </section>
        <section className="container" id="testing-container">
          <div className="container" id="titles-container">
            <h2 className="title" id="testing-title">Making Things Pretty</h2>
            <h2 className="title" id="testing-title">Step #5</h2>
          </div>
          <div className="container" id="testing-img-text-container">
            <img className="testing-img" id="pretty-img-1" src={pretty1} alt="Testing" />
            <div className="container" id="testing-text-container">
              <p className="qualityBikes-userFlows-text" id="testing-text-1" >Building High Fidelity Prototype </p>
              <p className="qualityBikes-userFlows-text" id="testing-text-2" >After the user testing, I iterated on my design and implemented the improvements identified as necessary. I also updated the wireframes into a high fidelity prototype.</p>
              <p className="qualityBikes-userFlows-text" id="testing-text-3" >Exhibited here are the Compare Features</p>
            </div>
          </div>
          <img className="testing-img" id="pretty-img-2" src={pretty2} alt="Testing" />
        </section>
        <section className="container" id="pretty-container">
          <div className="container" id="pretty-img-text-container">
            <img className="testing-img" id="pretty-img-3" src={pretty3} alt="Testing" />
            <div className="container" id="testing-text-container">
              <p className="testing-text" id="testing-text-4" >Exhibited here are the images for the Guest Checkout.</p>
            </div>
          </div>
          <img className="testing-img" id="pretty-img-4" src={pretty4} alt="Testing" />
        </section>
        <section className="container" id="testing-container">
          <div className="container" id="titles-container">
            <h2 className="title" id="testing-title">Testing the New Design</h2>
            <h2 className="title" id="testing-title">Step #6</h2>
          </div>
          <p className="testing-text" id="testing-text-1" >Performing Additional Testing</p>
          <div className="container" id="testing-img-text-container">
            <img className="testing-img" id="testing-img-1" src={newDesign1} alt="Testing" />
            <div className="container" id="testing-text-container">
              <p className="testing-text" id="testing-text-1" >After updating on the prototype and design I administered the next round of user testing on both user flows.</p>
              <p className="testing-text" id="testing-text-2" >Feedback was given on ways to improve on the user flows, and on the UI of the high fidelity prototype. The top three of the issues identified are as follows.</p>
            </div>
          </div>
          <img className="testing-img" id="testing-img-1" src={newDesign2} alt="Testing" />
        </section>
        <section className="container" id="hifiDesign-container">
          <div className="container" id="hifiDesign-title-container">
            <h2 className="hifiDesign-text" id="hifiDesign-title">Making It Better</h2>
            <h2 className="title" id="hifiDesign-title">Step #6</h2>
          </div>
          <div className="container" id="hifiDesign-text-container-1">
            <p className="hifiDesign-text" id="hifiDesign-text-1" >Iterating on the Design</p>
          </div>
          <div className="container" id="hifiDesign-text-container-2">
            <p className="hifiDesign-text" id="hifiDesign-text-2" >Once the improvements had been made the second UI prototype was reviewed for feedback by other designers. The results from their feedback produced a high fidelity prototype with a new UI layout as shown below.</p>
          </div>
          <div className="container" id="hifiDesign-img-container">
            <img className="img" id="hifiDesign-img" src={better1} alt="HiFi Design" />  
            <img className="img" id="hifiDesign-img" src={better2} alt="HiFi Design" />
          </div>
        </section>
        <section className="container" id="prototype-container">
          <div className="container" id="prototype-title-container">
            <h2 className="title" id="prototype-title">Prototype</h2>
          </div>
          <div className="container" id="prototype-text-container">
            <p className="text" id="prototype-text" >View the Interactive Prototype</p>
          </div>
          <div className="container" id="prototype-img-container">
              <img className="prototype-img" id="prototype-img-1" src={thumbnail} alt="HiFi Design" />  
              <img className="prototype-img" id="prototype-img-2" src={link} alt="HiFi Design" /> 
          </div>
        </section>
      </div>
    );
}